import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Form() {
  return (
    <section id='contact' className='section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7 order-1 order-md-0'>
            <form name='Contact Form' method='POST'>
              <input type='hidden' name='form-name' value='Contact Form' />
              <div className='form-row'>
                <div className='form-group col-md-6 mb-4'>
                  <input
                    type='text'
                    placeholder='Name'
                    name='Name'
                    className='form-control'
                  />
                </div>
                <div className='form-group col-md-6 mb-4'>
                  <input
                    type='email'
                    placeholder='Email'
                    name='Email'
                    className='form-control'
                  />
                </div>
              </div>
              <div className='form-group mb-4'>
                <input
                  type='text'
                  placeholder='Subject'
                  name='Subject'
                  className='form-control'
                />
              </div>
              <div className='form-group mb-4'>
                <textarea
                  style={{ height: '200px' }}
                  placeholder='Message'
                  name='Message'
                  className='form-control w-100'
                ></textarea>
              </div>
              <button type='submit' className='button button-lg'>
                Send
              </button>
            </form>
          </div>
          <div className='col-md-5 pl-md-4'>
            <p className='mb-4'>
              For any inquires you can reach us through our communication lines
              or send us a message through our contact form.
            </p>
            <div className='contact-info'>
              <div className='contact-info-item mb-4'>
                <div className='contact-info-item-inner d-inline-block'>
                  <div className='d-flex align-items-center'>
                    <span className='item-icon'>
                      <FontAwesomeIcon
                        icon={faPhoneAlt}
                        style={{ fontSize: '14px' }}
                      />
                    </span>
                    <div className='item-info'>
                      {/* <p>Netplus Project Coordinator</p> */}
                      {/* <p>For any inquires call</p> */}
                      <p className='mb-0'>0710253321</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='contact-info-item'>
                <div className='contact-info-item-inner d-inline-block'>
                  <div className='d-flex align-items-center'>
                    <span className='item-icon'>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ fontSize: '14px' }}
                      />
                    </span>
                    <div className='item-info'>
                      <p>netpluskenya@gmail.com</p>
                      <p className='mb-0'>netplus254@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <p>Humanitarian Educational Centre Admin: 0723770871</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
