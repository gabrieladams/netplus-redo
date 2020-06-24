import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Hero from './Hero';

function Header() {
  return (
    <header
      style={
        useLocation().pathname === '/'
          ? { height: '100vh' }
          : { height: '60vh' }
      }
      id='main-hdr'
    >
      <NavBar />
      <Hero />
    </header>
  );
}

export default Header;
