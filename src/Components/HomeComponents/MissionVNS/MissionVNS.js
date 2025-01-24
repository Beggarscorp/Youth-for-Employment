import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const MissionVNS = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                <div className="col-sm-4 md-none">
                        <div className="img-background-1">
                            <Link to="/mission-vns" className='text-decoration-none text-light'>
                                <img src="/Assets/images/Mission Vns/mission-vns-banner-edited.png" alt="campaign-mail-image" className='img-thumbnail border-0 ' />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="py-4">
                            <h4 className='my-3 heading-border border-success'>Mission Unemployment-free Varanasi</h4>
                            <p className='font-15'>After 1 year of writing to the DM, we launched Mission Unemployment-free Varanasi on June 07, 2021, with the support of the local citizens and organisations. We supported local youth to lunch their new ventures or grow their existing business in the sectors like Street Food, Handloom, Youth Employment, Street Children, Farmers and even Beggars.<br/><br/>
                                Long 3 years have gone by since then, we have not received any support from the district administration, state or central government so far. It proves how serious the government is  regarding employment of the youth.</p><br/><br/>
                            <Link to="/mission-vns" className='text-decoration-none text-light'>
                                <motion.button className='border-0 rounded my-2'
                                    initial={{ backgroundColor: "#15853e", color: "#fff" }}
                                    whileHover={{ x: 10 }}
                                >See more<i className="bi bi-arrow-right" style={{ color: "#fff" }}></i></motion.button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-4 sm-none">
                        <div className="img-background-1">
                            <Link to="/mission-vns" className='text-decoration-none text-light'>
                                <img src="/Assets/images/Mission Vns/mission-vns-banner-edited.png" alt="campaign-mail-image" className='img-thumbnail border-0 ' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MissionVNS
