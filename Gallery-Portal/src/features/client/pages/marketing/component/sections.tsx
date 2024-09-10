import { useNavigate } from "react-router-dom"
import Card from "../../../../../globals/card"
import useGallery from "../../../../../hooks/useGallery"
import { markettingSection } from "../data"

const MarketingSection = () => {
    const navigate = useNavigate()
    const { fetchGalleriesByType } = useGallery()

    console.log('firstname')
    const handleClickCard = (typeValue: string, path: string) => {
        console.log(typeValue, 'type')
        fetchGalleriesByType(typeValue)
        navigate(path)
    }
    return (
        <div>

            <h2 className=" text-center text-red-500 text-[30px]">MARKETING SECTION</h2>
            <div className='grid grid-cols-1 text-center mt-[50px]  h-[200px]  w-[100%] gap-7 md:grid md:grid-cols-2 lg:grid-cols-3  lg:items-center px-[20px]  '>
                <div className="relative group">
                    <div
                        onClick={() => handleClickCard(markettingSection.blog, '/blog')}
                        className="relative w-[100%] h-[400px] cursor-pointer"
                    >
                        <Card
                            className="w-[100%] h-[100%] transition-transform duration-300 ease-in-out"
                            image="/assets/images/blog.jpg"
                        >
                            <p className="text-gray-700 text-lg">Blogs</p>
                        </Card>
                        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <button className="bg-white text-black px-4 py-2 rounded-md shadow-lg">
                                View All Blogs
                            </button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default MarketingSection