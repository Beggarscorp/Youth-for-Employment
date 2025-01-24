import React from 'react'
import '../../Components/EventProgrames/EventProgrames.css'
// import ConstituencyData from '../../ConstituencyData/ConstituencyData'
import AllSocialmedia from '../SocialmediaShow/AllSocialmedia'
import VoteforEmployment from '../HomeComponents/VoteforEmployment/VoteforEmployment'
import ProposalToDM from '../HomeComponents/ProposalToDM/ProposalToDM'
import OpenMemoToMP from '../HomeComponents/OpenMemoToMP/OpenMemoToMP'
import ManOnMission from '../HomeComponents/ManOnMission/ManOnMission'
import EmploymentDebate from '../HomeComponents/EmploymentDebate/EmploymentDebate'
import MissionVNS from '../HomeComponents/MissionVNS/MissionVNS'
import ImageSlider from '../../Components/ImageSlider/ImageSlider'
import Onloadpopup from '../../Components/Onload_popup/Onload_popup'  

const EventProgrames = () => {


    return (
        <>
            <Onloadpopup />
            <div className="my-4">
                <ImageSlider/>
            </div>
            <div className="my-4">
                <OpenMemoToMP />
            </div>
            <div className="my-4 p-3" style={{ background: "rgb(254 242 242)" }}>
                <ProposalToDM />
            </div>
            <div className="my-4">
                <MissionVNS />
            </div>
            <div className="my-4 p-3" style={{ background: "rgb(254 242 242)" }}>
                <EmploymentDebate />
            </div>
            <div className="my-4">
                <VoteforEmployment />
            </div>
            <div className="my-4 p-3" style={{ background: "rgb(254 242 242)" }}>
                <ManOnMission />
            </div>
            <div className="my-4">
                <AllSocialmedia />
            </div>
            <section className='position-relative'>
                <div className="bg-overlay">
                    {/* style={{ backgroundImage: "URL(/Assets/images/background-gradient.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} */}
                    <div className='container-fluid py-4'>
                        {/* <div className="row">
                            <div className="col-sm-3">
                                <div>
                                    <h4 className='text-center py-2 my-3 heading-border w-100 border-success font-20'>Vote for Employment</h4>
                                    <div className=' '>
                                        <Link to="/vote-for-employment" className='text-decoration-none text-light'><img src="/Assets/images/Attack in Karnataka Jan 2018.jpg" alt="" className='img-thumbnail border-0 p-0' /></Link>
                                        <motion.button className='border-0 rounded m-2'
                                            initial={{ backgroundColor: "#15853e", color: "#fff" }}
                                            whileHover={{ x: 10 }}
                                        ><Link to="/vote-for-employment" className='text-decoration-none text-light'>See more</Link><i className="bi bi-arrow-right" style={{ color: "#fff" }}></i></motion.button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div>
                                    <h4 className='text-center py-2 my-3 heading-border w-75 border-success font-20'>Written proposal to the DM, Varanasi</h4>
                                    <Link to="/DMProposal" className='text-decoration-none text-light'>
                                        <div className="row mb-3 border border-2 border-success">
                                            <div className="col-sm-6 p-0 ">
                                                <img src="/Assets/images/Mission Vns/Letter to DM, Varanasi -1.jpg" alt="" className='img-thumbnail border-0' />
                                            </div>
                                            <div className="col-sm-6 p-0 ">
                                                <img src="/Assets/images/Mission Vns/Letter to DM, Varanasi -2.jpg" alt="" className='img-thumbnail border-0' />
                                            </div>
                                        </div>
                                    </Link>

                                </div>
                            </div>

                            <div className="col-sm-3">
                                <h4 className='text-center py-2 my-2 heading-border w-100 border-success font-20'>Open Memorandum to MPs</h4>
                                <div className="twitter" style={{ height: "430px", overflowY: "scroll" }}>
                                    <Tweet tweetId='1819219152650809396' />
                                </div>
                                <Link to="/MemorandumToLeaders" className='text-decoration-none text-light'>
                                        <motion.button className='border-0 rounded m-2 my-4'
                                            initial={{ backgroundColor: "#15853e", color: "#fff" }}
                                            whileHover={{ x: 10 }}
                                        >See all the tweets</motion.button>
                                    </Link>
                            </div>

                        </div> */}

                        {/* <div className="row">
                            <div className="col-sm-3">
                                <div>
                                    <h4 className='text-center py-2 my-3 heading-border w-100 border-success font-20'>Man on a Mission</h4>
                                    <div className=' '>
                                        <Link to="/man-on-mission" className='text-decoration-none text-light'><img src="/Assets/images/vote-for-employement-images/Man on a Mission/Odisha Govt-1(3).jpg" alt="" className='img-thumbnail border-0 p-0' /></Link>
                                        <Link to="/man-on-mission" className='text-decoration-none text-light'>
                                        <motion.button className='border-0 rounded m-2'
                                            initial={{ backgroundColor: "#15853e", color: "#fff" }}
                                            whileHover={{ x: 10 }}
                                        >See more<i className="bi bi-arrow-right" style={{ color: "#fff" }}></i></motion.button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <h4 className='text-center py-2 mt-3 heading-border w-50 border-success w-75 font-20'>Employment Debate: July-Aug 2020</h4>
                                <div className="row mt-3">
                                    <div className="col-sm-12">
                                        <Link to="/EmploymentDebate" className='text-decoration-none text-light'>
                                            <img src="/Assets/images/Employment Debate/Employment Dabate Analytics-edited.jpeg" alt="" className='img-fluid' />
                                        </Link>
                                    </div> */}
                        {/* <div className="col-sm-6">
                                        <div className="tweet-2" style={{ height: "430px", overflowY: "scroll" }}>
                                            <Tweet tweetId='1297543823623507969' />
                                        </div>
                                    </div> */}
                        {/* <Link to="/EmploymentDebate" className='text-decoration-none text-light'>
                                        <motion.button className='border-0 rounded m-2 my-4'
                                            initial={{ backgroundColor: "#15853e", color: "#fff" }}
                                            whileHover={{ x: 10 }}
                                        >See more about Employment Debate</motion.button>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <h4 className='text-center py-2 mt-3 heading-border w-100 border-success font-20'>Mission Varanasi</h4>
                                <div className="send-campaign-mail my-3">
                                    <Link to="/mission-vns" className='text-decoration-none text-light'><img src="/Assets/images/Mission Vns/mission-vns-banner.png" alt="campaign-mail-image" className='img-thumbnail border-0 ' /></Link> */}
                        {/* <img src={imgLang} alt="campaign-mail-image" className='img-thumbnail border-0 ' /> */}
                        {/* <div className="select-img my-2">
                                        <select name="" onChange={imgHandleClick} className='selectLang w-100'>
                                            <option value="English">Select Language</option>
                                            <option value="English">English</option>
                                            <option value="Hindi">Hindi</option>
                                        </select>
                                        <select name="" onChange={consHandleClick} className='selectconstituency w-100 mt-2' disabled>
                                            <option value="Select constituency">Select constituency</option>
                                            {
                                                ConstituencyData.map((e, i) => {
                                                    return <option key={i} value={e.seat + "&" + e.id} >{e.seat}</option>

                                                })
                                            }
                                        </select>
                                    </div> */}
                        {/* <div className="select-mail">
                                        <div className="selectMail bg-light">Mail to : {selectConsEmail}</div>
                                        <button className='send-mail my-2 w-75 py-1' onClick={sendMail}>{mailText === true ? `Mail send successfully` : `Send mail`}</button>
                                    </div> */}
                        {/* <Link to="/mission-vns" className='text-decoration-none text-light'>
                                    <motion.button className='border-0 rounded m-2'
                                        initial={{ backgroundColor: "#15853e", color: "#fff" }}
                                        whileHover={{ x: 10 }}
                                    >See more<i className="bi bi-arrow-right" style={{ color: "#fff" }}></i></motion.button>
                                    </Link>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>
        </>
    )
}

export default EventProgrames
