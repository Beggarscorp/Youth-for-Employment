import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

const BackgroundSlider = () => {

  let petitionUrl="https://youth4employment.com/";

  const shareontwitter=()=>{
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(petitionUrl)}&text=Dear Prime Minister, The Youth of India Need Employment Policy 
    राजनीति नहीं रोजगार नीति`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  }

  const shareonfacebook=()=>{
    let message="Dear Prime Minister, The Youth of India Need Employment Policy राजनीति नहीं रोजगार नीति"; 
    const facebookUrl = `https://www.facebook.com/dialog/share?href=${encodeURIComponent(petitionUrl)}&quote=${encodeURIComponent(message)}&display=popup`;
    window.open(facebookUrl, '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <div className="main position-relative" >
        <img src="Assets/images/EMPLOYMENT.jpg" alt="" className='img-fluid w-100' />
        <div className="text-center md-position-absolute" style={{top:"88%",right:"10%"}}>
          <motion.button className='bg-green border-0 text-light px-3 py-1 h6 rounded'
          whileHover={{scale:1.1}}
          >
            <Link className='text-decoration-none text-light' to="https://docs.google.com/forms/d/e/1FAIpQLSenQrTzcyBOuMKtI1ZmnIZ9irOzETJq8g1zaVv3NRoBKU4SiQ/viewform?pli=1" target='_blank'>Sign the Memorandum</Link></motion.button>
            <motion.button 
            onClick={shareontwitter}
            className='border-0 px-3 py-1 h6 rounded'
            whileHover={{scale:1.1}}
            style={{color:"#1DA1F2",background:"transparent"}}
            ><span><i className="bi bi-twitter" style={{color:"#1DA1F2"}}></i></span> Share on twitter</motion.button>

            <motion.button 
            onClick={shareonfacebook}
            className='border-0 px-3 py-1 h6 rounded'
            style={{color:"#316FF6",background:"transparent"}}
            whileHover={{scale:1.1}}
            ><span><i className="bi bi-facebook" style={{color:"#316FF6"}}></i></span> Share on facebook</motion.button>

        </div>
      </div>
    </>
  )
}

export default BackgroundSlider
