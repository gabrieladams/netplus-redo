import React from 'react';

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
                  <button
                    className='button button-sm'
                    type='button'
                    data-toggle='modal'
                    data-target='#Kawangware-initiative-project'
                  >
                    Read Story
                  </button>
                </div>
              </div>

              {/* item 1 modal */}
              <div
                className='modal fade'
                id='Kawangware-initiative-project'
                data-backdrop='static'
                data-keyboard='false'
                tabIndex='-1'
                role='dialog'
                aria-labelledby='staticBackdropLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header pt-4 px-3 px-sm-4 px-lg-5'>
                      <h6 className='item-title mb-0'>
                        Kawangware Initiative Center Project
                      </h6>
                    </div>
                    <div className='modal-body px-3 px-sm-4 px-lg-5'>
                      <div className='item-details mb-4'>
                        <p>
                          The team planned their first visit to the center in
                          December of 2018 with the following objectives in
                          mind:
                        </p>
                        <ul className='list-group'>
                          <li className='list-group-item d-flex px-2 px-sm-3 px-md-4 border-0'>
                            <span className='pr-1'>1.</span>
                            <span>
                              Identifying the talents at Kawangware Initiative
                              Center.
                            </span>
                          </li>
                          <li className='list-group-item d-flex px-2 px-sm-3 px-md-4 border-0'>
                            <span className='pr-1'>2.</span>
                            <span>
                              Identifying the Challenges facing the boys/girls
                              and how to plug in.
                            </span>
                          </li>
                          <li className='list-group-item d-flex px-2 px-sm-3 px-md-4 border-0'>
                            <span className='pr-1'>3.</span>
                            <span>
                              Long-term Partnership Relationship Initiation.
                            </span>
                          </li>
                        </ul>
                        <p>
                          To make objectives realized the NetPlus team began
                          with resource mobilization activities that included
                          reaching out to family and friends to support them
                          with food donations, toiletries, shoes and clothing,
                          books and stationaries which they received.
                        </p>
                        <p>
                          A three phase mentorship series was conducted at the
                          center. The sessions covered were:
                        </p>
                        <ul className='list-group'>
                          <li className='list-group-item d-flex   px-2 px-sm-3 px-md-4 border-0'>
                            <span className='pr-1'>1.</span>
                            <span>
                              Career development: sharing experiences,
                              expectations and know how's for different careers.
                            </span>
                          </li>
                          <li className='list-group-item d-flex px-2 px-sm-3 px-md-4 border-0'>
                            <span className='pr-1'>2.</span>
                            <span>Skills and talent development.</span>
                          </li>
                          <li className='list-group-item d-flex px-2 px-sm-3 px-md-4 border-0'>
                            <span className='pr-1'>3.</span>
                            <span>
                              Health and social issues i.e. boy child and girl
                              child problems and solutions plus advice on social
                              and health matters.
                            </span>
                          </li>
                        </ul>
                        <p className='mb-0'>
                          From this, the NetPlus team identified the challenge
                          in purchasing pads for the girls and embarked on
                          mobilization of reusable sanitary pads (Arise Kenya
                          come through with the donation of 10 menstrual kits)
                          for this children which they later held a
                          sensitization and training awareness on the use of
                          pads for the young girls before the distribution of
                          the pads .This was done in September.
                        </p>
                      </div>
                      <div className='item-video'>
                        <iframe
                          title='Kawangware-initiative-project-video'
                          height='350px'
                          src='https://www.youtube.com/embed/CIsmVODl6_c'
                          frameBorder='0'
                          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen='true'
                          className='d-block w-100'
                        ></iframe>
                      </div>
                    </div>
                    <div className='modal-footer justify-content-start pb-5 px-3 px-sm-4 px-lg-5'>
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
              <div className='item item-2'>
                <div className='item-hdr'>
                  <div className='item-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title'>
                    Menstrual Health &amp; Hygiene Promotion
                  </h6>
                  <p className='item-details mb-0'>
                    To achieve its objective in menstrual health promotion a
                    mentorship programme was launched at Good Hope Secondary
                    School in Kawangware...
                  </p>
                </div>
                <div className='item-ftr'>
                  <button
                    className='button button-sm'
                    type='button'
                    data-toggle='modal'
                    data-target='#menstraul-health-and-hygiene-promotion'
                  >
                    Read Story
                  </button>
                </div>
              </div>

              {/* item 2 modal */}
              <div
                className='modal fade'
                id='menstraul-health-and-hygiene-promotion'
                data-backdrop='static'
                data-keyboard='false'
                tabIndex='-1'
                role='dialog'
                aria-labelledby='staticBackdropLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header pt-4 px-3 px-sm-4 px-lg-5'>
                      <h6 className='item-title mb-0'>
                        Menstrual Health &amp; Hygiene Promotion
                      </h6>
                    </div>
                    <div className='modal-body px-3 px-sm-4 px-lg-5'>
                      <div className='item-details mb-4'>
                        <p>
                          To achieve its objective in menstrual health promotion
                          a mentorship programme was launched at Good Hope
                          Secondary School in Kawangware where menstrual hygiene
                          training was done (with the aid of Grace Cups
                          Organization).
                        </p>
                        <p>
                          Eighteen willing girls received the menstrual cups
                          .Follow up is being done on a monthly basis.
                        </p>
                        <p className='mb-0'>
                          The three phase mentorship program was also done at
                          this school.
                        </p>
                      </div>
                      <div className='video'>
                        <iframe
                          title='menstraul-health-and-hygiene-promotion-video'
                          height='350px'
                          src='https://www.youtube.com/embed/ANwkDUTslRM'
                          frameBorder='0'
                          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen='true'
                          className='d-block w-100'
                        ></iframe>
                      </div>
                    </div>
                    <div className='modal-footer justify-content-start pb-5 px-3 px-sm-4 px-lg-5'>
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

            {/* item 3 */}
            <div className='col-md-6 col-lg-4'>
              <div className='item item-3'>
                <div className='item-hdr'>
                  <div className='item-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title'>
                    Art Performance &amp; Talent Showcase
                  </h6>
                  <p className='item-details mb-0'>
                    In line with its vision and objective to enhance talent
                    growth, Netplus organized a dance show case event to create
                    awareness on menstrual health...
                  </p>
                </div>
                <div className='item-ftr'>
                  <button
                    className='button button-sm'
                    type='button'
                    data-toggle='modal'
                    data-target='#art-performance-and-talent-showcase'
                  >
                    Read Story
                  </button>
                </div>
              </div>

              {/* item 3 modal */}
              <div
                className='modal fade'
                id='art-performance-and-talent-showcase'
                data-backdrop='static'
                data-keyboard='false'
                tabIndex='-1'
                role='dialog'
                aria-labelledby='staticBackdropLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header pt-4 px-3 px-sm-4 px-lg-5'>
                      <h6 className='item-title mb-0'>
                        Art Performance &amp; Talent Showcase
                      </h6>
                    </div>
                    <div className='modal-body px-3 px-sm-4 px-lg-5'>
                      <div className='item-details'>
                        <p>
                          In line with its vision and objective to enhance
                          talent growth, NetPlus organized a dance showcase
                          event in April 2019 to create awareness on menstrual
                          health amongst the youth with the center of focus
                          being sensitization and awareness campaign on the use
                          of menstrual cups amongst women and girls.
                        </p>
                        <p className='mb-0'>
                          The event was able to raise a total of Ksh.30, 000
                          used to purchase twenty menstrual cups.
                        </p>
                      </div>
                    </div>
                    <div className='modal-footer justify-content-start pb-5 px-3 px-sm-4 px-lg-5'>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
