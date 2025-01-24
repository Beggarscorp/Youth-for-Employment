import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const AllSocialmedia = () => {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                <h4 className='py-2 heading-border border-success'>Career Building through Nation Building</h4>
                <p className='py-2'>This proposal was given to the then Minister for Youth Affairs Col. Rajyavardhan Singh Rathore, Secretary and his team of officials in June 2018. <br/><br/>This is NOT the Employment Policy, but the foundation for it. Designed as the largest incubation programme to engage 30 million youth, average 100 youth in 10 Teams in every Gram Panchayat and urban Ward, it proposes to democratise economy by creating strong Work Culture and Entrepreneurial Mindset through joint participation of the government and the society.</p>
                </div>
                <div className="col-sm-8">
                <Carousel pause="hover" data-bs-theme="dark" touch={true} keyboard={true} variant="dark" indicators={false} interval={2000} wrap="true">
                        <Carousel.Item>
                            <img src="/Assets/images/Career Building through Nation Building-2/Proposal to Ministry of Youth Affairs-1.jpg" alt="" className="img-fluid shadow-lg border border-2 border-success" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/Assets/images/Career Building through Nation Building-2/Proposal to Ministry of Youth Affairs-2.jpg" alt="" className="img-fluid shadow-lg border border-2 border-success" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/Assets/images/Career Building through Nation Building-2/Proposal to Ministry of Youth Affairs-3.jpg" alt="" className="img-fluid shadow-lg border border-2 border-success" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/Assets/images/Career Building through Nation Building-2/Proposal to Ministry of Youth Affairs-4.jpg" alt="" className="img-fluid shadow-lg border border-2 border-success" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/Assets/images/Career Building through Nation Building-2/Proposal to Ministry of Youth Affairs-5.jpg" alt="" className="img-fluid shadow-lg border border-2 border-success" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/Assets/images/Career Building through Nation Building-2/Proposal to Ministry of Youth Affairs-6.jpg" alt="" className="img-fluid shadow-lg border border-2 border-success" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/Assets/images/Career Building through Nation Building-2/Proposal to Ministry of Youth Affairs-7.jpg" alt="" className="img-fluid shadow-lg border border-2 border-success" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/Assets/images/Career Building through Nation Building-2/Proposal to Ministry of Youth Affairs-8.jpg" alt="" className="img-fluid shadow-lg border border-2 border-success" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/Assets/images/Career Building through Nation Building-2/Proposal to Ministry of Youth Affairs-9.jpg" alt="" className="img-fluid shadow-lg border border-2 border-success" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="/Assets/images/Career Building through Nation Building-2/Proposal to Ministry of Youth Affairs-10.jpg" alt=""className="img-fluid shadow-lg border border-2 border-success" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
        </>
    )
}

export default AllSocialmedia
