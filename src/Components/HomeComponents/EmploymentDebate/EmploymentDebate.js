import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const EmploymentDebate = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                <div className="col-sm-4">
                        <div className="img-background-1">
                            <Link to="/EmploymentDebate" className='text-decoration-none text-light'>
                                <img src="/Assets/images/Employment Debate/Untitled design (1).png" alt="" className='img-fluid' />
                            </Link>
                        </div>
                    </div>
                <div className="col-sm-8">
                        <div className="py-4">
                            <h4 className='my-3 heading-border border-success'>Employment Debate: July-Aug 2020</h4>
                            <p>Since we didn't get any response from the DM, Varanasi, on our proposal, we started the Employment Debate on Twitter for 40 days in July-August 2020. Besides analysing the government schemes and, pointing out where it failed and why, we presented alternate ideas for its solution.<br/><br/>
                                Though our Twitter handle had only around 227 followers then, this debate received wide attention - total 70,400 impressions and average 1700 impressions per post. Many economists, retired bureaucrats, social influencers and leaders from different political parties contacted us through social media. But, neither the DM, nor any proper authority from the government bothered to take action on such a serious issue.<br/><br/></p>
                            <Link to="/EmploymentDebate" className='text-decoration-none text-light'>
                                <motion.button className='border-0 rounded my-2'
                                    initial={{ backgroundColor: "#15853e", color: "#fff" }}
                                    whileHover={{ x: 10 }}
                                >See more about Employment Debate</motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmploymentDebate
