import React, { useState } from 'react'
import ImageLightbox from '../../Components/ImageLightbox/ImageLightbox';

const MissionVns = () => {

 
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
          <h2 className='heading-border w-75'>MUVment: Mission Unemployment-free Varanasi</h2>
        </div>
      </div>
      <div className="container">
        <div className="row">
        <h5 className='my-4'>Rashtrarpan of the Mission (June 07, 2021) by former VC of AKTU Dr Kripa Shankar and Dr Heeralal, IAS </h5>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/Inauguration-1-edited.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
       
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/Inauguration-edited.jpg" alt=""  className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/Inauguration-5-edited.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/Inauguration News-2-edited.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        
        </div>

        <div className="row">
        <h5 className='my-4'>Million Hands: Working with the Handloom Weavers</h5>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/Million Hands-1-edited.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/Million Hands-2.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/Million Hands-4-edited.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/Million Hands-3.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/Million Hands-5.JPG" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/Million Hands-6.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/Million Hands-7.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/Million Hands-8.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        </div>

        <div className="row">
        <h5 className='my-4'>Dev Foods: Working with Street Food Vendors to Redefine Pakodanomics</h5>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/DEV Foods-1.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/DEV Foods-3.png" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/DEV Foods-4-edited.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/DEV Foods-2-edited.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/Dev Foods-5-edited.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/Dev Foods-6.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/DEV Foods-7.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/DEV Foods-8.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        </div>

        <div className="row">
        <h5 className='my-4'>Youth of Varanasi: Career Building through Nation Building</h5>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/Youth of Varanasi-3.png" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/Call to youth-Hindi.png" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/Youth of Varanasi-4.png" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/Youth of Varanasi-2-edited.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        </div>

        <div className="row">
        <h5 className='my-4'>School of Life: A School for the Child Beggars</h5>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/School of Life-5.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/School of Life-7.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/School of Life-6.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/School of Life-8-edited.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/School of Life-1-edited.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/School of Life-3-edited.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/School of Life-2.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/Mission Vns/School of Life-4.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        </div>
      </div>
   </>
  )
}

export default MissionVns
