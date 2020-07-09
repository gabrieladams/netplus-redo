import React from 'react';

function HumanResource() {
  return (
    <section id='human-resource'>
      <div className='container-fluid px-md-8'>
        <div className='row mx-md-n8'>
          <div className='col-md-5 section-img d-none d-md-block px-md-8'></div>
          <div className='col-md-7 px-md-8'>
            <div className='section-content'>
              {/* motive section */}
              <h2 className='section-hdr mb-4 text-center text-md-left'>
                Human resource volunteers needed
              </h2>
              <div className='section-body'>
                <p className='mb-4'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  sequi sunt amet cupiditate at fuga aspernatur rerum
                  voluptates, saepe cumque! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Quos sequi sunt amet cupiditate
                  at fuga aspernatur rerum voluptates, saepe cumque!
                </p>
                <div className='volunteer-list d-flex flex-column flex-md-row pl-3 pl-lg-4'>
                  <div className='volunteer-list-left'>
                    <div className='volunteer-list-item d-flex align-items-center mb-12'>
                      <span className='list-item-number d-flex justify-content-center align-items-center'>
                        1
                      </span>
                      <div className='list-item-content pl-12'>
                        Occupational Therapist
                      </div>
                    </div>
                    <div className='volunteer-list-item d-flex align-items-center mb-12'>
                      <span className='list-item-number d-flex justify-content-center align-items-center'>
                        2
                      </span>
                      <div className='list-item-content pl-12'>
                        Speech Therapists
                      </div>
                    </div>
                    <div className='volunteer-list-item d-flex align-items-center mb-12'>
                      <span className='list-item-number d-flex justify-content-center align-items-center'>
                        3
                      </span>
                      <div className='list-item-content pl-12'>
                        Physiotherapists
                      </div>
                    </div>
                  </div>
                  <div className='volunteer-list-right pl-md-4 pl-lg-5'>
                    <div className='volunteer-list-item d-flex align-items-center mb-12'>
                      <span className='list-item-number d-flex justify-content-center align-items-center'>
                        4
                      </span>
                      <div className='list-item-content pl-12'>
                        Social Workers
                      </div>
                    </div>
                    <div className='volunteer-list-item d-flex align-items-center mb-12'>
                      <span className='list-item-number d-flex justify-content-center align-items-center'>
                        5
                      </span>
                      <div className='list-item-content pl-12'>
                        Psychologists
                      </div>
                    </div>
                    <div className='volunteer-list-item d-flex align-items-center mb-12'>
                      <span className='list-item-number d-flex justify-content-center align-items-center'>
                        6
                      </span>
                      <div className='list-item-content pl-12'>Teachers</div>
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

export default HumanResource;
