import React from 'react'
import { Link } from 'react-router-dom'


const FirstBanner = () => {
  return (
    <>
      <div className="container-fluid">
        <h4 className='mt-4 text-center'>41 MLAs to Create 40,00,000 Jobs in UP 2027-32</h4>
        <Link to="mailto:youth4employmentpolicy@gmail.com" target='_blank'>
        <div className="row p-3">
                <div className="col-sm-3">
                    <img src="/Assets/images/first-banner-images/first-banner-1.png" alt="first-banenr-image-1"  className='img-thumbnail shadow border-0'/>
                </div>
                <div className="col-sm-3">
                    <img src="/Assets/images/first-banner-images/first-banner-2.png" alt="first-banenr-image-2"  className='img-thumbnail shadow border-0'/>
                </div>
                <div className="col-sm-3">
                    <img src="/Assets/images/first-banner-images/first-banner-3.png" alt="first-banenr-image-3"  className='img-thumbnail shadow border-0'/>
                </div>
                <div className="col-sm-3">
                    <img src="/Assets/images/first-banner-images/first-banner-4.png" alt="first-banenr-image-4"  className='img-thumbnail shadow border-0'/>
                </div>
        </div>
        </Link>

      </div>
    </>
  )
}

export default FirstBanner
