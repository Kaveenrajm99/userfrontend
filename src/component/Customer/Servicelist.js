// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const Servicelist = () => {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);


    const fetchData = async () => {
        const { data } = await axios.get('https://userdetailsforguvi.herokuapp.com/userdetail', {
            headers: {
                Authorization: window.localStorage.getItem("loginsecretkey")
            }
        })
        setPosts(data);

    };


    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (!window.localStorage.getItem("loginsecretkey")) {
            navigate('/customerlogin')
        }
    }, [])

    const handleLogout = () => {
        window.localStorage.removeItem('loginsecretkey')
        navigate('/customerlogin')
    }

    return (
        <div >
            <h1 className='text-center fw-bold mb-2'>User Details </h1>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link to={"/form"} class="btn btn-secondary m-2" type="button">Add Detail</Link>
                <button class="btn btn-secondary m-2" type="button" onClick={handleLogout} >Logout</button>
            </div>
            {posts.map((post) => {
                return (
                    <div className='control-pane m-2 '>
                        <div className='control-section card-control-section vertical_card_layout'>
                            <div className="e-card-resize-container">
                                <div className='row'>
                                    <div className="row card-layout">
                                        <div className="col">
                                            <div className="e-card" id="vertical_business">
                                                <div className="e-card-header">
                                                    <div className="e-card-header-caption">
                                                        <p className="e-card-header-title fw-bold fs-2 m-2">{post.user_name}</p>
                                                    </div>
                                                </div>
                                                <div className="e-card-actions">
                                                    <p className="e-card-btn">
                                                        <div className="e-email e-card-btn-txt mt-1 fw-bold">
                                                           Email :  {post.user_email}
                                                            <br />
                                                            Mobile : {post.user_tel}</div>
                                                    </p>
                                                    <p className="e-card-btn">
                                                        <div className="e-email e-card-btn-txt fw-bold">DateOfBirth : {post.user_date}
                                                        </div>
                                                    </p>
                                                    <p className="e-card-btn fw-bold">Address :
                                                        <div className="e-email e-card-btn-txt fw-bold">
                                                            {post.user_address}
                                                            <br />{post.user_city},{post.user_state}<br />
                                                            Message : {post.user_message}
                                                        </div>
                                                    </p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                )
            })}
        </div>

    );
};

export default Servicelist