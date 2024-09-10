import { FaWhatsapp } from "react-icons/fa"

import Hero from "./components/Hero";

const Home = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '8132913298'; // Replace with your WhatsApp number
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
    };
    return (
        <>
            <section className="bg-red-600">
                <Hero />
            </section>
            <section className="relative">
                {/* <BackgroundImage /> */}
                <FaWhatsapp className="fixed z-50 w-[80px] h-[80px] bottom-[20px] right-[20px] text-green-500" onClick={handleWhatsAppClick} />
            </section>
        </>

    )
}

export default Home