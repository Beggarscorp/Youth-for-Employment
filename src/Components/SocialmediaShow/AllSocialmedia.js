import React from 'react'
import { EmbeddedPost, FacebookProvider } from 'react-facebook'
import { Tweet } from 'react-twitter-widgets'

const AllSocialmedia = () => {
    return (
        <>
            <div className="container">
                <h4 className='text-center py-1 heading-border w-50 - border-success w-25'>Trending Social Media
                    <p className='py-2'>Join Our Social Hub to stay up to date</p>
                </h4>
                <div className="row">
                    <div className="col-sm-6 p-md-5">
                        <div className="head d-flex justify-content-start bg-light py-2 px-3 shadow">
                            <span><i className="bi bi-twitter"></i></span>
                            <h5 className='mx-2 m-auto'>Twitter</h5>
                        </div>
                        <div className="twitter" >
                            <Tweet tweetId='1295367312690700290' options={{height:"300"}}/>
                        </div>
                    </div>
                    <div className="col-sm-6 p-md-5">
                        <div className="head d-flex justify-content-start bg-light py-2 px-3 shadow">
                            <span><i className="bi bi-facebook" style={{color:"#1877F2"}}></i></span>
                            <h5 className='mx-2 m-auto'>Facebook</h5>
                        </div>
                        <div className="facebook my-3" >
                            <FacebookProvider appId="999382434736885">
                                <EmbeddedPost href="https://www.facebook.com/" width="500" />
                            </FacebookProvider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllSocialmedia
