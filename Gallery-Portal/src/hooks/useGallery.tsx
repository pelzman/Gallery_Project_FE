import { useGalleryContext } from "../context/galleryContext";
const useGallery = () => {
    const { galleries, currentPage, pageSize, fetchGalleries, fetchGalleryById, gallery, totalItems, hasNext, hasPrevious, fetchGalleriesByType, login, addGallery, deleteGallery, galleriesByType, logout, loading, error } = useGalleryContext()
    return { galleries, currentPage, fetchGalleries, pageSize, fetchGalleryById, gallery, totalItems, hasNext, hasPrevious, fetchGalleriesByType, addGallery, login, logout, deleteGallery, galleriesByType, loading, error }
}
export default useGallery