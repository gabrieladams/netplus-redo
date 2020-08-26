import React from 'react';
import Form from '../components/Form';

import NetlifyForm from 'react-netlify-form';

function Contact() {
  return (
    <React.Fragment>
      {/* <Form /> */}
      {/* import NetlifyForm from 'react-netlify-form' */}
      <NetlifyForm name='Contact Form'>
        {({ loading, error, success }) => (
          <div>
            {loading && <div>Loading...</div>}
            {error && (
              <div>Your information was not sent. Please try again later.</div>
            )}
            {success && <div>Thank you for contacting us!</div>}
            {!loading && !success && (
              <div>
                <input type='hidden' name='form-name' value='Contact Form' />
                <input type='text' name='Name' required />
                <textarea name='Message' required />
                <button>Submit</button>
              </div>
            )}
          </div>
        )}
      </NetlifyForm>
    </React.Fragment>
  );
}

export default Contact;
