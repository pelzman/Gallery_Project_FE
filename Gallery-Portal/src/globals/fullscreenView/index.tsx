

const FullScreenView = ({ gallery, handleClose }: { gallery: any, handleClose: () => void }) => {

    console.log('gallery view', gallery)

    return (
        <div onClick={handleClose} className="w-[100%] md:w-[70%] ">
            {

                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <img src={gallery?.data?.url} className="w-[800px] h-[700px] object-contain rounded-md"
                        onClick={(e) => e.stopPropagation()}
                    />

                </div>

            }
        </div>
    )
}

export default FullScreenView