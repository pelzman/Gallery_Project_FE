

import { ErrorMessage, Form, Formik } from 'formik';

import TextError from '../../../../../globals/textError';
import DropBoxInput from '../../../../../globals/DropBoxInput'
import useGallery from '../../../../../hooks/useGallery';
import { addGallerySchema } from '../../../../../validations';

const PhotoForm = ({ handleCloseModal }: { handleCloseModal: () => void }) => {



    const initialValues = {

        galleryType: '',
        selectedFile: null,

    };
    const { addGallery, loading } = useGallery();

    const handleSubmit = async (values: any) => {

        const formData = new FormData();
        try {

            if (values.selectedFile) {
                formData.append('files', values.selectedFile);
            }
            formData.append('galleryType', values.galleryType);
            const res = await addGallery(formData);

            handleCloseModal();
            return res





        } catch (error) {
            console.error('Failed to add gallery:', error);
        }

    };

    return (
        <div className="w-full   lg:h-500 lg:w-[600px] lg:pt-0 lg:mr-[500px] lg:ml-[500px] bg-white rounded-lg shadow-lg">

            <div className="px-5 lg:pt-5">
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={addGallerySchema}
                >
                    {(formikProps) => (
                        <Form className="gap-y-2.5   w-[100%]  lg:items-center lg:px-5 py-5 ">
                            <div className="col-span-1">
                                <DropBoxInput
                                    subText="Drag and drop a file here"
                                    summary="Or click to browse"
                                    MaxFileSizeInMb={5} // Adjust the max file size as needed
                                    onGetFile={(fileProps) => {
                                        if (fileProps.files && fileProps.files.length > 0) {
                                            formikProps.setFieldValue('selectedFile', fileProps.files[0]);
                                        } else {
                                            formikProps.setFieldValue('selectedFile', null);
                                        }
                                    }}
                                />
                            </div>




                            <div>
                                <label htmlFor="galleryType" className="text-sm text-gray-500">GalleryType</label>
                                <span className="text-red-500">*</span>
                                <select
                                    id=""
                                    className="w-full py-2.5 px-4 outline-none rounded-lg bg-white shadow-inner mt-1"
                                    name="galleryType"
                                    value={formikProps.values.galleryType}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                >
                                    <option value="">Select...</option>
                                    <option value="PHOTOSHOOTS">PhotoShoot</option>
                                    <option value="FASHION">Fashion</option>
                                    <option value="PORTFOLIO">Portfolio</option>
                                    <option value="CORPORATION">Corporation</option>
                                    <option value="WEDDING">Wedding</option>
                                    <option value="BIRTHDAY">BirthDay</option>
                                    <option value="GALLERY">SportGallery</option>
                                    <option value="BLOG">Blog</option>
                                    <option value="MATCHES">Matches</option>
                                </select>
                                <ErrorMessage name="galleryType" component={TextError} />
                            </div>



                            {/* Add DropBoxInput Here */}


                            <button disabled={loading} type='submit' className="bg-red-500 text-white py-2.5 px-4 rounded-lg mt-5 w-full lg:col-span-2">
                                {loading ? 'Creating...' : "Create"}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default PhotoForm;
