import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../../Components/EventProgrames/EventProgrames.css'
import articles from '../../Articles/Articles'
import ConstituencyData from '../../ConstituencyData/ConstituencyData'
import AllSocialmedia from '../SocialmediaShow/AllSocialmedia'

const EventProgrames = () => {

    const shortDis = (e) => {
        if (e.split(' ').length > 20) {
            let words = e.split(' ');
            let newContent = words.slice(0, 20).join(' ') + '...';
            return newContent;
        }

    }

    const [imgLang, setimgLang] = useState("/assets/images/Appeal to MPs - English.png");
    const [language, setlanguage] = useState("English");
    const [email, setemail] = useState("mp1@gmail.com");
    const [selectCons, setselectCons] = useState("Select constituency");
    const [selectConsEmail, setselectConsEmail] = useState("Select constituency First");
    const [mailText,setmailText]=useState(false);

    const consHandleClick = (e) => {
        let str = e.target.value;
        let intValue = parseInt(str.match(/\d+/)[0]);
        let stringPart = str.split(/&\d+/)[0];
        setselectCons(stringPart.trim());
        selectMail(intValue);
    }
    const selectMail = (e) => {
        for (const i of ConstituencyData) {
            if (i.id === e) {
                setselectConsEmail(i.email);
            }
        }
    }

    const imgHandleClick = (e) => {
        setlanguage(e.target.value);
        let laguageItem = document.getElementsByClassName("selectconstituency");
        laguageItem[0].removeAttribute('disabled');
        if (e.target.value === "Hindi") {
            setimgLang("/assets/images/Appeal to MPs - Hindi.png")
        }
        else {
            setimgLang("/assets/images/Appeal to MPs - English.png")

        }
    }

    const mailHandleClick = (e) => {
        setemail(e.target.value);
    }

    const sendMail = async () => {
        setmailText(true);
        // const data = {
        //     img: imgLang,
        //     lang: language,
        //     email: email
        // }
        // try {
        //     const response = await fetch('http://localhost:4000/sendmail', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     });

        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }

        //     const responseData = await response.json();
        //     console.log('Response from backend:', responseData);
        // } catch (error) {
        //     console.error('Error sending data to backend:', error);
        // }
    }

    return (
        <>
            <section className='position-relative'>
                <div className="bg-overlay">
                    <div className='container-fluid py-4' style={{ backgroundImage: "URL(/assets/images/background-gradient.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                        <div className="row">
                            <div className="col-sm-3">
                                <h4 className='text-center py-2 mt-3 heading-border w-100 border-success'>Write to your MP</h4>
                                <div className="send-campaign-mail my-3">
                                    <img src={imgLang} alt="campaign-mail-image" className='img-thumbnail border-0 ' />
                                    <div className="select-img my-2">
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
                                    </div>
                                    <div className="select-mail">
                                        <div className="selectMail bg-light">Mail to : {selectConsEmail}</div>
                                        <button className='send-mail my-2 w-75 py-1' onClick={sendMail}>{mailText === true ? `Mail send successfully`: `Send mail`}</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div>
                                    <h4 className='text-center py-2 my-3 heading-border w-75 border-success'>Written proposal to the DM. Varanasi</h4>
                                    <div className="row mb-3 border border-2 border-success">
                                        <div className="col-sm-6 p-0 ">
                                            <img src="/Assets/images/Letter to DM, Varanasi -1.jpg" alt="" className='img-thumbnail border-0' />
                                        </div>
                                        <div className="col-sm-6 p-0 ">
                                            <img src="/Assets/images/Letter to DM, Varanasi -2.jpg" alt="" className='img-thumbnail border-0' />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div>
                                    <h4 className='text-center py-2 my-3 heading-border w-100 border-success'>Vote for Employement</h4>
                                    <div className=' '>
                                        <img src="/Assets/images/Attack in Karnataka Jan 2018.jpg" alt="" className='img-thumbnail border-0 p-0' />
                                        <motion.button className='border-0 rounded m-2'
                                            initial={{ backgroundColor: "#15853e", color: "#fff" }}
                                            whileHover={{ x: 10 }}
                                        ><Link to="/vote-for-employement" className='text-decoration-none text-light'>See more</Link><i className="bi bi-arrow-right" style={{ color: "#fff" }}></i></motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <div>

                                    <div className="article mt-3">
                                    <h4 className='text-center py-2 mt-3 heading-border w-50 border-success w-75'>Aritcles</h4>
                                        {
                                            articles.map((e, i) => {
                                                return <div className="aritcle-card py-3" key={i}>
                                                    <img src={e.image} alt="" className='border-0 rounded img-thumbnail' />
                                                    <h5 className='my-2'>{e.title}</h5>
                                                    <p className='my-2'>{shortDis(e.shortDiscription)}</p>
                                                    <motion.button className='text-end border-0 rounded my-3' onClick={() => { window.scrollTo(0, 0) }}
                                                        initial={{ backgroundColor: "#15853e", color: "#fff" }}
                                                        whileHover={{ x: 10 }}
                                                    ><Link to={"/article/" + e.id} className='text-decoration-none text-light'>See more</Link><i className="bi bi-arrow-right" style={{ color: "#fff" }}></i></motion.button>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <h4 className='text-center py-2 mt-3 heading-border w-50 border-success w-75'>Employement Debate</h4>
                                <div className="row mt-3">
                                    <div className="col-sm-6">
                                        <img src="/Assets/images/post-image-2.png" alt="" className='img-thumbnail' />
                                    </div>
                                    <div className="col-sm-6">
                                        <img src="/Assets/images/post-image-1.png" alt="" className='img-thumbnail' style={{ paddingTop: "11px" }} />
                                    </div>
                                </div>
                                <div className='text-center my-2' style={{wordBreak:"break-all"}}><Link to="https://x.com/employonomics/status/1295367312690700290" target='_blank' >https://x.com/employonomics/status/1295367312690700290</Link></div>
                            </div>
                            <div className="col-sm-3">
                                <div>
                                    <h4 className='text-center py-2 my-3 heading-border w-100 border-success'>Man on a Mission</h4>
                                    <div className=' '>
                                        <img src="/Assets/images/Attack in Karnataka Jan 2018.jpg" alt="" className='img-thumbnail border-0 p-0' />
                                        <motion.button className='border-0 rounded m-2'
                                            initial={{ backgroundColor: "#15853e", color: "#fff" }}
                                            whileHover={{ x: 10 }}
                                        ><Link to="/convener" className='text-decoration-none text-light'>See more</Link><i className="bi bi-arrow-right" style={{ color: "#fff" }}></i></motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AllSocialmedia />

                    </div>
                </div>
            </section>
        </>
    )
}

export default EventProgrames
