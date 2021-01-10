import React from 'react';
import netplusCalender from '../assets/Netplus-kenya-2021-calender-of-activities.pdf';

function ProgrammeBar() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className='programme-bar d-flex flex-column flex-md-row  justify-content-md-between align-items-md-center'>
              <h5 className='mb-4 mb-md-0'>
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
            
    )
}

export default ProgrammeBar
