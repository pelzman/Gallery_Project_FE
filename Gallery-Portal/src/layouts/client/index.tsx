// import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

const ClientLayout = () => {
    return (
        <div >
            <div >
                <Navbar />
            </div>
            <div>
                <Outlet />
            </div>
            {/* <div>
                <Footer />
            </div> */}

        </div>
    )
}

export default ClientLayout