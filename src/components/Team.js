import React from 'react';
import { Link } from 'react-router-dom';

function Team() {
  return (
    <section id='team' className='section'>
      <div className='container'>
        <div className='section-hdr text-center'>
          <div className='row justify-content-md-center'>
            <div className='col-md-8 col-lg-6'>
              <h2 className='section-title'>Meet the team</h2>
              <p className='section-subtxt mb-0'>
                We have a team of dedicated, passionate and talented people that
                belive fully in the aspirations of the agency and put their
                minds and efforts together to come up with transformational
                ideas that better the community.
              </p>
            </div>
          </div>
        </div>
        <div className='section-body'>
          <div className='row'>
            {/* item 1 */}
            <div className='col-md-6 col-lg-4'>
              <div className='item member'>
                <div className='item-hdr'>
                  <div className='item-img member-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title member-name'>Cheryl Okumu</h6>
                  <h6 className='item-details member-position mb-0'>
                    Co-founder
                  </h6>
                </div>
                <div className='item-ftr'>
                  {/* <Link className='item-link button button-sm' to='/'>
                    Read Profile
                  </Link> */}
                  <button
                    className='button button-sm'
                    type='button'
                    data-toggle='modal'
                    data-target='#Cheryl-Okumu-profile'
                  >
                    Read Profile
                  </button>
                </div>
              </div>
              <div
                className='modal fade'
                id='#Cheryl-Okumu-profile'
                data-backdrop='static'
                data-keyboard='false'
                tabindex='-1'
                role='dialog'
                aria-labelledby='staticBackdropLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <div className='item-img member-img'></div>
                      <h6 className='item-title member-name'>Cheryl Okumu</h6>
                      <h6 className='item-details member-position mb-0'>
                        Co-founder
                      </h6>
                    </div>
                    <div className='modal-body'>
                      <div className='member-profile'>
                        <p>
                          The team planned their first visit to the center in
                          December of 2018.With the following objectives in
                          mind:
                        </p>
                        <p>
                          To make objectives realized the net plus team began
                          with resource mobilization activities that included
                          reaching out to family and friends to support them
                          with food donations ,toiletries ,shoes and clothing
                          ,books and stationaries which they received.
                        </p>
                      </div>
                    </div>
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='button button-sm'
                        data-dismiss='modal'
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* item 2 */}
            <div className='col-md-6 col-lg-4'>
              <div className='item member'>
                <div className='item-hdr'>
                  <div className='item-img member-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title member-name'>Jane Doe</h6>
                  <h6 className='item-details member-position mb-0'>Member</h6>
                </div>
                <div className='item-ftr'>
                  <Link className='item-link button button-sm' to='/'>
                    Read Profile
                  </Link>
                </div>
              </div>
            </div>

            {/* item 3 */}
            <div className='col-md-6 col-lg-4'>
              <div className='item member'>
                <div className='item-hdr'>
                  <div className='item-img member-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title member-name'>Jane Doe</h6>
                  <h6 className='item-details member-position mb-0'>Member</h6>
                </div>
                <div className='item-ftr'>
                  <Link className='item-link button button-sm' to='/'>
                    Read Profile
                  </Link>
                </div>
              </div>
            </div>

            {/* item 4 */}
            <div className='col-md-6 col-lg-4'>
              <div className='item member'>
                <div className='item-hdr'>
                  <div className='item-img member-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title member-name'>John Doe</h6>
                  <h6 className='item-details member-position mb-0'>Member</h6>
                </div>
                <div className='item-ftr'>
                  <Link className='item-link button button-sm' to='/'>
                    Read Profile
                  </Link>
                </div>
              </div>
            </div>

            {/* item 5 */}
            <div className='col-md-6 col-lg-4'>
              <div className='item member'>
                <div className='item-hdr'>
                  <div className='item-img member-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title member-name'>John Doe</h6>
                  <h6 className='item-details member-position mb-0'>Member</h6>
                </div>
                <div className='item-ftr'>
                  <Link className='item-link button button-sm' to='/'>
                    Read Profile
                  </Link>
                </div>
              </div>
            </div>

            {/* item 6 */}
            <div className='col-md-6 col-lg-4'>
              <div className='item member'>
                <div className='item-hdr'>
                  <div className='item-img member-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title member-name'>Jane Doe</h6>
                  <h6 className='item-details member-position mb-0'>Member</h6>
                </div>
                <div className='item-ftr'>
                  <Link className='item-link button button-sm' to='/'>
                    Read Profile
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

export default Team;
