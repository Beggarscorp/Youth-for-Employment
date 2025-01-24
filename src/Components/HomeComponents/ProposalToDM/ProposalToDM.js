import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ProposalToDM = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                <div className="col-sm-4">
                        <div className="img-background-1">
                            <Link to="/DMProposal" className='text-decoration-none text-light'>
                                <img src="/Assets/images/vote-for-employement-images/Letter to DM/Unemployment Survey in Varanasi 2020 after lockdown.jpg" alt="" className='img-fluid' />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="py-4">
                            <h4 className='my-3 heading-border border-success'>Written proposal to the DM, Varanasi</h4>
                            <p className='font-15'>On June 22, 2020, we sent a written proposal to the District Magistrate of Varanasi for creation of 80,000-1,00,000 secure jobs in the constituency of the Prime Minister. The DM remained silent.<br/><br/>
                                After 4 years, the PM lost votes of 52% youth (1.3 lakh) in the General Elections 2024. Needless to say, we, in our June 2020 proposal, had attached our Employment Survey Report in Varanasi where 52.24% youth complained about loss of jobs.<br/><br/></p>
                            <Link to="/DMProposal" className='text-decoration-none text-light'>
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

export default ProposalToDM
