import { useEffect } from "react"
import Card from "../../../../../globals/card"

import useGallery from "../../../../../hooks/useGallery"



const GetMarkettingBySectionBlog = () => {

    const { loading, galleriesByType, fetchGalleriesByType } = useGallery()
    useEffect(() => {
        fetchGalleriesByType('BLOG')
    }
        , [])

    return (
        loading ? <p className=" w-[100%] flex  flex-col justify-center items-center h-screen" >loading....</p> : galleriesByType?.data?.content.length === 0 ? <p className=" w-[100%] flex  flex-col justify-center items-center h-screen">No data</p> :
            <div className=" grid grid-cols-1 text-center   h-full  w-[100%] md:w-[800px] lg:w[800px] gap-7 md:grid md:grid-cols-2 lg:grid-cols-3  lg:items-center px-[20px]">
                {
                    galleriesByType?.data?.content.map((gallery:any, index:number) => (
                        <div

                            className=" relative group w-[100%]  cursor-pointer mt-[80px]"

                        >

                            <Card
                                key={index}
                                className="w-[100%] h-[200px] transition-transform duration-300 ease-in-out"
                                image={gallery.image}
                            >
                                <img src={gallery.url} alt="" className="w-[100%] h-[200px]" />
                                <p>{gallery.sectionName}</p>
                            </Card>
                            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                                <button className="bg-white text-black px-4 py-2 rounded-md shadow-lg">
                                    Full screen
                                </button>
                            </div>
                        </div>
                    ))
                }




            </div>
    )
}

export default GetMarkettingBySectionBlog