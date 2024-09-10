

// const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
//     return (
//         <header className="bg-gray-800 text-white p-4 flex justify-between items-center fixed overflow-y-auto w-[100%]">
//             <div className="text-lg font-semibold">Admin Portal</div>
//             <button className="md:hidden text-white focus:outline-none" onClick={toggleSidebar}>
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//                 </svg>
//             </button>
//         </header>
//     );
// };



// export default Navbar;


const Navbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {

    return (
        <nav className="bg-white text-white p-4 flex justify-between items-center fixed w-[100%]">
            {/* Sidebar Toggle Button for Mobile */}

            <button
                onClick={toggleSidebar}
                className="text-red-500 focus:outline-none md:hidden"
            >
                <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                </svg>
            </button>
            {/* Branding or Title */}
            <div className="text-xl ">Admin Portal</div>
        </nav>
    );
};

export default Navbar;

