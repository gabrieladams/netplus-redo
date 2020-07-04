import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Hero() {
  const location = useLocation();
  const route = location.pathname;

  const heroHdr =
    route === '/' ? (
      <React.Fragment>
        We Connect, Inspire &amp; Grow Talent Amongst The Youth.
      </React.Fragment>
    ) : route === '/about' ? (
      'About the agency'
    ) : route === '/volunteers' ? (
      'Join us today'
    ) : route === '/partnership-and-collaboration' ? (
      'Partner with us'
    ) : route === '/donation' ? (
      'Make a donation'
    ) : route === '/contact' ? (
      'Get in touch'
    ) : (
      ''
    );

  return (
    <div
      style={route === '/' ? { height: '100vh' } : { height: '50vh' }}
      id='hero'
    >
      <div className='hero-overlay h-100'>
        <div className='container h-100'>
          <div className='hero-content h-100 d-flex align-items-center'>
            <div className='hero-content-inner'>
              <div className='row'>
                <div className='col-md-10 col-lg-8'>
                  <h1
                    style={(function () {
                      const viewPortWidth = window.innerWidth;
                      if (route === '/') {
                        if (viewPortWidth >= 576) {
                          return { fontSize: '48px' };
                        } else {
                          return { fontSize: '36px' };
                        }
                      } else {
                        return { fontSize: '36px' };
                      }
                    })()}
                    className='hero-hdr'
                  >
                    {heroHdr}
                  </h1>
                  <p className='hero-subtxt d-flex'>
                    <div
                      className={
                        route === '/' ? 'col-md-9 px-0' : 'col-md-11 px-0'
                      }
                    >
                      We are a team of young people passionate about
                      transformation of the lives of fellow young people by
                      providing opportunities of growth.
                    </div>
                  </p>
                  <Link
                    style={
                      route === '/'
                        ? { display: 'inline-block' }
                        : { display: 'none' }
                    }
                    className='button button-lg'
                    to='/volunteers'
                  >
                    Join us today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function setHeroHdrFs() {
//   const viewPortWidth = window.innerWidth;
//   if (route === '/') {
//     if (viewPortWidth > 768) {
//       return { fontSize: '48px' };
//     } else {
//       return { fontSize: '36px' };
//     }
//   }
// }

// style={
//   route === '/'
//     ? { fontSize: '6vmin' }
//     : { fontSize: '5vmin' }
// }

export default Hero;
