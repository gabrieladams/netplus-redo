import React from 'react';

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
                believe fully in the aspirations of the agency and put their
                minds and efforts together to come up with transformational
                ideas that better the community.
              </p>
            </div>
          </div>
        </div>
        <div className='section-body'>
          <div className='row justify-content-sm-center'>
            {/* item 1 */}
            <div className='col-sm-9 col-md-6 col-lg-4'>
              <div className='item member member-1'>
                <div className='item-hdr'>
                  <div className='item-img member-img member-1'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title member-name'>Cheryl Okumu</h6>
                  <h6 className='item-details member-position mb-0'>
                    Co-founder &amp; C.E.O
                  </h6>
                </div>
                <div className='item-ftr'>
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

              {/* item 1 modal */}
              <div
                className='modal fade'
                id='Cheryl-Okumu-profile'
                data-backdrop='static'
                data-keyboard='false'
                tabindex='-1'
                role='dialog'
                aria-labelledby='staticBackdropLabel'
                aria-hidden='true'>
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header pt-4 px-3 px-sm-4 px-lg-5'>
                      <div className='row justify-content-center mx-0'>
                        <div className='col-6 col-md-4 px-0'>
                          <div className='item-img member-img member-1-img mb-4'></div>
                          <h6 className='item-title member-name text-center'>
                            Cheryl Okumu
                          </h6>
                          <h6 className='item-details member-position text-center mb-0'>
                            Co-founder &amp; C.E.O
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className='modal-body px-3 px-sm-4 px-lg-5'>
                      <div className='member-profile'>
                        <p>
                          she oversees the day to day running of the
                          organization.
                        </p>
                        <p>
                          She holds a certificate course in psychology from Dima
                          College, 5th year medical student at the university of
                          Nairobi. She is a business owner and entrepreneur.
                        </p>
                        <p>
                          She takes a vision and makes it a reality through
                          sound strategy development. She intuitively sees
                          threads of opportunity that wind through an
                          organization, brings them together into a coherent
                          whole, helps others extend their thinking, and drives
                          humanitarian business advantage.
                        </p>
                        <p>
                          She is an inspirational leader who tells stories that
                          inspire action while at the same time grounded in
                          humanitarian information that levers the society. She
                          is respected as a credible voice in decision making,
                          finding strategic humanitarian and financing partners,
                          and establishing governance boundaries.
                        </p>
                        <p className='mb-0'>
                          She is distinguished by her ability to identify,
                          leverage, and develop talent. She has a contagious
                          enthusiasm and passionate belief in people that
                          inspires them to become prouder, stronger, and more
                          valuable contributors in their organizations and
                          society.
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

            {/* item 2 */}
            <div className='col-sm-9 col-md-6 col-lg-4'>
              <div className='item member member-2'>
                <div className='item-hdr'>
                  <div className='item-img member-img member-1'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title member-name'>Margaret Lidoro</h6>
                  <h6 className='item-details member-position mb-0'>
                    Co-founder
                  </h6>
                </div>
                <div className='item-ftr'>
                  <button
                    className='button button-sm'
                    type='button'
                    data-toggle='modal'
                    data-target='#Margaret-Lidoro-profile'
                  >
                    Read Profile
                  </button>
                </div>
              </div>

              {/* item 2 modal */}
              <div
                className='modal fade'
                id='Margaret-Lidoro-profile'
                data-backdrop='static'
                data-keyboard='false'
                tabindex='-1'
                role='dialog'
                aria-labelledby='staticBackdropLabel'
                aria-hidden='true'>
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header pt-4 px-3 px-sm-4 px-lg-5'>
                      <div className='row justify-content-center mx-0'>
                        <div className='col-6 col-md-4 px-0'>
                          <div className='item-img member-img member-2-img mb-4'></div>
                          <h6 className='item-title member-name text-center'>
                          Margaret Lidoro
                          </h6>
                          <h6 className='item-details member-position text-center mb-0'>
                            Co-founder
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className='modal-body px-3 px-sm-4 px-lg-5'>
                      <div className='member-profile'>
                        <p>
                          She is equipped with a bachelor of law degree from university of Nairobi and a post graduate diploma in advocates training. She is interested in gaining experience as well as putting into practice the skills that she has gained so far in different aspects of humanitarian advocacy.
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

            {/* item 3 */}
            <div className='col-sm-9 col-md-6 col-lg-4'>
              <div className='item member member-3'>
                <div className='item-hdr'>
                  <div className='item-img member-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title member-name'>
                    Wambida Max Ochieng
                  </h6>
                  <h6 className='item-details member-position mb-0'>
                    Logistics &amp; Operations
                  </h6>
                </div>
                <div className='item-ftr'>
                  <button
                    className='button button-sm'
                    type='button'
                    data-toggle='modal'
                    data-target='#Wambida-profile'
                  >
                    Read Profile
                  </button>
                </div>
              </div>

              {/* item 3 modal */}
              <div
                className='modal fade'
                id='Wambida-profile'
                data-backdrop='static'
                data-keyboard='false'
                tabindex='-1'
                role='dialog'
                aria-labelledby='staticBackdropLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header pt-4 pt-4 px-3 px-sm-4 px-lg-5'>
                      <div className='row justify-content-center mx-0'>
                        <div className='col-6 col-md-4 px-0'>
                          <div className='item-img member-img member-3-img mb-4'></div>
                          <h6 className='item-title member-name text-center'>
                            Wambida Max Ochieng
                          </h6>
                          <h6 className='item-details member-position text-center mb-0'>
                            Logistics &amp; Operations
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className='modal-body px-3 px-sm-4 px-lg-5'>
                      <div className='member-profile'>
                        <p>
                          Wambida is a naturally talented and versatile leader,
                          his passion for community development and general
                          positive social impact is evident through his works in
                          this space.
                        </p>
                        <p>
                          Together with others, he is a proud pioneer of a young
                          vibrant social change enthusiasts’ community in Nyeri
                          through CBOs Impact Ent and Goodguys Globe (now known
                          as Turning Trash into Treasure Program).
                        </p>
                        <p>
                          He has worked with Impact Ent as a Programs
                          Coordinator and partnered with various Institutions
                          such as Thunguma (CYEC) Children’s Home and New life
                          Home orphanage for infants in Nyeri.
                        </p>
                        <p>
                          He currently is a delighted member of the Netplus crew
                          serving in the Logistics and Operations Department.
                        </p>
                        <p className='mb-0'>
                          In his spare time Wambida enjoys adventures trips
                          while plucking some tunes on the guitar.
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

            {/* item 4 */}
            <div className='col-sm-9 col-md-6 col-lg-4'>
              <div className='item member member-4'>
                <div className='item-hdr'>
                  <div className='item-img member-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title member-name'>B. Ayuma Maina</h6>
                  <h6 className='item-details member-position mb-0'>
                    Social Media &amp; PR
                  </h6>
                </div>
                <div className='item-ftr'>
                  <button
                    className='button button-sm'
                    type='button'
                    data-toggle='modal'
                    data-target='#Ayuma-Maina-profile'
                  >
                    Read Profile
                  </button>
                </div>
              </div>

              {/* item 4 modal */}
              <div
                className='modal fade'
                id='Ayuma-Maina-profile'
                data-backdrop='static'
                data-keyboard='false'
                tabindex='-1'
                role='dialog'
                aria-labelledby='staticBackdropLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header pt-4 px-3 px-sm-4 px-lg-5'>
                      <div className='row justify-content-center mx-0'>
                        <div className='col-6 col-md-4 px-0'>
                          <div className='item-img member-img member-4-img mb-4'></div>
                          <h6 className='item-title member-name text-center'>
                            B. Ayuma Maina
                          </h6>
                          <h6 className='item-details member-position text-center mb-0'>
                            Social Media &amp; PR
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className='modal-body px-3 px-sm-4 px-lg-5'>
                      <div className='member-profile'>
                        <p>
                          Meet Ayuma Maina a fun, loving, and extroverted soul
                          with a passion to make efficient the efforts of every
                          day people, in meeting their everyday needs.
                        </p>
                        <p>
                          She is currently working at an NGO and soon to be a
                          graduate of Biosystems Engineering.
                        </p>
                        <p>
                          Netplus for her is the embodiment of a platform for
                          youth to "See Beyond".
                        </p>
                        <p className='mb-0'>
                          When a young person can see beyond what society has
                          set as the status quo, there is no stopping the
                          energy, creativity and momentum created by the
                          exposure of one young soul. Its ripple effect leads to
                          the transformation of a whole generation for a
                          brighter future.
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

            {/* item 5 */}
            <div className='col-sm-9 col-md-6 col-lg-4'>
              <div className='item member member-5'>
                <div className='item-hdr'>
                  <div className='item-img member-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title member-name'>Jijo </h6>
                  <h6 className='item-details member-position mb-0'>
                    Graphic &amp; Product Designer
                  </h6>
                </div>
                <div className='item-ftr'>
                  <button
                    className='button button-sm'
                    type='button'
                    data-toggle='modal'
                    data-target='#Jijo-profile'
                  >
                    Read Profile
                  </button>
                </div>
              </div>

              {/* item 5 modal */}
              <div
                className='modal fade'
                id='Jijo-profile'
                data-backdrop='static'
                data-keyboard='false'
                tabindex='-1'
                role='dialog'
                aria-labelledby='staticBackdropLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header pt-4 px-3 px-sm-4 px-lg-5'>
                      <div className='row justify-content-center mx-0'>
                        <div className='col-6 col-md-4 px-0'>
                          <div className='item-img member-img member-5-img mb-4'></div>
                          <h6 className='item-title member-name text-center'>
                            Jijo
                          </h6>
                          <h6 className='item-details member-position text-center mb-0'>
                            Graphic &amp; Product Designer
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className='modal-body px-3 px-sm-4 px-lg-5'>
                      <div className='member-profile'>
                        <p>
                          Jijo is a graphic and product designer at
                          Designtraffickers LTD working with Netplus on
                          designing and making Merchandise.
                        </p>
                        <p>
                          I am a strong believer in the wellness of children and
                          helping them make a step towards their future, outside
                          of work.
                        </p>
                        <p className='mb-0'>
                          I enjoy a good Netflix binge or staying indoors and
                          making DIY products.
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

            {/* item 6 */}
            <div className='col-sm-9 col-md-6 col-lg-4'>
              <div className='item member member-6'>
                <div className='item-hdr'>
                  <div className='item-img member-img member-6-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title member-name'>Joan Ongoro</h6>
                  <h6 className='item-details member-position mb-0'>
                    Archivist
                  </h6>
                </div>
                <div className='item-ftr'>
                  <button
                    className='button button-sm'
                    type='button'
                    data-toggle='modal'
                    data-target='#Joan-Ongoro-profile'
                  >
                    Read Profile
                  </button>
                </div>
              </div>

              {/* item 6 modal */}
              <div
                className='modal fade'
                id='Joan-Ongoro-profile'
                data-backdrop='static'
                data-keyboard='false'
                tabindex='-1'
                role='dialog'
                aria-labelledby='staticBackdropLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header pt-4 px-3 px-sm-4 px-lg-5'>
                      <div className='row justify-content-center mx-0'>
                        <div className='col-6 col-md-4 px-0'>
                          <div className='item-img member-img member-6-img mb-4'></div>
                          <h6 className='item-title member-name text-center'>
                            Joan Ongoro
                          </h6>
                          <h6 className='item-details member-position text-center mb-0'>
                            Archivist
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className='modal-body px-3 px-sm-4 px-lg-5'>
                      <div className='member-profile'>
                        <p>Joanne Ongoro is a graduate civil engineer.</p>
                        <p>
                          She is the record keeper/archivist for Net Plus Kenya.
                        </p>
                        <p className='mb-0'>
                          She is passionate about serving the society to help
                          make it a better place, especially for the less
                          fortunate.
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

            {/* item 7 */}
            <div className='col-sm-9 col-md-6 col-lg-4'>
              <div className='item member member-7'>
                <div className='item-hdr'>
                  <div className='item-img member-img member-7-img'></div>
                </div>
                <div className='item-body'>
                  <h6 className='item-title member-name'>Mercy Waikumi</h6>
                  <h6 className='item-details member-position mb-0'>
                    Member
                  </h6>
                </div>
                <div className='item-ftr'>
                  <button
                    className='button button-sm'
                    type='button'
                    data-toggle='modal'
                    data-target='#Mercy-Waikumu-profile'
                  >
                    Read Profile
                  </button>
                </div>
              </div>

              {/* item 7 modal */}
              <div
                className='modal fade'
                id='Mercy-Waikumu-profile'
                data-backdrop='static'
                data-keyboard='false'
                tabindex='-1'
                role='dialog'
                aria-labelledby='staticBackdropLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-lg modal-dialog-centered'>
                  <div className='modal-content'>
                    <div className='modal-header pt-4 px-3 px-sm-4 px-lg-5'>
                      <div className='row justify-content-center mx-0'>
                        <div className='col-6 col-md-4 px-0'>
                          <div className='item-img member-img member-7-img mb-4'></div>
                          <h6 className='item-title member-name text-center'>
                          Mercy Waikumi
                          </h6>
                          <h6 className='item-details member-position text-center mb-0'>
                            Member
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className='modal-body px-3 px-sm-4 px-lg-5'>
                      <div className='member-profile'>
                        <p>The reason i joined Netplus was that I loved what it was about, providing opportunities to people who would otherwise not have them. It provided a platform to reach out to various kinds of people such as nurturing people's talents or providing to the less fortunate.</p> 
                        <p className='mb-0'>My favourite hobby is traveling to different places.</p>
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

export default Team;
