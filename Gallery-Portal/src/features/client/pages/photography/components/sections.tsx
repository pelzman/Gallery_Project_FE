
import Card from "../../../../../globals/card"
import { photoSection } from '../data';
import {  useNavigate } from "react-router-dom"
import useGallery from "../../../../../hooks/useGallery";

const PhotoSection = () => {
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

            <h2 className=" text-center text-red-500 text-[30px]">PHOTOGHRAPH SECTION</h2>
            <div className='grid grid-cols-1 text-center mt-[50px]  h-[200px]  w-[100%] gap-7 md:grid md:grid-cols-2 lg:grid-cols-3  lg:items-center px-[20px]  '>


                <div className="relative group">
                    <div
                        onClick={() => handleClickCard(photoSection.wedding, '/wedding')}
                        className="relative w-[100%] h-[400px] cursor-pointer"
                    >
                        <Card
                            className="w-[100%] h-[100%] transition-transform duration-300 ease-in-out"
                            image="/assets/images/wedding.jpg"
                        >
                            <p className="text-gray-700 text-lg">Weddings</p>
                        </Card>
                        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <button className="bg-white text-black px-4 py-2 rounded-md shadow-lg">
                                View All Weddings
                            </button>
                        </div>
                    </div>
                </div>


                <div className="relative group">
                    <div
                        onClick={() => handleClickCard(photoSection.birthday, '/birthday')}
                        className="relative w-[100%] h-[400px] cursor-pointer"
                    >
                        <Card
                            className="w-[100%] h-[100%] transition-transform duration-300 ease-in-out"
                            image="/assets/images/birthday.jpg"
                        >
                            <p className="text-gray-700 text-lg">Birthdays</p>
                        </Card>
                        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <button className="bg-white text-black px-4 py-2 rounded-md shadow-lg">
                                View All Birthdays
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative group">
                    <div
                        onClick={() => handleClickCard(photoSection.photoshot, '/photoshot')}
                        className="relative w-[100%] h-[400px] cursor-pointer"
                    >
                        <Card
                            className="w-[100%] h-[100%] transition-transform duration-300 ease-in-out"
                            image="/assets/images/photoshot.jpg"
                        >
                            <p className="text-gray-700 text-lg">Photo Shoot</p>
                        </Card>
                        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <button className="bg-white text-black px-4 py-2 rounded-md shadow-lg">
                                View All Photo Shoots
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative group">
                    <div
                        onClick={() => handleClickCard(photoSection.portfolio, '/portfolio')}
                        className="relative w-[100%] h-[400px] cursor-pointer"
                    >
                        <Card
                            className="w-[100%] h-[100%] transition-transform duration-300 ease-in-out"
                            image="/assets/images/portfolio.jpg"
                        >
                            <p className="text-gray-700 text-lg">Portfolio</p>
                        </Card>
                        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <button className="bg-white text-black px-4 py-2 rounded-md shadow-lg">
                                View All Portfolios
                            </button>
                        </div>
                    </div>
                </div>


                <div className="relative group">
                    <div
                        onClick={() => handleClickCard(photoSection.fashion, '/fashion')}
                        className="relative w-[100%] h-[400px] cursor-pointer"
                    >
                        <Card
                            className="w-[100%] h-[100%] transition-transform duration-300 ease-in-out"
                            image="/assets/images/fashion.jpg"
                        >
                            <p className="text-gray-700 text-lg">Fashion</p>
                        </Card>
                        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <button className="bg-white text-black px-4 py-2 rounded-md shadow-lg">
                                View All Fashions
                            </button>
                        </div>
                    </div>
                </div>

                <div className="relative group">
                    <div
                        onClick={() => handleClickCard(photoSection.corporation, '/corporation')}
                        className="relative w-[100%] h-[400px] cursor-pointer"
                    >
                        <Card
                            className="w-[100%] h-[100%] transition-transform duration-300 ease-in-out"
                            image="/assets/images/corporation.jpg"
                        >
                            <p className="text-gray-700 text-lg">Corporation</p>
                        </Card>
                        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                            <button className="bg-white text-black px-4 py-2 rounded-md shadow-lg">
                                View All Corporations
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoSection