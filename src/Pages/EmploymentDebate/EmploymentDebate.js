import React, { useState } from 'react'
import { Tweet } from 'react-twitter-widgets'
import ImageLightbox from '../../Components/ImageLightbox/ImageLightbox';

const EmploymentDebate = () => {

    const [imgPath, setimgPath] = useState(null);
    const [ii, setii] = useState(null);
    const takeImg = (e) => {
        let imgAddress = e.target.getAttribute("src");
        setimgPath(imgAddress);
        setii(window.scrollY);
    }

    return (
        <>
        <ImageLightbox imgAddress={imgPath} ii={ii}/>
            <div className="container-fluid px-0">
                <div className="banner py-5 text-center">
                    <h2 className='heading-border w-50 w-sm-100'>Employment Debate: July-Aug 2020</h2>
                </div>
            </div>
            <div className="container">

                <div className="row">
                    <div className="col-sm-3 p-2" >
                        <img src="/Assets/images/Employment Debate/Employment Debate cover.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-1.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-2 edited.png" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-4.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-5.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-5b edited.png" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-6.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-7.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-8.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-9.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-10.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-11.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-12.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-12-B.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-12-C.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-13.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-14.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-14-B.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-15.png" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-16.png" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-17.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-19.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate 19B edited.png" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-20.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-21.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-22.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-23.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-24.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-25.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-26.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-27.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-28.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-29.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-30.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-32.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-33.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-34.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-35.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-36.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-37.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-38.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-38-B edited.png" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-39.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>
                    <div className="col-sm-3 p-2">
                        <img src="/Assets/images/Employment Debate/Employment Debate-40.jpeg" alt="" className='img-fluid cursor-pointer' style={{ border: "1px solid #627a6f" }} onClick={takeImg} />
                    </div>

                </div>

                <div className="row my-3">
                    <div className="col-sm-4 p-2">
                        <div className='box-shadow p-3'>
                            <h5 className='py-1'>Community Corporate</h5>
                            <div className="tweet-1" style={{ height: "318px", overflowY: "scroll" }}>
                                <Tweet tweetId='1284542784934830081' />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-2">
                        <div className="box-shadow p-3">
                            <h5 className='py-1'>Mera Bharat, Mera Bhavishya</h5>
                            <div className="tweet-1" style={{ height: "318px", overflowY: "scroll" }}>
                                <Tweet tweetId='1287399610613248000' />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-2">
                        <div className="box-shadow p-3">
                            <h5 className='py-1'>School of life</h5>
                            <div className="tweet-1" style={{ height: "318px", overflowY: "scroll" }}>
                                <Tweet tweetId='1285582681539899394' />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-2">
                        <div className="box-shadow p-3">
                            <h5 className='py-1'>PMKVY</h5>
                            <div className="tweet-1" style={{ height: "318px", overflowY: "scroll" }}>
                                <Tweet tweetId='1283392115133710336' />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-2">
                        <div className="box-shadow p-3">
                            <h5 className='py-1'>MUDRA</h5>
                            <div className="tweet-1" style={{ height: "318px", overflowY: "scroll" }}>
                                <Tweet tweetId='1284121807100841984' />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-2">
                        <div className="box-shadow p-3">
                            <h5 className='py-1'>Human Resource Bank</h5>
                            <div className="tweet-1" style={{ height: "318px", overflowY: "scroll" }}>
                                <Tweet tweetId='1296454399225729024' />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-2">
                        <div className="box-shadow p-3">
                            <h5 className='py-1'>Employment at College Gate</h5>
                            <div className="tweet-1" style={{ height: "318px", overflowY: "scroll" }}>
                                <Tweet tweetId='1296816749199802368' />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-2">
                        <div className="box-shadow p-3">
                            <h5 className='py-1'>Will Power of the Govt</h5>
                            <div className="tweet-1" style={{ height: "318px", overflowY: "scroll" }}>
                                <Tweet tweetId='1295731827064180736' />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-2">
                        <div className="box-shadow p-3">
                            <h5 className='py-1'>Turning Manpower into Manworth</h5>
                            <div className="tweet-1" style={{ height: "318px", overflowY: "scroll" }}>
                                <Tweet tweetId='1296091363935567872' />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-2">
                        <div className="box-shadow p-3">
                            <h5 className='py-1'>Knowledge Bank</h5>
                            <div className="tweet-1" style={{ height: "318px", overflowY: "scroll" }}>
                                <Tweet tweetId='1291743768782106624' />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-2">
                        <div className="box-shadow p-3">
                            <h5 className='py-1'>Advance Human Economic Action Design</h5>
                            <div className="tweet-1" style={{ height: "318px", overflowY: "scroll" }}>
                                <Tweet tweetId='1291381313723719683' />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-2">
                        <div className="box-shadow p-3">
                            <h5 className='py-1'>MRP for Farmers</h5>
                            <div className="tweet-1" style={{ height: "318px", overflowY: "scroll" }}>
                                <Tweet tweetId='1292832061955272706' />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-2">
                        <div className="box-shadow p-3">
                            <h5 className='py-1'>Economic Democracy</h5>
                            <div className="tweet-1" style={{ height: "318px", overflowY: "scroll" }}>
                                <Tweet tweetId='1292468047140151297' />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-2">
                        <div className="box-shadow p-3">
                            <h5 className='py-1'>Building Ram Rajya</h5>
                            <div className="tweet-1" style={{ height: "318px", overflowY: "scroll" }}>
                                <Tweet tweetId='1289575781471940608' />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 p-2">
                        <div className="box-shadow p-3">
                            <h5 className='py-1'>Employment at College Gate</h5>
                            <div className="tweet-1" style={{ height: "318px", overflowY: "scroll" }}>
                                <Tweet tweetId='1288846003211100160' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EmploymentDebate
