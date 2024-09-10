import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import SideBar from "./Sidebar"
import img from '../../../../public/assets/modezero.png'
const NavBar = () => {
    const location = useLocation()
    const [toggle, setToggle] = useState(false)
    const [sideBar, setSideBar] = useState(false)

    console.log(location.pathname, 'location')


    const handleToggle = () => {
        setToggle((prev) => !prev)
        setSideBar(true)
    }
    const handleClose = () => {
        setToggle(false)
        setSideBar(false)
    }

    return (
        <div className=" fixed  w-[100%] px-[20px] bg-[#ffff] pt-[-30px] shadow-lg h-[60px] z-50 ">

            <nav className="flex items-center justify-between h-[60px] w-[100%]">
                <Link to="/" ><img src={img} alt="" className="w-[200px] h-[200px] object-contain" /></Link>



                <ul className="hidden   md:flex md:gap-x-[20px] ">

                    <Link to="/">

                        <div className=" relative">
                            <p className="  py-[10px] px-[20px] text-red-600 rounded-lg">Home</p>

                            {location.pathname === '/' && <div className="lg:px-[30px] left-[15px] bottom-[-10px] absolute rounded-t-lg  py-[3px] lg:h-[2px]  lg:bg-[#524B4B]"> </div>}

                        </div>


                    </Link>
                    <Link to="/photography">

                        <div className=" relative">
                            <p className={`py-[10px] px-[20px]  text-red-600 rounded-lg `}>Phoography</p>

                            {location.pathname === '/photography' && <div className="lg:w-[70%] left-[20px] bottom-[-10px] absolute  rounded-t-lg  py-[3px] lg:h-[2px]  lg:bg-[#524B4B]"> </div>}

                        </div>
                    </Link>
                    <Link to="/marketing">



                        <div className=" relative">
                            <p className="  py-[10px] px-[20px]  text-red-600 rounded-lg">Marketing</p>
                            {location.pathname === '/marketing' && <div className="lg:w-[70%] left-[20px] absolute bottom-[-10px] rounded-t-lg  py-[3px] lg:h-[2px]  lg:bg-[#524B4B]"> </div>}

                        </div></Link>
                    <Link to="/sport">
                        <div className=" relative">
                            <p className="  py-[10px] px-[20px]  text-red-600 rounded-lg">Sport</p>

                            {location.pathname === '/sport' && <div className="lg:w-[70%] left-[20px] absolute bottom-[-10px] rounded-t-lg  py-[3px] lg:h-[2px]  lg:bg-[#524B4B]"> </div>}

                        </div>

                    </Link>

                    <Link to="/auth/login"> <button className="py-[10px] px-[20px] bg-red-600 text-[#fff] rounded-lg">Portal</button></Link>

                </ul>






                <div onClick={handleToggle} className=" md:hidden flex justify-center flex-col gap-y-[5px] py-[10px] items-center align-middle bg-[#989898] rounded-sm cursor-pointer relative w-[30px] h-[30px] ">
                    <div
                        className={`w-[15px] h-[2px] bg-[#fff] transition-transform duration-300 absolute ${toggle ? 'rotate-45 translate-y-[5px]' : 'translate-y-[-5px]'}`}
                    ></div>
                    <div
                        className={`w-[15px] h-[2px] bg-[#fff] transition-opacity duration-300 absolute ${toggle ? 'opacity-0' : 'opacity-100 translate-y-[0px]'}`}
                    ></div>
                    <div
                        className={`w-[15px] h-[2px] bg-[#fff] transition-transform duration-300 absolute ${toggle ? '-rotate-45 translate-y-[5px]' : 'translate-y-[5px]'}`}
                    ></div>
                </div>



            </nav>

            {
                sideBar && toggle && <div className='fixed inset-0 z-50' >
                    <SideBar handleClose={handleClose} />
                </div>
            }
        </div>

    )
}

export default NavBar