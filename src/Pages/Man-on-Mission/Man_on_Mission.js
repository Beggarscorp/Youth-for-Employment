import React, { useState } from 'react'
import ImageLightbox from '../../Components/ImageLightbox/ImageLightbox';

const Man_on_Mission = () => {

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
    <div className="container-fluid">
    <div className="banner py-5 text-center">
          <h2 className='heading-border w-25 w-sm-100'>Man on a Mission</h2>
        </div>
    </div>
    <div className="container">
      <div className="row">
        {/* <p className='font-18'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At incidunt ullam commodi unde doloribus in, eaque fugit consequatur, aliquam, excepturi esse? Eligendi sapiente dolorum unde dicta natus consequuntur voluptatem nulla atque asperiores mollitia, aliquid adipisci quidem, maxime soluta ipsam quia modi architecto esse corporis, illo deleniti exercitationem totam odio! Cupiditate.</p> */}
      </div>
      <div className="man-on-mission-images my-2">
        <div className="row">
        <h5 className='my-4'>Architect Of India's First Employment Mission Formed by Govt of Odisha (2005)</h5>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Shok Sabha in front of Odisha Assembly.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Odisha Gov-3.png" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Odisha Gov-1.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        <div className="col-sm-3 p-2">
          <img src="/Assets/images/vote-for-employement-images/Man on a Mission/otm.png" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
        </div>
        </div>

        <div className="row">
        <h5 className='my-4'>Policy Above Politics: Brainstorming Sessions With Policy-Makers Cutting Across Partylines </h5>
          <div className="col-sm-3">
            <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Bihar CM-1.jpg" alt="" className='img-fluid cursor-pointer p-2' onClick={takeImg}/>
          </div>
          <div className="col-sm-3">
            <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Odisha/mail form rahul.png" alt="" className='img-fluid cursor-pointer p-2' onClick={takeImg}/>
          </div>
          <div className="col-sm-3">
            <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Odisha/mail from modi.png" alt="" className='img-fluid cursor-pointer p-2' onClick={takeImg}/>
          </div>
          <div className="col-sm-3">
            <img src="/Assets/images/vote-for-employement-images/Man on a Mission/BJP National Org Secy-Delhi.jpg" alt="" className='img-fluid cursor-pointer p-2' onClick={takeImg}/>
          </div>
        </div>

        <div className="row">
        <h5 className='my-4'>I4India - Career Building Through Nation Building(Delhi-2019)</h5>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Delhi-1.JPG" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Delhi/IMG-20190311-WA0006.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Odisha/IMG_6478.JPG" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Odisha/BJP-7.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          </div>

          <div className="row">
          <h5 className='my-4'>Memorandum to Election Commission: Take Action If Parties & Candidates Don't Fulfill Poll Promises  (2019)</h5>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Delhi/IMG-20190404-WA0000 (1) edited.png" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Delhi-Memorandum to Election Commission.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Delhi/IMG-20190404-WA0130.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Delhi/IMG-20190403-WA0142 (2).png" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          </div>

          <div className="row">
          <h5 className='my-4'>Vote4Employment: Invest Your Vote In Securing Your Future (2015-19)</h5>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Bihar-2-edit.png" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Man on a Mission/image.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Chhattisgarh-1.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Chhattisgarh-2.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          </div>

          <div className="row">
          <h5 className='my-4'>Luck-Know Startup School: Applying Knowledge Economy To Organise The Unorganised Sector(2021-)</h5>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/Lucknow/MoU signing.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-4 p-2">
              <img src="/Assets/images/Lucknow/Full stage with CM2.png" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/Lucknow/MoU news HT edited.png" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          </div>

          <div className="row">
          <h5 className='my-4'>Mission Varanasi: Laboratory To Establish A Model Of Humance Resource Based Economy(2021-)</h5>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Man on a Mission/JanMitra Samman in Varanasi-2021.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Man on a Mission/JanMitra Honour.jpeg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/Mission Vns/tise-news.png" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/Mission Vns/Receiving Best Social Impact Award at Nagpur on 2nd April, 2013.JPG" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          </div>

          <div className="row">
          <h5 className='my-4'>From Universities To The Investors And Corporate World: An Idea That Inspired India (2023-24) </h5>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/Power-of-idea/TEDx B Group.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/Power-of-idea/Jaipuria.jpeg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/Power-of-idea/IMG-20230911-WA0021.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/Power-of-idea/1708661280445.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/Power-of-idea/1709723984245.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/Power-of-idea/1715573590784.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/Power-of-idea/1712976320739.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/Power-of-idea/Screenshot_20240728-120356_Instagram.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          </div>

          <div className="row">
          <h5 className='my-4'>Pioneering Citizen Journalism: Where Ordinary Citizens Become Editors of The Day(1995)</h5>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Odisha/janasatta.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Odisha/Aromv (2).png" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Odisha/Screenshot_20240728-124133_Facebook.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Man on a Mission/Odisha/FB_IMG_1548522546804 edited.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          </div>

      </div>
    </div>
    </>
  )
}

export default Man_on_Mission
