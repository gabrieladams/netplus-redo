import React from 'react';
import netplusCalender from '../assets/Netplus-kenya-2021-calender-of-activities.pdf';

function ProgrammeBar({ route }) {
    return (
      <section id="programme-bar" className={route === 'home' ? 'pt-5' : 'pb-5'}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className='programme-bar d-flex flex-column flex-lg-row  justify-content-lg-between align-items-lg-center'>
              <h5 className='mb-4 mb-lg-0'>
              Get the Netplus 2021 calender of activities
              </h5>
              <div>
                <a href={netplusCalender} target='_blank' rel='noopener noreferrer' className='button button-sm'>
                View
                </a>
                <a href={netplusCalender} className='button button-sm ml-4' download='Netplus_kenya 2021 calender of activities'>
                Download
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>     
    )
}

export default ProgrammeBar
