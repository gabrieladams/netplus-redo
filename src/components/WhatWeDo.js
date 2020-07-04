import React from 'react';

function WhatWeDo() {
  return (
    <section id='what-we-do' className='section'>
      <div className='container'>
        <div className='section-hdr text-center'>
          <div className='row justify-content-md-center'>
            <div className='col-md-8 col-lg-6'>
              <h2 className='section-title'>What we do</h2>
              <p className='section-subtxt mb-0'>
                NetPlus engages in a number of activities that help it attain
                its goals and objectives.
              </p>
            </div>
          </div>
        </div>
        <div className='section-body'>
          <div className='row'>
            {/* col 1 / row 1 */}
            <div className='col-lg-4'>
              <div className='row'>
                {/* item 1 */}
                <div className='col-md-6 col-lg-12'>
                  <div className='item item-1'>
                    <div className='item-hdr'>
                      <div className='item-img'></div>
                    </div>
                    <div className='item-body'>
                      <h6 className='item-title'>Events</h6>
                      <p className='item-details mb-0'>
                        We regularly hold events so as to provide a platform for
                        people to showcase their skills and talent and also
                        socialize and connect with new faces. The Money raised
                        from the events is used to fund our community projects
                        and other activities.
                      </p>
                    </div>
                    {/* <div className='item-ftr'>
                  <Link className='item-link button button-sm' to='/'>
                    Learn More
                  </Link>
                </div> */}
                  </div>
                </div>

                {/* item 4 */}
                <div className='col-md-6 col-lg-12'>
                  <div className='item item-4'>
                    <div className='item-hdr'>
                      <div className='item-img'></div>
                    </div>
                    <div className='item-body'>
                      <h6 className='item-title'>Community Services</h6>
                      <p className='item-details mb-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos sequi sunt amet cupiditate at fuga aspernatur rerum
                        voluptates, saepe cumque!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* col 2 / row 2 */}
            <div className='col-lg-4'>
              <div className='row'>
                {/* item 2 */}
                <div className='col-md-6 col-lg-12'>
                  <div className='item item-2'>
                    <div className='item-hdr'>
                      <div className='item-img'></div>
                    </div>
                    <div className='item-body'>
                      <h6 className='item-title'>Community Projects</h6>
                      <p className='item-details mb-0'>
                        we believe in giving back to the community as a way of
                        showing gratitude for all good things we got from the
                        communitiy. To show our gratitude we carry out community
                        projects. We go to the less fortunate communities and
                        bond with the people, give words of encouragement and
                        hope and share what we have with the people. Its always
                        a wonderful experience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* item 5 */}
                <div className='col-md-6 col-lg-12'>
                  <div className='item item-5'>
                    <div className='item-hdr'>
                      <div className='item-img'></div>
                    </div>
                    <div className='item-body'>
                      <h6 className='item-title'>
                        Talent Search &amp; Nurturing
                      </h6>
                      <p className='item-details mb-0'>
                        Aside from providing a platfrorm for people to showcase
                        their skills and talent, we also search for and nurture
                        talents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* col 3 */}
            <div className='col-lg-4'>
              <div className='row'>
                {/* item 3 */}
                <div className='col-md-6 col-lg-12'>
                  <div className='item item-3'>
                    <div className='item-hdr'>
                      <div className='item-img'></div>
                    </div>
                    <div className='item-body'>
                      <h6 className='item-title'>Mentorship Programmes</h6>
                      <p className='item-details mb-0'>
                        Mentorship Programmes are held mostly with the youth so
                        as to provide guidance on social, physical, economical
                        and spiritual aspects of life and also provide an
                        opportunity for people to share their inspiring life
                        experiences.
                      </p>
                    </div>
                  </div>
                </div>

                {/* item 6 */}
                <div className='col-md-6 col-lg-12'>
                  <div className='item item-6'>
                    <div className='item-hdr'>
                      <div className='item-img'></div>
                    </div>
                    <div className='item-body'>
                      <h6 className='item-title'>
                        Community Capacity Building &amp; Empowerment
                      </h6>
                      <p className='item-details mb-0'>
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
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
