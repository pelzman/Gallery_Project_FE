import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react'
import GalleryService from '../services/galleryService'
import { appNotify } from '../globals/appNotify'
import { storeTokens, clearTokens } from '../api'

import { loginAttribute, IGallery, IGalleryType } from '../types'
import AuthService from '../services/authService'

interface GalleryContextType {
    currentPage: number,
    pageSize: number,
    totalItems: number,
    hasNext: boolean,
    hasPrevious: boolean,
    gallery: IGallery | null
    galleries: IGallery[]
    galleriesByType: IGalleryType
    fetchGalleryById: (id: number) => void
    fetchGalleriesByType: (type: string) => void
    fetchGalleries: (page: number) => Promise<void>
    login: (payload: loginAttribute) => Promise<boolean>
    addGallery: (gallery: FormData) => Promise<void>
    deleteGallery: (id: number) => Promise<void>

    loading: boolean,
    error: string
    logout: () => void
}

const galleryService = new GalleryService()
const authService = new AuthService()
const gelleryConetxt = createContext<GalleryContextType | undefined>(undefined)


export const GalleryProvider = ({ children }: { children: ReactNode }) => {



    const [galleries, setGalleries] = useState<IGallery[]>([])
    const [galleriesByType, setGalleriesByType] = useState<IGalleryType>({ data: { content: [] } })
    const [gallery, setGallery] = useState<IGallery | null>(null)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [pageSize] = useState<number>(10)
    const [totalItems, setTotalItems] = useState<number>(0)

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const fetchGalleryById = async (id: number) => {
        setLoading(true)
        try {
            const data = await galleryService.getGalleryById(id)
            setGallery(data)
            setLoading(false)
        } catch (error: any) {
            setError(error)
            appNotify('error', error.message);
            setLoading(false)
        }
    }

    const fetchGalleries = async (page: number = 1) => {
        setLoading(true)
        try {

            const data = await galleryService.getGalleries()
            setLoading(false)
            setTotalItems(data?.totalElements)
            setCurrentPage(page)
            setGalleries(data?.data)
        } catch (error: any) {
            setError(error)
            appNotify('error', error.message);
        }

    }

    useEffect(() => {

        fetchGalleries(currentPage)
    }, [currentPage])





    // const fetchGalleriesByType = useCallback(async (type: string) => {
    //     // Your fetch logic here

    //     setLoading(true)
    //     try {

    //         const data = await galleryService.getGalleryByType(type)
    //         setLoading(false)
    //         setGalleriesByType(data)
    //     } catch (error: any) {
    //         setError(error.data.message)
    //         appNotify('error', error.data.message);
    //     }

    // }, []);

    const fetchGalleriesByType = useCallback((type: string) => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Check if data exists in localStorage
                const storedData = localStorage.getItem(`galleries_${type}`);
                if (storedData) {
                    // If data is found, use it
                    setGalleriesByType(JSON.parse(storedData));
                    setLoading(false);
                } else {
                    // If no data, fetch from the API
                    const data = await galleryService.getGalleryByType(type);
                    setLoading(false);
                    setGalleriesByType(data);

                    // Store the fetched data in localStorage
                    localStorage.setItem(`galleries_${type}`, JSON.stringify(data));
                }
            } catch (error: any) {
                setError(error.data.message);
                appNotify('error', error.data.message);
            }
        };

        fetchData();
    }, []);






    const addGallery = async (gallery: any) => {
        setLoading(true)
        try {
            const newGallery = await galleryService.addGallery(gallery)

            if (newGallery) {
                setGalleries(prev => [...prev, newGallery]);
                setLoading(false)
                fetchGalleries()
                appNotify('success', 'Gallery added successfully!');
            }







        } catch (error: any) {
            setError(error.message)
            appNotify('error', 'Failed to add gallery. Please try again.');
        }

    }
    const deleteGallery = async (id: number) => {
        try {

            await galleryService.deleteGallery(id)
            // setGalleries(prev => prev?.filter(gallery => gallery.id !== id));
            fetchGalleries()


            appNotify('success', 'Gallery deleted successfully!');


        }
        catch (error: any) {
            setError(error.message)
            appNotify('error', 'Failed to delete gallery. Please try again.');
        }
    }

    const login = async (payload: loginAttribute): Promise<boolean> => {
         setLoading(true)
        try {

            const response = await authService.login(payload)
            if (response.data.statusCode === 200) {

                storeTokens(response?.data?.data?.token)
                appNotify('success', response.data.message)

                return true
            }

            else {
                appNotify('error', 'Login failed. Please try again.');

                return false
            }
        }
        catch (error: any) {
            setError(error.message)
            appNotify('error', 'Login failed. Please try again.');
            return false
        }
        finally {
            setLoading(false); // Ensure loading is set to false in all cases
        }

    }
    const logout = () => {
        clearTokens()
    }

    const hasNext = currentPage < Math.ceil(totalItems / pageSize)
    const hasPrevious = currentPage > 1


    return (
        <gelleryConetxt.Provider value={{
            galleries,
            login, logout, galleriesByType,
            deleteGallery, loading, error, addGallery,
            currentPage,
            fetchGalleryById,
            gallery,
            totalItems,
            pageSize,
            hasNext,
            hasPrevious,
            fetchGalleriesByType,
            fetchGalleries

        }}>
            {children}
        </gelleryConetxt.Provider>
    )

}
export const useGalleryContext = () => {
    const context = useContext(gelleryConetxt)

    if (context === undefined) {
        throw new Error('useGalleryContext must be used within a GalleryProvider')
    }
    return context
}





