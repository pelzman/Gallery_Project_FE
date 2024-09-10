
import Card from '../../../../../globals/card';
import { galleryType } from '../data';
import { Link, useNavigate } from 'react-router-dom';



// const images = [
//     '../assets/images/bg-one.jpg',
//     '../assets/images/image-two.jpg',
//     '../assets/images/image-three.jpg',
//     '../assets/images/image-four.jpg',
// ];

const BackgroundImage: React.FC = () => {
    const navigate = useNavigate()


    const handleClickCard = (typeValue: string, path: string) => {
        console.log(typeValue, 'type')

        navigate(path, { state: { type: typeValue } })
    }

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentImage((prevImage) => {
    //             const currentIndex = images.indexOf(prevImage);
    //             const nextIndex = (currentIndex + 1) % images.length;
    //             return images[nextIndex];
    //         });
    //     }, 3000); // Change image every 3 seconds

    //     return () => clearInterval(intervalId);
    // }, []);



    return (
        <div
            className="h-screen w-screen bg-cover bg-center transition-all duration-500 overflow-y-auto  lg:overflow-y-hidden "
        // style={{ backgroundImage: `url(${currentImage})` }}
        >

            <div className='grid grid-cols-1 mt-[50px] w-[100%] gap-7 md:grid md:grid-cols-2 lg:grid-cols-3 h-screen lg:items-center px-[20px] py-[30px] '>

                <div >
                    <h2 className='text-center text-[24px] font-bold font-sans'>Photography</h2>

                    <Link to={'/photography'}>
                        <Card
                            image="/assets/images/photograph.jpg"

                            className=""
                            imgProps={{ alt: "Sample Image", loading: "lazy" }}
                        />
                    </Link>


                </div>


                <div onClick={() => handleClickCard(galleryType.consultant, '/marketing')}>
                    <h2 className='text-center text-[24px] font-bold font-sans'>Marketing Consultancy</h2>
                    <Link to={'/marketing'}>
                        <Card
                            image="/assets/images/marketing.jpg"

                            className="w-[100%]"
                            imgProps={{ alt: "Sample Image", loading: "lazy" }}
                        />
                    </Link>

                </div>

                <div onClick={() => handleClickCard(galleryType.sport, '/sport')}>
                    <h2 className='text-center text-[24px] font-bold font-sans'>Sport Agency</h2>
                    <Link to={'/sport'}>
                        <Card
                            image="/assets/images/sports.jpg"

                            className="w-[100%] mb-[50px] sm:mb-0"
                            imgProps={{ alt: "Sample Image", loading: "lazy" }}
                        />
                    </Link>


                </div>
            </div>




        </div>
    );
};

export default BackgroundImage;
