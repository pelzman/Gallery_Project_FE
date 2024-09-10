import { Route, Routes } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa"
import PrivateRoutes from "./privateRoute";
import ClientLayout from "../layouts/client";
import BackgroundImage from "../features/client/pages/home/components/BackgroundImage";
import Photography from "../features/client/pages/photography";
import Marketing from "../features/client/pages/marketing";
import Sport from "../features/client/pages/sport";
import GetPhotoBySectionType from '../features/client/pages/photography/components/wedding'
import GetPhotoBySectionBirthday from "../features/client/pages/photography/components/birthday";
import GetPhotoBySectionFashion from "../features/client/pages/photography/components/fashion";
import GetPhotoBySectionPhotoShot from "../features/client/pages/photography/components/photoshot";
import GetPhotoBySectionPortfolio from "../features/client/pages/photography/components/portfolio";
import GetPhotoBySectionCorporation from "../features/client/pages/photography/components/corporation";
import GetMarkettingBySectionBlog from "../features/client/pages/marketing/component/blog";
import GetSportBySectionGallery from "../features/client/pages/sport/component/gallery";
import GetSportBySectionMatches from "../features/client/pages/sport/component/matches";
const MainRoutes = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '8132913298'; // Replace with your WhatsApp number
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
    };
    return (
        <>
            <FaWhatsapp className="fixed z-50 w-[80px] h-[80px] bottom-[20px] right-[20px] text-green-500 cursor-pointer" onClick={handleWhatsAppClick} />
            <Routes>
                <Route path='/auth/*' element={<PrivateRoutes />} />
                <Route path='/admin/*' element={<PrivateRoutes />} />



                <Route path="/" element={<ClientLayout />} >
                    <Route index={true} element={<BackgroundImage />} />
                    <Route path="/photography" element={<Photography />}>
                        <Route path="wedding" element={<GetPhotoBySectionType />} />

                    </Route>
                    <Route path="birthday" element={<GetPhotoBySectionBirthday />} />
                    <Route path="/wedding" element={<GetPhotoBySectionType />} />
                    <Route path="/fashion" element={<GetPhotoBySectionFashion />} />
                    <Route path="/corporation" element={<GetPhotoBySectionCorporation />} />
                    <Route path="/portfolio" element={<GetPhotoBySectionPortfolio />} />
                    <Route path="/photoshot" element={<GetPhotoBySectionPhotoShot />} />
                    <Route path="/blog" element={<GetMarkettingBySectionBlog />} />
                    <Route path="/marketing" element={<Marketing />} />
                    <Route path="/sport-gallery" element={<GetSportBySectionGallery />} />
                    <Route path="/matches" element={<GetSportBySectionMatches />} />

                    <Route path="/sport" element={<Sport />} />
                </Route>


                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </>

    );
};
export default MainRoutes;