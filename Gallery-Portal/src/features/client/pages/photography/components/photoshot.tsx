import { useEffect, useState } from "react"
import Card from "../../../../../globals/card"

import useGallery from "../../../../../hooks/useGallery"
import { Modal } from "@mui/material"

import FullScreenView from "../../../../../globals/fullscreenView"


const GetPhotoBySectionPhotoShot = () => {

    const { loading, galleriesByType, fetchGalleriesByType, fetchGalleryById, gallery } = useGallery()
    const [id, setId] = useState(null)

    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {

        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    } 

    console.log(gallery, 'gallery')

    console.log(galleriesByType, 'sectionName')
    useEffect(() => {
 
        fetchGalleriesByType('PHOTOSHOOTS')
    }, [])
    useEffect(() => {
        if (id) {
     fetchGalleryById(id)
 }
   
 }, [id])






    return (
     
        loading ? <p className=" w-[100%] flex  flex-col justify-center items-center h-screen" >loading....</p> : galleriesByType?.data?.content.length === 0 ? <p className=" w-[100%] flex  flex-col justify-center items-center h-screen">No data</p> :
            <div className=" grid grid-cols-1 text-center   h-full  w-[100%] md:w-[800px] lg:w[800px] gap-7 md:grid md:grid-cols-2 lg:grid-cols-3  lg:items-center px-[20px]">
                {


                    galleriesByType?.data?.content.map((gallery, index) => (

                        <div

                            className=" relative group w-[100%]  cursor-pointer mt-[80px]"

                        >


                            <Card

                                key={index}
                                className="w-[100%] h-[200px] transition-transform duration-300 ease-in-out"
                                image={gallery.image}
                            >
                                <img src={gallery.url} alt="" className="w-[100%] h-[200px]" />

                            </Card>
                            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <button onClick={() => {setId(gallery.id)
                                handleOpenModal()
                                }} className="bg-white text-black px-4 py-2 rounded-md shadow-lg">
                                    Full screen
                                </button>
                            </div>
                        </div>
                    ))
                }



{
                        openModal &&
                        <Modal
                            open={openModal}
                            onClose={handleCloseModal}
                            className="flex items-center justify-center"
                        >

                            <FullScreenView
                                gallery={gallery}
                            handleClose={handleCloseModal}
                            />
                        </Modal>
                    }

            </div>
    )
}

export default GetPhotoBySectionPhotoShot