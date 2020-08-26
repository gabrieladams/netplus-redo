import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className='main-footer'>
      <div className='container'>
        <div className='footer-inner'>
          <div className='row'>
            {/* item 1 */}
            <div className='col-md-4 mb-4 mb-md-0'>
              <div className='item item-1'>
                <h6 className='item-title mb-4'>Summary</h6>
                <div className='item-body'>
                  <p className='mb-0'>
                    NetPlus Kenya is an agency that purposes to provide a
                    platform for young people to showcase their talents, skills
                    and connect them with persons who can support their vision
                    at whatever capacity.
                  </p>
                </div>
              </div>
            </div>

            {/* item 2 */}
            <div className='col-md-4 d-flex justify-content-md-center mb-4 mb-md-0'>
              <div className='item item-2'>
                <h6 className='item-title mb-4'>Navigation Links</h6>
                <div className='item-body'>
                  <div className='d-flex'>
                    <div className='d-flex flex-column'>
                      <Link to='/' className='mb-12'>
                        Home
                      </Link>
                      <Link to='/about' className='mb-12'>
                        About
                      </Link>
                      <Link to='/volunteers' className=''>
                        Volunteer
                      </Link>
                    </div>

                    <div className='d-flex flex-column pl-5'>
                      <Link to='/donation' className='mb-12'>
                        Donation
                      </Link>
                      <Link to='/gallery' className='mb-12'>
                        Gallery
                      </Link>
                      <Link to='/contact' className=''>
                        Conatct
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* item 3 */}
            <div className='col-md-4 d-flex justify-content-md-center'>
              <div className='item item-3'>
                <h6 className='item-title mb-4'>Contact</h6>
                <div className='item-body'>
                  <div className='d-flex mb-12'>
                    <span className='icon'>
                      <FontAwesomeIcon
                        icon={faPhoneAlt}
                        style={{ fontSize: '14px' }}
                      />
                    </span>
                    <div className='pl-3'>+254 710 253 321</div>
                  </div>
                  <div className='d-flex mb-4'>
                    <span className='icon'>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ fontSize: '14px' }}
                      />
                    </span>
                    <div className='pl-3'>
                      <span className='mb-2 d-block'>
                        netpluskenya@gmail.com
                      </span>
                      <span className='d-block'>netplus254@gmail.com</span>
                    </div>
                  </div>
                  <div className='d-flex'>
                    <span className='pr-3'>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ fontSize: '14px' }}
                      />
                    </span>
                    <span className='pr-3'>
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ fontSize: '14px' }}
                      />
                    </span>
                    <span className='pr-3'>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ fontSize: '14px' }}
                      />
                    </span>
                    <span className='pr-3'>
                      <FontAwesomeIcon
                        icon={faYoutube}
                        style={{ fontSize: '14px' }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
