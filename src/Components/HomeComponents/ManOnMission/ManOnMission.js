import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ManOnMission = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="img-background-1">
                            <Link to="/man-on-mission" className='text-decoration-none text-light'>
                                <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Odisha Govt-1(3)-edited.jpg" alt="" className='img-thumbnail border-0 p-0' />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="py-4">
                            <h4 className='my-3 heading-border border-success'>Man on a Mission</h4>
                            <p>Mr Chandra Mishra, the man behind this campaign for the Employment Policy, is the architect of India's first Employment Mission established by the Government of Odisha in 2005. In 2017, he left home to work on this mission with undivided attention.<br/><br/>
                                Earlier in 2010, during UPA-2 Government, he was invited by Shri Rahul Gandhi to 10 Janpath for discussion on this issue. In 2012, the Gujarat government under Shri Narendra Modi too invited Mr Mishra where he studied their best models and submitted a report. <br/><br/>He has worked in different states - from Karnataka in South (2017-18) to Chhattisgarh (2018), Haryana (2019), Delhi (2018-20) and now Uttar Pradesh (2021-).<br/><br/></p>
                            <Link to="/man-on-mission" className='text-decoration-none text-light'>
                                <motion.button className='border-0 rounded my-2'
                                    initial={{ backgroundColor: "#15853e", color: "#fff" }}
                                    whileHover={{ x: 10 }}
                                >See more<i className="bi bi-arrow-right" style={{ color: "#fff" }}></i></motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManOnMission
