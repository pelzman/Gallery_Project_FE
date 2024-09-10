

// const Sidebar = ({ isOpen }: { isOpen: boolean }) => {
//     return (
//         <aside
//             className={`bg-gray-700 text-white w-64 space-y-6 p-4 absolute inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
//                 } lg:relative md:translate-x-0 transition-transform duration-200 ease-in-out`}>
//             <nav>
//                 <ul className="space-y-4">
//                     <li><a href="#" className="block p-2 hover:bg-gray-600 rounded">Dashboard</a></li>
//                     <li><a href="#" className="block p-2 hover:bg-gray-600 rounded">Users</a></li>
//                     <li><a href="#" className="block p-2 hover:bg-gray-600 rounded">Settings</a></li>
//                     <li><a href="#" className="block p-2 hover:bg-gray-600 rounded">Reports</a></li>
//                 </ul>
//             </nav>
//         </aside>
//     );
// };

// export default Sidebar;

import { Link } from 'react-router-dom';
import useGallery from "../../../hooks/useGallery";
const Sidebar = ({ closeSidebar }: { isOpen: boolean, closeSidebar: () => void }) => {
    const {logout} = useGallery()
    return (
        <div className="h-full text-white bg-red-500 ">
            <div className="flex justify-end p-4 md:hidden">
                <button
                    onClick={closeSidebar}
                    className="text-white focus:outline-none"
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
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            <nav className="space-y-2 p-4 lg:pt-[100px]">
                <Link to="/admin" onClick={closeSidebar} className="flex py-2 px-4 hover:bg-gray-700 rounded ">
                    <svg
                        className="h-6 w-6 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7m-9 11V8m0 0l-7 7h14l-7-7z"
                        />
                    </svg>
                    Dashboard
                </Link>
                {/* <div className=' space-y-[20px]'>
                    <Link to="/users" onClick={closeSidebar} className="flex py-2 px-4 hover:bg-gray-700 rounded">
                        <svg
                            className="h-6 w-6 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 20h5v-2a2 2 0 00-2-2h-4m-5 4h-4a2 2 0 01-2-2v-1m10-7a4 4 0 10-8 0 4 4 0 008 0zm6 4v6m-6-6v6m-6-6v6m6-6H4"
                            />
                        </svg>
                        Users
                    </Link>
                    <Link to="/settings" onClick={closeSidebar} className="flex py-2 px-4 hover:bg-gray-700 rounded">
                        <svg
                            className="h-6 w-6 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0 6c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-12c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm6 12c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"
                            />
                        </svg>
                        Settings
                    </Link>
                </div> */}


            </nav>

            <nav className=" pt-[400px] lg:pt-[350px] p-4">

                <Link to="/" onClick={logout} className="flex py-2 px-4 hover:bg-gray-700 rounded">
                    <svg
                        className="h-6 w-6 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6-4v8m4-12h2a2 2 0 012 2v12a2 2 0 01-2 2h-2m-4-4v-8"
                        />
                    </svg>
                    Logout
                </Link>

            </nav>
        </div>


    );
};

export default Sidebar;


