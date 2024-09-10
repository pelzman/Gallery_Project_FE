import Pagination from "../../../../../globals/pagination";
import useGallery from "../../../../../hooks/useGallery";
import { IGallery } from "../../../../../types";
import { formatDate } from "../../../../../utils/helpers";
const Table = () => {

    const { loading, galleries, deleteGallery, totalItems, fetchGalleries, currentPage, pageSize, hasNext, hasPrevious } = useGallery()

    
    console.log('gallery', galleries)
    const handleChangePage = (page: number) => {
        fetchGalleries(page)
    }
    const handleDelete = async (id: number) => {
        await deleteGallery(id)
    }

    return (
        <div className=" w-[100%] fixed overflow-y-auto h-[65%] lg:w-[80%]">
            <table className="min-w-full  bg-white  border border-gray-200 rounded-lg overflow-y-auto">
                <thead className="overflow-y-auto h-[60%]  w-[100%]" >
                    <tr className="bg-red-500 text-[#ffff]">
                        <th className="text-left p-4 font-semibold">ID</th>
                        <th className="text-left p-4 font-semibold ">File Name</th>
                        <th className="text-left p-4 font-semibold ">Image Link</th>
                        <th className="text-left p-4 font-semibold ">Type</th>
                        <th className="text-left p-4 font-semibold ">CreatedBy</th>
                        <th className=" p-4 text-start  font-semibold">UploadedAt</th>
                        <th className="text-end p-4  font-semibold">Action</th>

                    </tr>
                </thead>
                {loading ? <div className="text-center">Loading...</div>
                    : (
                        <tbody className="overflow-y-auto" >

                            {galleries?.map((role: IGallery) => (

                                <tr key={role?.id} className="border-t ">
                                    <td className="py-2 px-3">{role?.id}</td>
                                    <td className="py-2 px-3">{role?.filename}</td>
                                    <td className="py-2 px-3"> <a href={role?.url}><p className="truncate max-w-[150px]">{role?.url}</p></a> </td>
                                    <td className="py-2 px-2">{role?.galleryType}</td>
                                    <td className="p-2">{role?.uploadedBy}</td>
                                    <td className="py-2 px-3">{formatDate(role?.uploadedAt)}</td>
                                    <td onClick={() => handleDelete(role.id)} className="py-8 px-3 flex justify-center  items-center cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="red">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-1.5 11.5c-.1.9-.9 1.5-1.8 1.5H8.3c-.9 0-1.7-.6-1.8-1.5L5 7M9 7V5c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v2M10 12v6M14 12v6" />
                                        </svg>
                                    </td>
                                </tr>
                            ))}



                        </tbody>
                    )
                }
                <tfoot >
                    <tr className="h-[50px] bg-gray-200 ">
                        <td colSpan={7} className="text-center px-[10px]">
                            <Pagination
                                data={{ totalCount: totalItems, items: galleries }}
                                onPageChange={handleChangePage}
                                currentPage={currentPage}
                                pageSize={pageSize}
                                hasNext={hasNext}
                                hasPrevious={hasPrevious}

                            />
                        </td>
                    </tr>
                </tfoot>

            </table>
        </div>



    );
};

export default Table;


