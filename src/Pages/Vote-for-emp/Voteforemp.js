import React,{ useState} from 'react'
import '../../Pages/Vote-for-emp/vote-foremp.css'
import ImageLightbox from '../../Components/ImageLightbox/ImageLightbox';

const Voteforemp = () => {

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
      <h2 className='heading-border w-50'>Vote for Employment <br/>
        <span className='font-18'>Two States. Two Campaigns. Result: Hung Assembly</span></h2>
    </div>
    <div className="container">
      <div className="row">
        <p className='font-15'>The campaign for the Employment Policy of India was started from Karnataka in 2017 with an Open Letter to the Hon'ble Prime Minister Mr Narendra Modi and Hon'ble Chief Minister of Karnataka Mr Siddaramaih. As a constructive movement, it is based on Possibilies instead of Protests, Solutions instead of Slogans. But unfortunately, politics these days does not understand the power of policies. So what started as Karnataka4Employment ultimately took the shape of Vote4Employment and 'No Job, No Vote' when national convener of the campaign Mr Chandra Mishra was attacked in the hometurf of the Karnataka CM in January 2018. The chief minister lost the elections in his hometurf and the state witnessed a hung Assembly in 2018. In 2019, Haryana too witnessed hung Assembly when Mishra campaigned in Karnal, the constituency of the state CM.  </p>
        <div className="vote-for-employement-images">
        <h3 className='my-4 text-center'>Karnataka 2017-18: From Shikaripura to Varuna</h3>

        <div className="row">
            <h5 className='my-4'>Open Letter to the PM and the CM</h5>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnataka-Campaign beginning/Open Letter to PM & CM-1 and Open Letter to PM & CM-2.png" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnataka-Campaign beginning/3-Bangalore Press Club.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnataka-Campaign beginning/1-Job search in Karnataka.png" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnataka-Campaign beginning/2-Varuna Job Proposal.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            {/* <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnataka-Campaign beginning/4-Campaign in Karnataka.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnataka-Campaign beginning/2017-05-20-14-30-31.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div> */}
          </div>

          <div className="row">
            <h5 className='my-4'>Prashnagrah on Employment in Varuna, the CM's Constituency</h5>
            <div className="col-sm-3 p-2">
            <img src="/Assets/images/vote-for-employement-images/Karnataka-Varuna Campaign/1-Campaign in Varuna.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
            <img src="/Assets/images/vote-for-employement-images/Karnataka-Varuna Campaign/2-Campaign in Varuna.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
            <img src="/Assets/images/vote-for-employement-images/Karnataka-Varuna Campaign/3-Varuna campaign.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
            <img src="/Assets/images/vote-for-employement-images/Karnataka-Varuna Campaign/4-Varuna Campaign.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
            <img src="/Assets/images/vote-for-employement-images/Karnataka-Varuna Campaign/5-Varuna Campaign.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
            <img src="/Assets/images/vote-for-employement-images/Karnataka-Varuna Campaign/6-Varuna campaign.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
            <img src="/Assets/images/vote-for-employement-images/Karnataka-Varuna Campaign/17-Varuna Campaign-6.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
            <img src="/Assets/images/vote-for-employement-images/Karnataka-Varuna Campaign/7-Varuna campaign.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
            <img src="/Assets/images/vote-for-employement-images/Karnataka-Varuna Campaign/8-Varuna Campaign.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
            <img src="/Assets/images/vote-for-employement-images/Karnataka-Varuna Campaign/10-Varuna Campaign.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
            <img src="/Assets/images/vote-for-employement-images/Karnataka-Varuna Campaign/11-Varuna Campaign.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
            <img src="/Assets/images/vote-for-employement-images/Karnataka-Varuna Campaign/12-Varuna - Lady pasting sticker.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
            <img src="/Assets/images/vote-for-employement-images/Karnataka-Varuna Campaign/13-Varuna Campaign-2.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
            <img src="/Assets/images/vote-for-employement-images/Karnataka-Varuna Campaign/14-Varuna Campaign-3.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
            <img src="/Assets/images/vote-for-employement-images/Karnataka-Varuna Campaign/15-Varuna Campaign-4.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
            <div className="col-sm-3 p-2">
            <img src="/Assets/images/vote-for-employement-images/Karnataka-Varuna Campaign/18-Mysore Press Meet.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg} />
            </div>
          </div>

          <div className="row">
          <h5 className='my-4'>Brutal Attack on the National Convener</h5>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnataka-Attack/1-Attack in Karnataka Jan 2018 and 2-Karnataka attack news.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnataka-Attack/3-Talking to Press in front of Mysuru PS.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnataka-Attack/4-Speaking to press in front of Mysuru PS and 10-Mysuru Attack.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnataka-Attack/5-Mysuru CM Bleeding.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnataka-Attack/6-Petition on Mysuru Attack-2.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnataka-Attack/8-Mysuru attack.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnataka-Attack/9-Mysuru Attack-Bangalore Mirror and 7-FIR on Mysuru Attack.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnataka-Attack/12-Mysuru Attack-TV.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          </div>
         
          <div className="row">
        <h5 className='my-4'>Candidates Released Court Affidavit for Jobs</h5>
            <div className="col-sm-4 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnata-Affidavit for jobs/1-Affidavit for jobs - Karnataka Press Meet.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
            <div className="col-sm-4 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnata-Affidavit for jobs/2-Karnataka Campaign.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
            <div className="col-sm-4 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnata-Affidavit for jobs/3-Affidavit for jobs - Karnataka News.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
            <div className="col-sm-4 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnata-Affidavit for jobs/Affidavit for jobs - Karnataka and Affidavit for jobs - Karnataka2.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
            <div className="col-sm-4 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnata-Affidavit for jobs/3.png" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
            <div className="col-sm-4 p-2">
              <img src="/Assets/images/vote-for-employement-images/Karnata-Affidavit for jobs/2.png" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          </div>

          <h3 className='my-4 text-center'>Haryana 2019: Just 20 Days Campaign, Again Hung Assembly </h3>

          <div className="row">
          <h5 className='my-4'>Job Satyagrah in Rohtak on Gandhi Jayanti</h5>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Haryana-karnal/4.png" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Haryana-karnal/Rohtak/IMG-20191001-WA0020.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Haryana-karnal/Rohtak/IMG-20191002-WA0096.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Haryana-karnal/Rohtak/IMG-20191002-WA0107.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
            <h5 className='my-4'>All Party Candle March in CM's constituency Karnal</h5>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Haryana-karnal/Haryana 3.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Haryana-karnal/IMG_20191012_182902.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Haryana-karnal/IMG_20191012_184451.jpg" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
            <div className="col-sm-3 p-2">
              <img src="/Assets/images/vote-for-employement-images/Haryana-karnal/5-2.png" alt="" className='img-fluid cursor-pointer' onClick={takeImg}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default Voteforemp
