import React from 'react'
import './imageslider.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {

  const images = [
    '/Assets/images/tedx-sir-images/sir-img-1.jpg',
    '/Assets/images/tedx-sir-images/sir-img-6.jpg',
    '/Assets/images/tedx-sir-images/sir-img-4.jpg',
    '/Assets/images/tedx-sir-images/sir-img-2.jpg',
    '/Assets/images/tedx-sir-images/sir-img-5.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container">
      <div className="row">
        <h4 className='my-3 text-center'>Dear policy-makers, don't treat educated youth like beggars</h4>
        <p className='text-center pb-2'><a href="https://x.com/employonomics/status/1848186013526397216?t=HEwLkZkosUfoY-Bj1g4dkQ&s=19" target="_blank" rel="noreferrer" >Chandra Mishra at TEDx</a>, October 29, 2024, DY Patil College of Engineering and Technology, Kolhapur, Maharashtra.</p>
      <div className="slider-container">
      <Slider {...settings}>
        {
          images.map((image,index)=>{
            return <div key={index} className='image_div'>
              <img src={image} alt={image} className='slide_image' />
            </div>
          })
        }
      </Slider>
    </div>
      </div>
    </div>
  )
}

export default ImageSlider
