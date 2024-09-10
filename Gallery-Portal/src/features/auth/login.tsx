
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../globals/input'
import image from '../../../public/assets/images/image-one.jpg'
import { Form, Formik, ErrorMessage } from 'formik'
import { loginAttribute } from '../../types'
import { loginSchema } from '../../validations'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { useState } from 'react'
import TextError from '../../globals/textError'
import useGallery from '../../hooks/useGallery'

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const initialValues: loginAttribute = {
        email: '',
        password: '',

    }
    const { loading, login } = useGallery()
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()


    const handleSubmit = async (values: any) => {


        try {

            loading

           const isSucess =  await login(values);

           if(isSucess){
            navigate('/admin')
           }


           

        } catch (error) {

            console.error('Login failed:', error);
            // Handle the error, maybe show a toast or error message
        }
    }
    return (
        <div className=' lg:w-[100%] lg:h-screen pt-[50px] lg:pt-0  lg:flex lg:justify-start gap-x-[100px] '>

            <div className='hidden lg:flex  lg:w-[60%]'>
                <img src={image} alt="" />
            </div>


            <div>
                <div className=' mt-[-20px] px-[20px] lg:pt-[40px] lg:flex lg:items-center lg-w-1/3'>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={loginSchema}
                    >
                        {(formikProps) => (
                            <Form className=" space-y-[10px]  lg:space-y-[20px] lg:px-[20px] lg:w-[500px]  w-{100%]">


                                <div className=' w-[100%]  relative pt'>
                                    <Input
                                        label='Email'
                                        type="text"
                                        isRequired
                                        name='email'
                                        value={formikProps.values.email}
                                        onChange={formikProps.handleChange}
                                        onBlur={formikProps.handleBlur}
                                        className='lg:w-[100%]'

                                    />
                                    <ErrorMessage name="email" component={TextError} />
                                </div>

                                <div className=' w-[100%]  relative'>
                                    <Input
                                        label='Password'

                                        type={showPassword ? 'text' : 'password'}
                                        isRequired
                                        name='password'
                                        value={formikProps.values.password}
                                        onChange={formikProps.handleChange}
                                        onBlur={formikProps.handleBlur}
                                        className='lg:w-[100%]'

                                    />
                                    <p onClick={() => setShowPassword(!showPassword)} className='absolute right-[20px] top-[40px] cursor-pointer'>{!showPassword ? <FaRegEye /> : <FaRegEyeSlash />}</p>
                                    <ErrorMessage name="password" component={TextError} />
                                </div>

                                <button disabled={loading} type="submit" className='bg-red-600 text-white py-2.5 px-4 rounded-lg mt-[20px] w-[100%]'> {loading ? "loading" : 'Login'}</button>

                            </Form>
                        )}
                    </Formik>

                </div>
                <p className='text-center mt-[10px] font-Open Sans'> not an admin, kindly go back <Link to='/'> <span className='cursor-pointer text-red-500'>Home</span></Link></p>
            </div>





        </div>
    )
}

export default Login