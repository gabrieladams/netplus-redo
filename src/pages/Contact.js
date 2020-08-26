import React from 'react';
import Form from '../components/Form';

import NetlifyForm from 'react-netlify-form';

function Contact() {
  return (
    <React.Fragment>
      {/* <Form /> */}
      <NetlifyForm
        name='Form With Recaptcha'
        recaptcha={{
          sitekey: 'my_recaptcha_site_key',
          size: 'normal',
        }}
      >
        {({ loading, error, recaptchaError, success, recaptcha }) => (
          <div>
            {loading && <div>Loading...</div>}
            {error && (
              <div>Your information was not sent. Please try again later.</div>
            )}
            {recaptchaError && (
              <div>
                Recaptcha did not match. Please make sure the box is checked.
              </div>
            )}
            {success && <div>Thank you for contacting us!</div>}
            {!loading && !success && (
              <div>
                <input type='text' name='Name' required />
                <textarea name='Message' required />
                {recaptcha}
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
