
import { Modal } from '@mui/material'
import { useState } from 'react'
import PhotoForm from './PhotoForm'
const AddPhotoButton = () => {

    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    return (
        <div>
            <button onClick={handleOpenModal} className="px-[10px] py-[5px] bg-red-500 text-[#fff] rounded-md cursor-pointer">New Photo</button>


           {
            openModal && 
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                className='mt-[150px] mx-[10px]'
            >
                  <PhotoForm  handleCloseModal = {handleCloseModal}/>

            </Modal>
           } 
        </div>
    )
}

export default AddPhotoButton