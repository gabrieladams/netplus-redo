import React from 'react';
import { Link } from 'react-router-dom';

function MotiveGallery() {
  return (
    <section id='motive-gallery'>
      <div className='container-fluid px-md-8'>
        <div className='row mx-md-n8'>
          <div className='col-md-5 section-img d-none d-md-block px-md-8'></div>
          <div className='col-md-7 px-md-8'>
            <div className='section-content py-5'>
              {/* motive section */}
              <div className='motive-section mb-4'>
                <h2 className='section-hdr mb-4 text-center text-md-left'>
                  Motive behind creation
                </h2>
                <div className='section-body'>
                  <p>
                    In our circles today, we interact with various people still
                    pursuing their studies but have identified their skills and
                    talents and continue to work towards bettering themselves.
                    However, some of these people lack the platform to showcase
                    how good they really are and so tend to remain in the
                    background.
                  </p>
                  <p className='mb-0'>
                    As a team, aimed at helping others make connections to
                    propagate themselves, we would like to give such people the
                    platform to expose their skills and talents to people who
                    can help them advance.
                  </p>
                </div>
              </div>

              {/* gallery section */}
              <div className='gallery-section'>
                <h6 className='section-hdr mb-4'>Gallery</h6>
                <div className='section-body mb-4'>
                  <div className='row mx-md-n8'>
                    {/* col-1 */}
                    <div className='col-md-3 px-md-2 mb-md-0'>
                      <div className='gallery-img gallery-img-1 span-2'></div>
                    </div>

                    {/* col-2 */}
                    <div className='col-md-3 d-flex flex-md-column px-md-2 mb-md-0'>
                      <div className='gallery-img gallery-img-2 span-1 w-md-100 mr-2 mr-md-0 mb-md-16'></div>
                      <div className='gallery-img gallery-img-3 span-1 w-md-100 ml-2 ml-md-0'></div>
                    </div>

                    {/* col-3 */}
                    <div className='col-md-3 d-flex flex-md-column px-md-2 mb-md-0'>
                      <div className='gallery-img gallery-img-4 span-1 w-md-100 mr-2 mr-md-0 mb-md-16'></div>
                      <div className='gallery-img gallery-img-5 span-1 w-md-100 ml-2 ml-md-0'></div>
                    </div>

                    {/* col-4 */}
                    <div className='col-md-3 px-md-2'>
                      <div className='gallery-img gallery-img-6 span-2'></div>
                    </div>

                    {/* col-1
                    <div className='col-md-3 px-md-2 mb-md-0'>
                      <a href={gallery_img_1} className='g-img d-block'>
                        <div className='gallery-img gallery-img-1 span-2'></div>
                      </a>
                    </div>

                    col-2
                    <div className='col-md-3 d-flex flex-md-column px-md-2 mb-md-0'>
                      <a href={gallery_img_2} className='g-img d-block'>
                        <div className='gallery-img gallery-img-2 span-1 w-md-100 mr-2 mr-md-0 mb-md-16'></div>
                      </a>
                      <a href={gallery_img_3} className='g-img d-block'>
                        <div className='gallery-img gallery-img-3 span-1 w-md-100 ml-2 ml-md-0'></div>
                      </a>
                    </div>

                    col-3
                    <div className='col-md-3 d-flex flex-md-column px-md-2 mb-md-0'>
                      <a href={gallery_img_4} className='g-img d-block'>
                        <div className='gallery-img gallery-img-4 span-1 w-md-100 mr-2 mr-md-0 mb-md-16'></div>
                      </a>
                      <a href={gallery_img_5} className='g-img d-block'>
                        <div className='gallery-img gallery-img-5 span-1 w-md-100 ml-2 ml-md-0'></div>
                      </a>
                    </div>

                    col-4
                    <div className='col-md-3 px-md-2'>
                      <a href={gallery_img_6} className='g-img d-block'>
                        <div className='gallery-img gallery-img-6 span-2'></div>
                      </a>
                    </div> */}
                  </div>
                </div>
                <div className='section-ftr text-center'>
                  <Link to='/gallery' className='section-link'>
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MotiveGallery;
