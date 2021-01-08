import React from 'react';

import gallery_img_1 from '../assets/img/gallery/gallery-img-1.jpg';
import gallery_img_2 from '../assets/img/gallery/gallery-img-2.jpg';

function Blog() {
    return (
        <React.Fragment>
			{/* Start post-content Area */}
			<section className="post-content-area">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 posts-list">
                            {/* post 1 */}
							<div className="single-post row">
								<div className="col-lg-3  col-md-3 meta-details">
							
									<div className="user-details row">
										<p className="user-name col-lg-12 col-md-12 col-6"><span>Wambida Max Ochieng</span> <span className="lnr lnr-user"></span></p>
										<p className="date col-lg-12 col-md-12 col-6"><span>12 March, 2020</span> <span className="lnr lnr-calendar-full"></span></p>						
									</div>
								</div>
								<div className="col-lg-9 col-md-9 ">
									<div className="feature-img">
										<img className="img-fluid" src={gallery_img_1} alt='blog-post-1' />
									</div>
									<div className="posts-title" href="blog-single.html"><h3>Importance of mentorship programmes</h3></div>
									<p className="excert">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit voluptas similique obcaecati blanditiis dolorem architecto quis, molestiae debitis ipsa? Delectus dicta aut debitis beatae dolore enim incidunt aspernatur deleniti?
									</p>
                                    <button className='button button-sm' type='button' data-toggle='modal' data-target='#post-one'
                  >
                    Read More
                  </button>
								</div>

                                <div
                className='modal fade'
                id='post-one'
                data-backdrop='static'
                data-keyboard='false'
                tabindex='-1'
                role='dialog'
                aria-labelledby='staticBackdropLabel'
                aria-hidden='true'>
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header pt-4 px-3 px-sm-4 px-lg-5'>
                      <div className='row justify-content-center mx-0'>
                        <div className='px-0'>
                          <div className='item-img member-img member-1-img mb-4'></div>
                          <h5 className='item-title member-name text-center'>
                          Importance of mentorship programmes
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className='modal-body px-3 px-sm-4 px-lg-5'>
                      <div className='member-profile'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic nemo corporis sed voluptas odio voluptatem quaerat facilis architecto est.
                        </p>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste exercitationem necessitatibus libero earum, officiis tempore et nostrum nam? Eaque, quibusdam fuga doloremque voluptate numquam perspiciatis cupiditate a laborum illo odio.
                        </p>
                        <p className='mb-0'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eveniet cumque maxime autem culpa ipsa error deleniti, consequatur suscipit? Voluptatem ipsam exercitationem fuga non facere maiores, rem consequatur sed inventore!
                        </p>
                      </div>
                    </div>
                    <div className='modal-footer justify-content-start pb-5 px-3 px-sm-4 px-lg-5'>
                      <button
                        type='button'
                        className='button button-sm'
                        data-dismiss='modal'
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
							</div>

                            {/* post 2 */}
							<div className="single-post row">
								<div className="col-lg-3  col-md-3 meta-details">
									
									<div className="user-details row">
										<p className="user-name col-lg-12 col-md-12 col-6"><span>Cheryl Okumu</span> <span className="lnr lnr-user"></span></p>
										<p className="date col-lg-12 col-md-12 col-6"><span>24 April, 2020</span> <span className="lnr lnr-calendar-full"></span></p>					
									</div>
								</div>
								<div className="col-lg-9 col-md-9 ">
									<div className="feature-img">
										<img className="img-fluid" src={gallery_img_2} alt='Blog-post-2' />
									</div>
									<div className="posts-title" href="blog-single.html"><h3>Things to look at before choosing a career path</h3></div>
									<p className="excert">
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores, minus quod animi dignissimos nemo! Molestias non, adipisci nemo, velit necessitatibus quia quae nesciunt optio dignissimos quos iste labore? Consequuntur!
									</p>
									<button className='button button-sm' type='button' data-toggle='modal' data-target='#post-two'
                  >
                    Read More
                  </button>
								</div>

                                <div
                className='modal fade'
                id='post-two'
                data-backdrop='static'
                data-keyboard='false'
                tabindex='-1'
                role='dialog'
                aria-labelledby='staticBackdropLabel'
                aria-hidden='true'>
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header pt-4 px-3 px-sm-4 px-lg-5'>
                      <div className='row justify-content-center mx-0'>
                        <div className='px-0'>
                          <div className='item-img member-img member-1-img mb-4'></div>
                          <h5 className='item-title member-name text-center'>
                          Things to look at before choosing a career path
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className='modal-body px-3 px-sm-4 px-lg-5'>
                      <div className='member-profile'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic nemo corporis sed voluptas odio voluptatem quaerat facilis architecto est.
                        </p>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste exercitationem necessitatibus libero earum, officiis tempore et nostrum nam? Eaque, quibusdam fuga doloremque voluptate numquam perspiciatis cupiditate a laborum illo odio.
                        </p>
                        <p className='mb-0'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eveniet cumque maxime autem culpa ipsa error deleniti, consequatur suscipit? Voluptatem ipsam exercitationem fuga non facere maiores, rem consequatur sed inventore!
                        </p>
                      </div>
                    </div>
                    <div className='modal-footer justify-content-start pb-5 px-3 px-sm-4 px-lg-5'>
                      <button
                        type='button'
                        className='button button-sm'
                        data-dismiss='modal'
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>

                                </div>

                            {/* post 3 */}
							<div className="single-post row">
								<div className="col-lg-3  col-md-3 meta-details">
							
									<div className="user-details row">
										<p className="user-name col-lg-12 col-md-12 col-6"><span>Wambida Max Ochieng</span> <span className="lnr lnr-user"></span></p>
										<p className="date col-lg-12 col-md-12 col-6"><span>12 March, 2020</span> <span className="lnr lnr-calendar-full"></span></p>						
									</div>
								</div>
								<div className="col-lg-9 col-md-9 ">
									<div className="feature-img">
										<img className="img-fluid" src={gallery_img_1} alt='blog-post-4' />
									</div>
									<div className="posts-title" href="blog-single.html"><h3>Importance of mentorship programmes</h3></div>
									<p className="excert">
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit impedit voluptas similique obcaecati blanditiis dolorem architecto quis, molestiae debitis ipsa? Delectus dicta aut debitis beatae dolore enim incidunt aspernatur deleniti?
									</p>
									<button className='button button-sm' type='button' data-toggle='modal' data-target='#post-three'>Read More</button>
								</div>

                                </div>

                                <div
                className='modal fade'
                id='post-three'
                data-backdrop='static'
                data-keyboard='false'
                tabindex='-1'
                role='dialog'
                aria-labelledby='staticBackdropLabel'
                aria-hidden='true'>
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header pt-4 px-3 px-sm-4 px-lg-5'>
                      <div className='row justify-content-center mx-0'>
                        <div className='px-0'>
                          <div className='item-img member-img member-1-img mb-4'></div>
                          <h5 className='item-title member-name text-center'>
                          Importance of mentorship programmes
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className='modal-body px-3 px-sm-4 px-lg-5'>
                      <div className='member-profile'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse hic nemo corporis sed voluptas odio voluptatem quaerat facilis architecto est.
                        </p>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste exercitationem necessitatibus libero earum, officiis tempore et nostrum nam? Eaque, quibusdam fuga doloremque voluptate numquam perspiciatis cupiditate a laborum illo odio.
                        </p>
                        <p className='mb-0'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eveniet cumque maxime autem culpa ipsa error deleniti, consequatur suscipit? Voluptatem ipsam exercitationem fuga non facere maiores, rem consequatur sed inventore!
                        </p>
                      </div>
                    </div>
                    <div className='modal-footer justify-content-start pb-5 px-3 px-sm-4 px-lg-5'>
                      <button
                        type='button'
                        className='button button-sm'
                        data-dismiss='modal'
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
							{/* </div>	 */}

                            {/* post 4 */}
							<div className="single-post row">
								<div className="col-lg-3  col-md-3 meta-details">
									
									<div className="user-details row">
										<p className="user-name col-lg-12 col-md-12 col-6"><span>Cheryl Okumu</span> <span className="lnr lnr-user"></span></p>
										<p className="date col-lg-12 col-md-12 col-6"><span>24 April, 2020</span> <span className="lnr lnr-calendar-full"></span></p>					
									</div>
								</div>
								<div className="col-lg-9 col-md-9 ">
									<div className="feature-img">
										<img className="img-fluid" src={gallery_img_2} alt='Blog-post-2' />
									</div>
									<div className="posts-title" href="blog-single.html"><h3>Things to look at before choosing a career path</h3></div>
									<p className="excert">
										Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores, minus quod animi dignissimos nemo! Molestias non, adipisci nemo, velit necessitatibus quia quae nesciunt optio dignissimos quos iste labore? Consequuntur!
									</p>
									<button className='button button-sm' type='button' data-toggle='modal' data-target='#post-two'>Read More</button>
								</div>
							</div>														
		                    {/* <nav className="blog-pagination justify-content-center d-flex">
		                        <ul className="pagination">
		                            <li className="page-item">
		                                <a href="#" className="page-link" aria-label="Previous">
		                                    <span aria-hidden="true">
		                                        <span className="lnr lnr-chevron-left"></span>
		                                    </span>
		                                </a>
		                            </li>
		                            <li className="page-item"><a href="#" className="page-link">01</a></li>
		                            <li className="page-item active"><a href="#" className="page-link">02</a></li>
		                            <li className="page-item"><a href="#" className="page-link">03</a></li>
		                            <li className="page-item"><a href="#" className="page-link">04</a></li>
		                            <li className="page-item"><a href="#" className="page-link">09</a></li>
		                            <li className="page-item">
		                                <a href="#" className="page-link" aria-label="Next">
		                                    <span aria-hidden="true">
		                                        <span className="lnr lnr-chevron-right"></span>
		                                    </span>
		                                </a>
		                            </li>
		                        </ul>
		                    </nav> */}
						</div>
					</div>
				</div>	
			</section>
			{/* End post-content Area */}
        </React.Fragment>
    )
}

export default Blog;
