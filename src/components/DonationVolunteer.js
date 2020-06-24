import React from 'react';
import { Link } from 'react-router-dom';

function DonationVolunteer() {
  return (
    <section id='donation-volunteer'>
      <div className='section-inner section'>
        <div className='container'>
          <div className='section-body'>
            <div className='row justify-content-lg-center'>
              {/* item 1 */}
              <div className='col-md-6 col-lg-5'>
                <div id='donation' className='item'>
                  <div className='item-inner'>
                    <div className='item-hdr'>
                      <h4 className='item-title mb-0'>Make a donation</h4>
                    </div>
                    <div className='item-body'>
                      <p className='mb-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos sequi sunt amet cupiditate at fuga aspernatur rerum
                        voluptates, saepe cumque!
                      </p>
                    </div>
                    <div className='item-ftr'>
                      <Link
                        to='/donation'
                        className='item-link button button-sm'
                      >
                        Donate Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* item 2 */}
              <div className='col-md-6 col-lg-5'>
                <div id='volunteer' className='item'>
                  <div className='item-inner'>
                    <div className='item-hdr'>
                      <h4 className='item-title mb-0'>Become a volunteer</h4>
                    </div>
                    <div className='item-body'>
                      <p className='mb-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos sequi sunt amet cupiditate at fuga aspernatur rerum
                        voluptates, saepe cumque!
                      </p>
                    </div>
                    <div className='item-ftr'>
                      <Link
                        to='/volunteers'
                        className='item-link button button-sm'
                      >
                        Volunteer Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonationVolunteer;
