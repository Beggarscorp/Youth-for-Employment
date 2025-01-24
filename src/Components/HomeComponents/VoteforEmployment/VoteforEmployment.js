import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const VoteforEmployment = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                <div className="col-sm-4 md-none">
                        <div className='img-background-1'>
                            <Link to="/vote-for-employment" className='text-decoration-none text-light'>
                            <img src="/Assets/images/Attack in Karnataka Jan 2018-edited.jpg" alt="" className='img-thumbnail border-0 p-0' />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className='py-4'>
                        <h4 className='my-3 heading-border w-100 border-success'>Vote for Employment</h4>
                        <p>Two States. Two Campaigns. Result: Hung Assembly.<br/><br/>
                        The campaign for the Employment Policy of India was started from Karnataka in 2017 with an Open Letter to the Hon'ble Prime Minister Mr Narendra Modi and Hon'ble Chief Minister of Karnataka Mr Siddaramaih. <br/>As a constructive movement, it was based on Possibilies instead of Protests, Solutions instead of Slogans. But unfortunately, politics these days does not understand the language of policy making. So what started as Karnataka4Employment ultimately took the shape of Vote4Employment and 'No Job, No Vote' when national convener of the campaign Mr Chandra Mishra was attacked in the hometurf of the Karnataka CM in January 2018.<br/><br/> The chief minister lost the elections in his hometurf and the state witnessed a hung Assembly in 2018. In 2019, Haryana too witnessed hung Assembly when Mishra campaigned in Karnal, the constituency of the state CM.<br/><br/></p>
                        <Link to="/vote-for-employment" className='text-decoration-none text-light'>
                        <motion.button className='border-0 rounded my-2'
                                initial={{ backgroundColor: "#15853e", color: "#fff" }}
                                whileHover={{ x: 10 }}
                            >See more<i className="bi bi-arrow-right" style={{ color: "#fff" }}></i></motion.button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-4 sm-none">
                        <div className='img-background-1'>
                            <Link to="/vote-for-employment" className='text-decoration-none text-light'>
                            <img src="/Assets/images/Attack in Karnataka Jan 2018-edited.jpg" alt="" className='img-thumbnail border-0 p-0' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VoteforEmployment
