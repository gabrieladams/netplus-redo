import React from 'react';

function Form() {
  return (
    <section id='contact' className='section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7'>
            <form>
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
          {/* <div className='col-md-5 pl-4'>
            <p>Netplus Project Coordinator: 0710253321</p>
            <p>Email: netplus254@gmail.com</p>
            <p>Humanitarian Educational Centre Admin: 0723770871</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Form;
