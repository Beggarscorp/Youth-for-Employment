import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Tweet } from 'react-twitter-widgets'

const OpenMemoToMP = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                <div className="col-sm-4 md-none">
                        <div className="img-background-1">
                        {/* style={{ height: "430px", overflowY: "scroll" }} */}
                            <div className="twitter">
                                <Tweet tweetId='1822835498785591503' />
                            </div>
                        </div>
                    </div>
                <div className="col-sm-8">
                        <div className="py-4">
                        <h4 className='my-3 heading-border border-success'>Open Memorandum to the MPs</h4>
                        <p className="py-3 font-15">Dear Leaders, People say politicians love <Link to="https://x.com/hashtag/poverty?src=hashtag_click" target="_blank">#poverty</Link> and <Link to="https://x.com/hashtag/unemployment?src=hashtag_click" target='_blank'>#unemployment</Link>. Can you prove them wrong? Starting from today, you will be meeting till August 12 for the 1st budget session of the 18th Lok Sabha
                        <Link to="https://x.com/LokSabhaSectt" target='_blank'>@LokSabhaSectt</Link>
                        . Can you discuss, decide and declare a time-bound result-oriented national <Link to="https://x.com/hashtag/EmploymentPolicy?src=hashtag_click" target='_blank'>#EmploymentPolicy</Link>? Your 21.59 cr youth (18-29 age group) voters of the country are watching you. 
                    </p>
                    <span className="text-end py-2" style={{paddingRight:"65px"}}>
                        राजनीति नहीं, रोजगार नीति <br/><br/>
                        </span>
                    <p className="py-2" style={{fontWeight:"bold"}}>It's a social campaign posted on Twitter daily 9 AM throughout this Monsoon Session of the Lok Sabha. As a responsible People's Representative, you may track the tweets, share, quote, respond to and update the action taken by you, so that the citizens, especially the youth, can know how much you care for their future : <Link to="https://x.com/employonomics" target='_blank'>https://x.com/employonomics</Link></p>
                        <Link to="/MemorandumToLeaders" className='text-decoration-none text-light'>
                            <motion.button className='border-0 rounded my-2'
                                initial={{ backgroundColor: "#15853e", color: "#fff" }}
                                whileHover={{ x: 10 }}
                            >See all the tweets</motion.button>
                        </Link>
                        </div>
                    </div>
                    <div className="col-sm-4 sm-none">
                        <div className="img-background-1">
                        {/* style={{ height: "430px", overflowY: "scroll" }} */}
                            <div className="twitter">
                                <Tweet tweetId='1822835498785591503' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OpenMemoToMP
