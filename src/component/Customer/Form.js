import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Form = () => {
    let navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
            user_name: "",
            user_email: "",
            user_tel: "",
            user_date: "",
            user_address: "",
            user_city: "",
            user_state: "",
            user_message: ""
        }, validate: values => {
            const errors = {};

            if (!values.user_name) {
                errors.user_name = 'Enter your Name';
            }
            else if (!values.user_email) {
                errors.user_email = 'Enter your EmailId should contain @gmail.com ';
            }
            else if (!values.user_tel) {
                errors.user_tel = 'Enter your Mobile Number Ex : 99xxx-xxx00';
            }
            else if (!values.user_date) {
                errors.user_date = 'Enter your Date Of Birth Before 2020 Year ';
            }
            else if (!values.user_address) {
                errors.user_address = 'Enter your Address';
            }
            else if (!values.user_city) {
                errors.user_city = 'Enter your City';
            }
            else if (!values.user_state) {
                errors.user_state = 'Enter your State';
            }
            else if (!values.user_message) {
                errors.user_message = 'Share Your Thoughts';
            }
            return errors;
        },
        onSubmit: async values => {
            try {
                await axios.post("https://userdetailsforguvi.herokuapp.com/userdetail", values)
                alert("Data Saved ")
                navigate('/servicelist')
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (

        <div className='container'>
            <h1 className='text-center fw-bold'>Details</h1>
            <form onSubmit={formik.handleSubmit} >

                <div className="input-container">
                    <input
                        type="text"
                        className="form-control boxs"
                        name="user_name"
                        placeholder="Name"
                        maxLength={10}
                        onChange={formik.handleChange}
                        value={formik.values.user_name} />
                    <span className='error'> {formik.errors.user_name}</span>
                </div>
                <div className="input-container">
                    <input
                        type="email"
                        className="form-control boxs"
                        name="user_email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        value={formik.values.user_email} />
                    <span className='error'> {formik.errors.user_email}</span>
                </div>
                <div className="input-container">
                    <input
                        type="tel"
                        className="form-control boxs"
                        name="user_tel"
                        placeholder="Tel-0000000000"
                        pattern="[0-9]{5}[0-9]{5}"
                        maxLength={10}
                        onChange={formik.handleChange}
                        value={formik.values.user_tel} />
                    <span className='error'> {formik.errors.user_tel}</span>
                </div>
                <div className="input-container">
                    <input
                        type="date"
                        className="form-control boxs"
                        name="user_date"
                        placeholder="DOB"
                        min="1950-01-01"
                        max="2020-12-31"
                        onChange={formik.handleChange}
                        value={formik.values.user_date} />
                    <span className='error'> {formik.errors.user_date}</span>
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        className="form-control boxs"
                        name="user_address"
                        placeholder="Address"
                        maxLength={60}
                        onChange={formik.handleChange}
                        value={formik.values.user_address} />
                    <span className='error'> {formik.errors.user_address}</span>
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        className="form-control boxs"
                        name="user_city"
                        placeholder="City"
                        maxLength={15}
                        onChange={formik.handleChange}
                        value={formik.values.user_city} />
                    <span className='error'> {formik.errors.user_city}</span>
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        className="form-control boxs"
                        name="user_state"
                        placeholder="State"
                        maxLength={15}
                        onChange={formik.handleChange}
                        value={formik.values.user_state} />
                    <span className='error'> {formik.errors.user_state}</span>
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        className="form-control boxs"
                        name="user_message"
                        placeholder="Any Message"
                        maxLength={100}
                        onChange={formik.handleChange}
                        value={formik.values.user_message} />
                    <span className='error'> {formik.errors.user_message}</span>
                </div>
                <div className=" input-container fw-bold">
                    <input type="submit" className="form-control " value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Form
