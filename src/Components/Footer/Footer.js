import React from 'react'
import '../../Components/Footer/Footer.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <>
      <div className="container-fluid px-0 py-3" style={{ background: "linear-gradient(157deg,#ff924e,#fff 50%,#15854e)" }}>
        <div className="container py-4">
          <div className="row">
            <div className="col-sm-4 my-3 sm-center">
              <Link to="/"><img src="/favicon.png" alt="footer-logo" className='my-2' style={{height:"50px"}}/></Link>
              <div className="my-md-3">
              {/* <h6>Our Social Media Links</h6> */}
              <div className='d-flex py-2 justify-center'>
                <motion.div
                  whileHover={{ scale: 1.3 }}
                ><Link to="https://x.com/i/flow/login?redirect_after_login=%2Fmissionvns" target='_blank'><i className="bi bi-twitter"></i></Link></motion.div>
                <motion.div className="px-3"
                  whileHover={{ scale: 1.3 }}
                ><Link to="https://www.facebook.com/missionvns" target='_blank'><i className="bi bi-facebook"></i></Link></motion.div>
                <motion.div className="px-2"
                  whileHover={{ scale: 1.3 }}
                ><Link to="mailto:youth4employmentpolicy@gmail.com" target='_blank'><i className="bi bi-envelope-fill"></i></Link></motion.div>
                {/* <motion.div className="px-3"
                  whileHover={{ scale: 1.3 }}
                ><Link to="https://www.facebook.com/missionvns" target='_blank'><i className="bi bi-instagram"></i></Link></motion.div> */}
              </div> 
              </div>
            </div>
            <div className="col-sm-4 my-5 px-md-5 sm-center">
              <h5>Important links</h5>
              <Link to="/BeAVolunteer" target='_blank' className='text-decoration-none text-dark'><div>Be a volunteer</div></Link>
              <Link to="/vote-for-employment" className='text-decoration-none text-dark'><div>Vote-for-Employment</div></Link>
              <Link to="/man-on-mission" className='text-decoration-none text-dark'><div>Man on a Mission</div></Link>
            </div>
            <div className="col-sm-4 my-5 ps-md-5 sm-center">
              <h5>Contact us</h5>
              {/* <div className='py-1'><i className="bi bi-telephone"></i><span className="px-2" style={{ fontSize: "15px" }}>+91 xyz</span></div> */}
              <div className='py-1 d-flex'><i className="bi bi-envelope"></i><span className="px-2" style={{ fontSize: "15px" }}>
                <Link className='text-decoration-none text-dark' to="mailto:youth4employmentpolicy@gmail.com">youth4employmentpolicy@gmail.com</Link>
                </span></div>
              <Link to="https://maps.app.goo.gl/53XbAPnF175TE66k8" target='_blank' className='text-decoration-none text-dark'><div className='py-1 d-flex justify-center'><i className="bi bi-geo-alt"></i><div className="px-2" style={{ fontSize: "15px" }}>Mission Unemployment-Free Varanasi</div></div></Link>
              
            </div>
          </div>

        </div>
          <div className="row mx-1" style={{borderTop:"1px solid #22364e"}}>
            <div className='py-2 text-center'><i className="bi bi-c-circle"></i><span className="px-2" style={{ fontSize: "15px" }}>2024, Youth4Employment</span></div>

          </div>
      </div>
    </>
  )
}

export default Footer
