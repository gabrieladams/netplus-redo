import React from 'react';
import { Link } from 'react-router-dom';

function SuccessStories() {
  return (
    <section id='success-stories' className='section'>
      <div className='container'>
        <div className='section-hdr text-center'>
          <div className='row justify-content-md-center'>
            <div className='col-md-8 col-lg-6'>
              <h2 className='section-title'>Success stories</h2>
              <p className='section-subtxt mb-0'>
                Along the years we have successfully completed a few projects
                that we would like to share with you.
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
                  <h6 className='item-title'>
                    Kawangware Initiative Center Project
                  </h6>
                  <p className='item-details mb-0'>
                    The team planned their first visit to the Kawangware
                    Initiative Center in December of 2018 with a number of
                    objectives in mind...
                  </p>
                </div>
                <div className='item-ftr'>
                  <Link className='item-link button button-sm' to='/'>
                    Read Story
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
                  <h6 className='item-title'>
                    Menstrual Health and Hygiene promotion
                  </h6>
                  <p className='item-details mb-0'>
                    To achieve its objective in menstrual health promotion a
                    mentorship Programme was launched at Good Hope Secondary
                    School in Kawangware...
                  </p>
                </div>
                <div className='item-ftr'>
                  <Link className='item-link button button-sm' to='/'>
                    Read Story
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
                  <h6 className='item-title'>
                    Art Performance and talent Showcase
                  </h6>
                  <p className='item-details mb-0'>
                    In line with its vision and objective to enhance talent
                    growth, Netplus organized a dance show case event to create
                    awareness on menstrual health...
                  </p>
                </div>
                <div className='item-ftr'>
                  <Link className='item-link button button-sm' to='/'>
                    Read Story
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

export default SuccessStories;
