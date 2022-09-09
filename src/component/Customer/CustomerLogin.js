import React, { useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

const CustomerLogin = () => {
    let navigate = useNavigate()
    let formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: (values) => {
            const errors = {}
            if (!values.email) {
                errors.email = "Email Missing";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = "Password  missing";
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                let loginData = await axios.post('https://userdetailsforguvi.herokuapp.com/user-login', values);
                window.localStorage.setItem('loginsecretkey', loginData.data.token);
                {
                    loginData.data.message === "login successfully" ?
                        navigate('/servicelist') : alert("Does not match")
                }
            } catch (error) {
                console.log(error);
                alert('Something went wrong');
            }
        },
    })

    useEffect(() => {
        window.localStorage.removeItem('loginsecretkey')
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 login">
                    <div className="mt-2">
                        <h1 className="text-center login-head">Customer Service</h1>
                    </div>
                    <div className="mt-5 login-border col-sm-12 col-md-12 col-lg-12">
                        <form className="m-5" onSubmit={formik.handleSubmit}>
                            <div className="row">
                                <div className="box">
                                    <span style={{ color: "blue" }}>{formik.errors.email}</span>
                                    <input
                                        type="email"
                                        className="form-control boxs"
                                        name="email"
                                        placeholder="Email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email} />
                                </div>
                                <div className="box">
                                    <span style={{ color: "blue" }}>{formik.errors.password}</span>
                                    <input
                                        type="password"
                                        className="form-control boxs"
                                        name="password"
                                        placeholder="Password"
                                        onChange={formik.handleChange}
                                        value={formik.values.password} />
                                </div>
                                <div className=" box">
                                    <input type="submit" className="form-control btn btn-warning boxs" value={"Login"} />

                                </div>
                                <div className="fw-bold box">
                                    <p className="text-center text-dark">------create account?------</p>
                                    <Link to={'/customerregister'}>
                                        <input type="submit" className="form-control btn btn-secondary fw-bold boxs" value={"SignUp"} />
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default CustomerLogin