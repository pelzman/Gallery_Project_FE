import { apiRequest } from "../api"

class GalleryService {

    public async getGalleries() {
        try {
            const response = await apiRequest.get('auth/all?page=pageSize')
            return response.data

        } catch (error: any) {
            return error.message
        }
    }

    public async getGalleryById(id: number) {
        try {
            const response = await apiRequest.get(`auth/${id}`)
            return response.data

        } catch (error: any) {
            return error.message
        }
    }
    public async getGalleryByType(type: string) {
        try {
            console.log(type, 'fetching by type')
            const response = await apiRequest.get(`auth/get-photo-by-type?galleryType=${type}`)
            return response.data

        } catch (error: any) {
            return error.message
        }
    }
    public async addGallery(payload: FormData) {
        try {
            const response = await apiRequest.post('admin/upload_multiple', payload)
            return response.data
        } catch (error: any) {
            return error.message
        }
    }
    public async deleteGallery(id: number) {
        try {

            const response = await apiRequest.delete(`admin/${id}`)
            return response.data

        } catch (error: any) {
            return error.message
        }
    }


}
export default GalleryService
