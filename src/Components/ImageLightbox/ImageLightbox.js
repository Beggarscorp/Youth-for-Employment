import React, { useEffect, useRef, useState }  from 'react'
import '../../Components/ImageLightbox/ImageLightbox.css'

const ImageLightbox = (props) => {
    const [showhide,setshowhide]=useState({
        display:"none"
    })
    
    const tt=()=>{
        setshowhide(()=>{
            return {
                display:"none"
            }
        })
    }

    useEffect(()=>{
        tt();
    },[])
    const lightboxMain=useRef(null);
    let body=document.body;
    if(props.imgAddress !== "" && props.imgAddress !== null)
    {
        lightboxMain.current.style.display="block";
        body.style.overflow="hidden";
    }
    
    const removeLightbox=()=>{
        lightboxMain.current.style.display="none";
        body.style.overflow="visible";
    }
  return (
    <>
      <div className="container-fluid p-0 position-absolute vh-100" ref={lightboxMain} style={{backgroundColor:"rgba(0,0,0,0.8)",display:`${showhide.display}`,top:`${props.ii}px`}}>
        <div className="image-card h-100 d-flex justify-content-center align-item-center">
            <div className="img position-relative">
            <div className="cross-icon position-absolute cursor-pointer" onClick={removeLightbox} style={{right:"0",fontSize:"33px",padding:"0 7px",backgroundColor:"rgba(21, 133, 78, 0.745)"}}>
                <i className="bi bi-x" style={{color:"#fff"}}></i>
            </div>
            <img src={props.imgAddress} alt="" className='img-fluid'/>
            </div>
        </div>
      </div>
    </>
  )
}

export default ImageLightbox
