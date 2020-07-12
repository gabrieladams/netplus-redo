import React from 'react';
import { Link } from 'react-router-dom';

function CoFounder() {
  return (
    <section id='co-founder' className='section'>
      <div className='container'>
        <div className='row justify-content-xl-center'>
          <div className='col-md-6 col-xl-4'>
            <div className='co-founder-img'>
              <div className='img h-100'></div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='section-content'>
              <div className='section-content-inner'>
                <div className='co-founder-details'>
                  <p>
                    {/* Cheryl Okumu is the co-founder and CEO of NetPlus Kenya, she
                    oversees the day to day running of the organization. */}
                  </p>
                  <p>
                    She is an inspirational leader who tells stories that
                    inspire action while at the same time grounded in
                    humanitarian information that levers the society.
                  </p>
                </div>
                <Link className='button button-lg' to='/about'>
                  About The Agency
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoFounder;
