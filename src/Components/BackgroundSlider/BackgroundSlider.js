import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const BackgroundSlider = () => {
  return (
    <>
      <div className="main position-relative" >
        <img src="assets/images/EMPLOYMENT.jpg" alt="" className='img-fluid w-100' />
        <div className="text-center position-absolute translate-middle" style={{top:"88%",right:"10%"}}>
          <motion.button className='bg-green border-0 text-light px-4 py-2 h6 rounded'
          whileHover={{scale:1.1}}
          >
            <Link className='text-decoration-none text-light' to="https://docs.google.com/forms/d/e/1FAIpQLSenQrTzcyBOuMKtI1ZmnIZ9irOzETJq8g1zaVv3NRoBKU4SiQ/viewform?pli=1" target='_blank'>Sign the Memorandom</Link></motion.button>
        </div>
      </div>
    </>
  )
}

export default BackgroundSlider
