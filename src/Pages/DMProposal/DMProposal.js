import React, { useState } from 'react'
import ImageLightbox from '../../Components/ImageLightbox/ImageLightbox'
import { Link } from 'react-router-dom';

const DMProposal = () => {

  const [imgPath,setimgPath]=useState(null);
  const [ii,setii]=useState(null);
  const takeImg=(e)=>{
    let imgAddress=e.target.getAttribute("src");
    setimgPath(imgAddress);
    setii(window.scrollY);
  }

  return (
    <>
     <ImageLightbox imgAddress={imgPath} ii={ii}/>
      <div className="container-fluid px-0">
        <div className="banner py-5 text-center">
          <h2 className='heading-border w-50'>Proposal to create 1 lakh jobs in Varanasi</h2>
        </div>
      </div>
      <div className="container">
        <div className="row py-3">
          <p className='font-15 py-2'>We didn't ask the District Magistrate to do what we say. Rather, we asked him to implement if he had any better idea. We requested him for an opportunity to give presentation on our proposal and face the questions of his officers and experts. We even offered to sign written undertaking to face punishment if our proposal fails to deliver results. Unfortunately, we did not get any response from the government in last 4 years. In the meantime, we came to Varanasi and launched <Link to="/mission-vns" target='_blank' className="text-decoration-none text-light"><span className="color-green">Mission Unemployment-free Varanasi</span></Link> in June 2021. It speaks enough who is serious to find a solution to the unemployment problem of India.</p>
            <div className="col-sm-6 p-3">
                <img src="/Assets/images/Mission Vns/Letter to DM, Varanasi -1.jpg" alt="" className='img-fluid cursor-pointer border border-success border-3' onClick={takeImg}/>
            </div>
            <div className="col-sm-6 p-3">
                <img src="/Assets/images/Mission Vns/Letter to DM, Varanasi -2.jpg" alt="" className='img-fluid cursor-pointer border border-success border-3' onClick={takeImg}/>
            </div>
            <div className="col-sm-6 p-3">
                <img src="/Assets/images/vote-for-employement-images/Letter to DM/twitter-post-img.jpg" alt="" className='img-fluid cursor-pointer border border-success border-3' onClick={takeImg}/>
            </div>
            
            <div className="col-sm-6 p-3">
                <img src="/Assets/images/vote-for-employement-images/Letter to DM/Varanasi Proposal Summary.jpg" alt="" className='img-fluid cursor-pointer border border-success border-3' onClick={takeImg}/>
            </div>
            <div className="col-sm-6 p-3">
                <img src="/Assets/images/vote-for-employement-images/Letter to DM/Decoding Youth Votes of Varanasi-2.png" alt="" className='img-fluid cursor-pointer border border-success border-3' onClick={takeImg}/>
            </div>
            <div className="col-sm-6  border border-success border-3">
              <h4 className='py-2'>The DM ignored our letter<br/>The PM lost 1.3 lakh youth votes</h4>
              <p className='p-3'>Along with the proposal to the District Magistrate of Varanasi in June 2020, we had attached our Unmployment Survey Report where 52.24% youth had complained about jobloss. After long 4 years, 52% youth (1.3 lakh) of Varanasi voted against the Prime Minister Shri Narendra Modi. It proves how callousness of the government harms itself ultimately. </p>
                <img src="/Assets/images/vote-for-employement-images/Letter to DM/Unemployment Survey in Varanasi 2020 after lockdown.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default DMProposal
