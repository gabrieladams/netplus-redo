import React from 'react';
import { Link } from 'react-router-dom';

function WhatWeDo() {
  return (
    <section id='what-we-do' className='section'>
      <div className='container'>
        <div className='section-hdr text-center'>
          <div className='row justify-content-md-center'>
            <div className='col-md-8 col-lg-6'>
              <h2 className='section-title'>What we do</h2>
              <p className='section-subtxt mb-0'>
                NetPlus engages in a number of activities that help it attain
                its goals and objectives.
              </p>
            </div>
          </div>
        </div>
        <div className='section-body'>
          <div className='row'>
            {/* item 1 */}
            <div className='col-md-6 col-lg-4'>
              <div className='item item-1'>
                <div className='item-hdr'>
                  <div className='item-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title'>Events</h6>
                  <p className='item-details mb-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sequi sunt amet cupiditate at fuga aspernatur rerum
                    voluptates, saepe cumque!
                  </p>
                </div>
                <div className='item-ftr'>
                  <Link className='item-link button button-sm' to='/'>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* item 2 */}
            <div className='col-md-6 col-lg-4'>
              <div className='item item-2'>
                <div className='item-hdr'>
                  <div className='item-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title'>Community Projects</h6>
                  <p className='item-details mb-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sequi sunt amet cupiditate at fuga aspernatur rerum
                    voluptates, saepe cumque!
                  </p>
                </div>
                <div className='item-ftr'>
                  <Link className='item-link button button-sm' to='/'>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* item 3 */}
            <div className='col-md-6 col-lg-4'>
              <div className='item item-3'>
                <div className='item-hdr'>
                  <div className='item-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title'>Mentorship Programmes</h6>
                  <p className='item-details mb-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sequi sunt amet cupiditate at fuga aspernatur rerum
                    voluptates, saepe cumque!
                  </p>
                </div>
                <div className='item-ftr'>
                  <Link className='item-link button button-sm' to='/'>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* item 4 */}
            <div className='col-md-6 col-lg-4'>
              <div className='item item-4'>
                <div className='item-hdr'>
                  <div className='item-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title'>Community Services</h6>
                  <p className='item-details mb-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sequi sunt amet cupiditate at fuga aspernatur rerum
                    voluptates, saepe cumque!
                  </p>
                </div>
                <div className='item-ftr'>
                  <Link className='item-link button button-sm' to='/'>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* item 5 */}
            <div className='col-md-6 col-lg-4'>
              <div className='item item-5'>
                <div className='item-hdr'>
                  <div className='item-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title'>Talent Search &amp; Nurturing</h6>
                  <p className='item-details mb-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sequi sunt amet cupiditate at fuga aspernatur rerum
                    voluptates, saepe cumque!
                  </p>
                </div>
                <div className='item-ftr'>
                  <Link className='item-link button button-sm' to='/'>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* item 6 */}
            <div className='col-md-6 col-lg-4'>
              <div className='item item-6'>
                <div className='item-hdr'>
                  <div className='item-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title'>
                    Community Capacity Building &amp; Empowerment
                  </h6>
                  <p className='item-details mb-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sequi sunt amet cupiditate at fuga aspernatur rerum
                    voluptates, saepe cumque!
                  </p>
                </div>
                <div className='item-ftr'>
                  <Link className='item-link button button-sm' to='/'>
                    Learn More
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

export default WhatWeDo;
