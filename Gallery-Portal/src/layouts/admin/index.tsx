import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Outlet } from 'react-router-dom';

// const Layout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar toggleSidebar={toggleSidebar} />
//       <div className="flex flex-1">
//         <Sidebar isOpen={sidebarOpen} />
//         <main className="flex-1 p-4">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <Navbar toggleSidebar={toggleSidebar} />

            {/* Main content area */}
            <div className="flex flex-1 overflow-hidden ">
                {/* Sidebar */}
                <div
                    className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full '
                        } transition-transform duration-200  ease-in-out bg-gray-800 w-64 md:relative md:translate-x-0 z-20`}
                >
                    <Sidebar isOpen={sidebarOpen} closeSidebar={closeSidebar} />
                </div>

                {/* Main content (wrapped with a margin to accommodate the Sidebar) */}
                <div className="flex-1 flex flex-col overflow-hidden md:ml-0">
                    <main className="flex-1 p-4  bg-gray-100">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;

