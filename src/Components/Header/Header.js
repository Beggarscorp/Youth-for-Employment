import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../Header/Header.css'


const borderMotion = {
  rest: {
    x: -140,
    border: "1px solid #ff924e",
    opacity: 0
  },
  hover: {
    x: 0,
    opacity: 1
  }
}
const borderMotionParent = {
  rest: {
    // border:"1px solid #ff924e",
    // opacity:0
  },
  hover: {
    // opacity:1
  }
}

const Menuicon = () => {
  let firstIcon = document.getElementsByClassName("menu-icon");
  let secondIcon = document.getElementsByClassName("menu-icon-2");
  let menu = document.getElementsByClassName("menu-item");
  let menuItem = document.querySelectorAll(".menu-item ul li");
  firstIcon[0].classList.toggle("menuIconHide");
  secondIcon[0].classList.toggle("menuIconHide");
  menu[0].classList.toggle("showMenuItem");
  menuItem.forEach((e) => {
    e.classList.toggle("showMenuliItem");
  });
}

const Header = () => {
  return (
    <>
    <div className='container-fluid px-0 py-3'>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-4">
            <div className="d-flex justify-content-between" style={{margin:"-12px 0"}}>
              <motion.div
                whileHover={{ rotate: "-3deg", scale: 1.1 }}
              ><Link to="/"><img src="/favicon.png" alt="logo" className='my-3' style={{ height: "70px" }} /></Link></motion.div>
            </div>
          </div>
          <div className="col-sm-2 d-none d-sm-none d-md-block"></div>
          <div className="col-sm-6 d-none d-sm-none d-md-block my-auto">
            <div className="row">
              <div className="email d-flex justify-content-around py-2">
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <motion.h6 variants={borderMotionParent} initial="rest" whileHover="hover" ><Link to="/BeAVolunteer" className='text-decoration-none color'>Be a volunteer</Link>
                  <motion.div variants={borderMotion} ></motion.div>
                </motion.h6>
                <motion.h6 variants={borderMotionParent} initial="rest" whileHover="hover" ><Link to="mailto:youth4employmentpolicy@gmail.com" className='text-decoration-none color'>Write to us</Link>
                  <motion.div variants={borderMotion} ></motion.div>
                </motion.h6>
                <div className="d-flex">
                  <motion.div className="px-2"
                    whileHover={{ scale: 1.5 }}
                  ><Link to="https://x.com/i/flow/login?redirect_after_login=%2Fmissionvns" target='_blank'><i className="bi bi-twitter"></i></Link></motion.div>
                  <motion.div className="px-2"
                    whileHover={{ scale: 1.5 }}
                  ><Link to="https://www.facebook.com/missionvns" target='_blank'><i className="bi bi-facebook"></i></Link></motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 d-block d-sm-block d-md-none my-auto position-relative">
            <motion.div className="menu-icon text-end pe-4 h4"
              onClick={Menuicon}
              whileHover={{ scale: 1.1 }}
            ><i className="bi bi-list"></i></motion.div>
            <motion.div className="menu-icon-2 text-end pe-4 menuIconHide h4"
              onClick={Menuicon}
              whileHover={{ scale: 1.1 }}
            ><i className="bi bi-x-lg "></i></motion.div>

            <div className="menu-item position-absolute p-2" style={{ width: "96%", zIndex: "999", background: "#15854e" }}>
              <ul className='list-unstyled text-light'>
                <li><Link to="/BeAVolunteer" className='text-decoration-none color'>Be a volunteer</Link></li>
                <li><a href="mailto:youth4employmentpolicy@gmail.com" className='text-decoration-none color'>Write to us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
