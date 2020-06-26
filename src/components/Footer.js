import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className=''>
      <div className='container'>
        <div className='upper-section'>
          <div className='row'>
            {/* item 1 */}
            <div className='col-md-4'>
              <div className='item'>
                <h6 className='item-title mb-4'>Summary</h6>
                <div className='item-body'>
                  <p>
                    NetPlus Kenya is an agency that purposes to provide a
                    platform for young people to showcase their talents, skills
                    and connect them with persons who can support their vision
                    at whatever capacity.
                  </p>
                </div>
              </div>
            </div>

            {/* item 2 */}
            <div className='col-md-4 d-flex justify-content-md-center'>
              <div className='item'>
                <h6 className='item-title mb-4'>Navigation Links</h6>
                <div className='item-body'>
                  <div className='d-flex'>
                    <div className='d-flex flex-column'>
                      <Link to='/'>
                        <p>Home</p>
                      </Link>
                      <Link to='/about'>
                        <p>About</p>
                      </Link>
                      <Link to='/volunteers'>
                        <p>Volunteer</p>
                      </Link>
                    </div>

                    <div className='d-flex flex-column pl-5'>
                      <Link to='/partnership-and-collaboration'>
                        <p>Partnership &amp; Collaboration</p>
                      </Link>
                      <Link to='/donation'>
                        <p>Donation</p>
                      </Link>
                      <Link to='/contact'>
                        <p>Conatct</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* item 3 */}
            <div className='col-md-4 d-flex justify-content-md-center'>
              <div className='item'>
                <h6 className='item-title mb-4'>Contact</h6>
                <div className='item-body'>
                  <div className='d-flex'>
                    <div className='icon'>Phone</div>
                    <div className='pl-4'>+254 444 444 444</div>
                  </div>
                  <div className='d-flex'>
                    <div className='icon'>Email</div>
                    <div className='pl-4'>Netplus@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='lower-section'>
          <div className='row'>
            {/* item 4 */}
            <div className='col-12 d-flex justify-content-center'>
              <div className='item'>
                <h6 className='item-title mb-4'>Social Media</h6>
                <div className='item-body d-flex'>
                  <div>
                    <h2>F</h2>
                  </div>
                  <div>
                    <h2>T</h2>
                  </div>
                  <div>
                    <h2>I</h2>
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
