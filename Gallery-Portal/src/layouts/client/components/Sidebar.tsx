import { Link } from "react-router-dom"

const SideBar = ({ handleClose }: { handleClose: () => void }) => {


    return (
        <div className=' md:hidden fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center text-white'>
            <button
                className='absolute top-5 right-5 text-2xl'
                onClick={handleClose}

            >
                &times;
            </button>
            <ul className='flex flex-col gap-y-6 text-center'>
                <Link onClick={handleClose} to='/'>Home</Link>
                <Link onClick={handleClose} to='/photography'>Photography</Link>
                <Link onClick={handleClose} to='/marketing'>Marketing</Link>
                <Link onClick={handleClose} to='/sport'>Sport</Link>
                <Link onClick={handleClose} to='/auth/login'> Portal</Link>

            </ul>
        </div>
    );
};

export default SideBar;