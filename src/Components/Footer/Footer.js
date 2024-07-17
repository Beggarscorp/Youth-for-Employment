import React from 'react'
import '../../Components/Footer/Footer.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <>
      <div className="container-fluid px-0 py-3" style={{ backgroundColor: "#15854ebe" }}>
        <div className="container py-4">
          <div className="row">
            <div className="col-sm-4 my-3">
              <img src="/favicon.png" alt="footer-logo" className='my-2' style={{height:"80px"}}/>
              <div className="my-md-3">
              <h6>Our Social Media Links</h6>
              <div className='d-flex py-2'>
                <motion.div
                  whileHover={{ scale: 1.3 }}
                ><Link to="https://x.com/i/flow/login?redirect_after_login=%2Fmissionvns" target='_blank'><i className="bi bi-twitter"></i></Link></motion.div>
                <motion.div className="px-3"
                  whileHover={{ scale: 1.3 }}
                ><Link to="https://www.facebook.com/missionvns" target='_blank'><i className="bi bi-facebook"></i></Link></motion.div>
                <motion.div className="px-3"
                  whileHover={{ scale: 1.3 }}
                ><Link to="https://www.facebook.com/missionvns" target='_blank'><i className="bi bi-envelope-fill"></i></Link></motion.div>
                <motion.div className="px-3"
                  whileHover={{ scale: 1.3 }}
                ><Link to="https://www.facebook.com/missionvns" target='_blank'><i className="bi bi-instagram"></i></Link></motion.div>
              </div> 
              </div>
            </div>
            <div className="col-sm-4 my-5 px-md-5">
              <h5>Important links</h5>
              <Link to="" className='text-decoration-none text-dark'><div>Be a volunteer</div></Link>
              <Link to="/about-us" className='text-decoration-none text-dark'><div>About us</div></Link>
              <Link to="/media" className='text-decoration-none text-dark'><div>Media</div></Link>
            </div>
            <div className="col-sm-4 my-5 ps-md-5">
              <h5>Contact us</h5>
              <div className='py-1'><i className="bi bi-telephone"></i><span className="px-2" style={{ fontSize: "15px" }}>+91 123456789</span></div>
              <div className='py-1'><i className="bi bi-envelope"></i><span className="px-2" style={{ fontSize: "15px" }}>xyz</span></div>
              <div className='py-1 d-flex'><i className="bi bi-geo-alt"></i><div className="px-2" style={{ fontSize: "15px" }}>xyz</div></div>
              
            </div>
          </div>

        </div>
          <div className="row mx-1" style={{borderTop:"1px solid #22364e"}}>
            <div className='py-2 text-center'><i className="bi bi-c-circle"></i><span className="px-2" style={{ fontSize: "15px" }}>2024, Rojgar Niti</span></div>

          </div>
      </div>
    </>
  )
}

export default Footer
