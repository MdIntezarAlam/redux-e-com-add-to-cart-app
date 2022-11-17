
import { useFormik } from 'formik'
import React from 'react'
// import '../../yup_page/login.css'
import { initialValues } from '../utils/constants'
import { loginSchema } from '../schema/schema'
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate= useNavigate()
    const { values, errors, handleChange, handleSubmit, touched, handleBlur } = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values, action) => {
            console.log(values)
            action.resetForm()
            navigate("/products")
        }
    })

    return (
        <div className='login'>
            <div className='login_box'>
                <form onSubmit={handleSubmit}>
                    <input
                        className='login_input'
                        autoComplete='off'
                        type="text"
                        name="name"
                        placeholder='Enter Username '
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                    />
                    {errors.name && touched.name ? (<span className='span'>{errors.name}</span>) : null}
                    <input
                        className='login_input'
                        autoComplete='off'
                        type="email"
                        name="email"
                        placeholder='Enter Username Eamail '
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                    />
                    {errors.email && touched.email ? (<span className='span'>{errors.email}</span>) : null}
                    <input
                        className='login_input'
                        autoComplete='off'
                        type="password"
                        name="password"
                        placeholder='Enter Username Password'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                    />
                    {errors.password && touched.password ? (<span className='span'>{errors.password}</span>) : null}
                    <input
                        className='login_input'
                        autoComplete='off'
                        type="number"
                        name="phone"
                        placeholder='Enter phone number '
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.phone}
                    />
                    {errors.phone && touched.phone ? (<span className='span'>{errors.phone}</span>) : null}
                        <button className='login_btn'>Signup</button>
                </form>
            </div>
        </div>
    )
}

export default Login