import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          NETPLUS
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home
                {/* <span className='sr-only'>(current)</span> */}
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/volunteers'>
                Volunteers
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/partnership-and-collaboration'>
                Partnership &amp; Collaboration
              </Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/donation'>
                Donation
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link className='nav-link' to='/gallery'>
                Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/blog'>
                Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
