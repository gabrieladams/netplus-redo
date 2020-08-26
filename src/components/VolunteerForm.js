import React from 'react';

function VolunteerForm() {
  return (
    <section id='volunteer-form'>
      <div className='container-fluid px-0'>
        <div className='section-inner section'>
          <div className='form'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-lg-6 col-xl-5'>
                  <form
                    name='Volunteers-form'
                    method='post'
                    netlify
                    netlify-honeypot='bot-field'
                    hidden
                    // data-netlify='true'
                    // data-netlify-recaptcha='true'
                    className='p-5'
                  >
                    <input
                      type='hidden'
                      name='form-name'
                      value='Volunteers-form'
                    />
                    <div className='form-group mb-4'>
                      <input
                        type='text'
                        placeholder='Name'
                        name='Name'
                        className='form-control'
                      />
                    </div>
                    <div className='form-group mb-4'>
                      <input
                        type='email'
                        placeholder='Email'
                        name='Email'
                        className='form-control'
                      />
                    </div>
                    <div className='form-group mb-4'>
                      <input
                        type='text'
                        placeholder='Phone Number'
                        name='Phone Number'
                        className='form-control'
                      />
                    </div>
                    <div className='form-group mb-5'>
                      <select
                        name='Occupation'
                        id='occupation'
                        className='form-control'
                      >
                        <option value='Occupational Therapist'>
                          Occupational Therapist
                        </option>
                        <option value='Speech Therapists'>
                          Speech Therapists
                        </option>
                        <option value='Physiotherapists'>
                          Physiotherapists
                        </option>
                        <option value='Social Workers'>Social Workers</option>
                        <option value='Psychologists'>Psychologists</option>
                        <option value='Teachers'>Teachers</option>
                      </select>
                    </div>
                    <div data-netlify-recaptcha='true'></div>
                    <button type='submit' className='button button-lg w-100'>
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className='backdrop d-flex flex-wrap'>
            <div className='col-md-6 backdrop-left px-0'></div>
            <div className='col-md-6 d-none d-md-block px-0  backdrop-right '></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VolunteerForm;
