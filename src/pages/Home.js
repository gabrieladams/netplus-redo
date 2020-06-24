import React from 'react';
import CoFounder from '../components/CoFounder';
import WhatWeDo from '../components/WhatWeDo';
import Motive from '../components/Motive';
import DonationVolunteer from '../components/DonationVolunteer';
import SuccessStories from '../components/SuccessStories';

function Home() {
  return (
    <React.Fragment>
      <CoFounder />
      <WhatWeDo />
      <Motive />
      <DonationVolunteer />
      <SuccessStories />
    </React.Fragment>
  );
}

export default Home;
