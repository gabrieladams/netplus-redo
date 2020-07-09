import React from 'react';

function Testimonials() {
  return (
    <section id='testimonials' className='section'>
      <div className='container'>
        <div className='section-hdr text-center'>
          <div className='row justify-content-md-center'>
            <div className='col-md-8 col-lg-6'>
              <h2 className='section-title'>Testimonials</h2>
              <p className='section-subtxt mb-0'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                sequi sunt amet cupiditate at fuga aspernatur rerum voluptates,
                saepe cumque!
              </p>
            </div>
          </div>
        </div>
        <div className='section-body'>
          <div className='row justify-content-md-center'>
            {/* item 1 */}
            <div className='col-md-5'>
              <div className='item item-1 px-5 py-4'>
                <div className='item-img mx-auto'></div>
                <div className='item-title'>
                  <h6 className='text-center mb-0'>Jane Doe</h6>
                </div>
                <div className='item-details'>
                  <p className='text-center mb-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sequi sunt amet cupiditate at fuga aspernatur rerum
                    voluptates, saepe cumque!
                  </p>
                </div>
              </div>
            </div>

            {/* item 2 */}
            <div className='col-md-5'>
              <div className='item item-2 px-5 py-4'>
                <div className='item-img mx-auto'></div>
                <div className='item-title'>
                  <h6 className='text-center mb-0'>Jane Doe</h6>
                </div>
                <div className='item-details'>
                  <p className='text-center mb-0'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos sequi sunt amet cupiditate at fuga aspernatur rerum
                    voluptates, saepe cumque!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
