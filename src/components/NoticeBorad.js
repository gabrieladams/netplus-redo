import React from 'react';
import noticeImage from '../assets/img/notice-img.jpg';
import noticeImage_2 from '../assets/img/notice-img-2.jpg';
import noticeImage_3 from '../assets/img/notice-img-3.jpg';

function NoticeBorad() {
    return (
        <section id='notice-board' className='section'>
            <div className="container">
                <div className="notice" style={{marginBottom: '4.5rem'}}>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="notice-img d-flex justify-content-center pb-4 pb-lg-0">
                                <img src={noticeImage} alt="notice" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-lg-7 d-flex align-items-center">
                            <div className="notice-content">
                                <p>
                                If part of your plans for 2021 is to be more proactive and tap into those skills and abilities you have or even develop the ideas God has put forth in your mind, Netplus has you covered.
                                </p>
                                <p>
                                This is a call for applicants, those who would like to plug into our activities and be part of the planning process too
                                applicants should be committed and innovative volunteers who would like to become:
                                </p>
                                <p>
                                    <span className='d-flex'>
                                        <span className='pr-2'>1.</span> 
                                        <span>Registered volunteers for particular projects.<br />
                                        Responsibilities:</span>
                                    </span>
                                    <ul>
                                        <li>Partake and contribute to project development strategies</li>
                                        <li>Involvement in activites on the ground on a regular basis</li>
                                    </ul>    
                                </p>
                                <p>
                                    <span className='d-flex'>
                                        <span className='pr-2'>2.</span> 
                                        <span>Team leaders for particular projects. <br />
                                        Responsibilities:</span>
                                    </span>
                                    <ul>
                                        <li>Run the project on the ground</li>
                                        <li>Be the link between the project coordinator and other volunteers</li>
                                        <li>Mobilize other volunteers</li>
                                    </ul>
                                </p>
                                <p>
                                    <span className='d-flex'>
                                        <span className='pr-2'>3.</span> 
                                        <span>Social media assistant. <br />Responsibilities:</span>
                                    </span>
                                    <ul>
                                        <li>Grow social media followings</li> 
                                        <li>Regular social media activity</li> 
                                        <li>Real time uploads on Netplus activites</li>
                                    </ul> 
                                </p>
                                <p style={{fontWeight: 'bold'}}>
                                    More details on the poster <br />
                                    Do reach out incase of any inquiries. Be blessed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="notice">
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <div className="notice-img mb-5 mb-md-0">
                                <img src={noticeImage_2} alt="Kawangware Mobile Therapy 2021" className='img-fluid'/>
                            </div>
                        </div>
                        <div className="col-md-5 pl-md-4">
                            <div className="notice-img">
                                <img src={noticeImage_3} alt="Call For Finance Pillars" className='img-fluid'/>
                            </div>
                        </div>
                    </div>

                </div>
            
            </div>
    </section>
    )
}

export default NoticeBorad
