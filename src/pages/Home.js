import React from 'react';
import ProgrammeBar from '../components/ProgrammeBar';
import CoFounder from '../components/CoFounder';
import WhatWeDo from '../components/WhatWeDo';
import MotiveGallery from '../components/MotiveGallery';
import DonationVolunteer from '../components/DonationVolunteer';
import SuccessStories from '../components/SuccessStories';

function Home() {
  return (
    <React.Fragment>
      <ProgrammeBar />
      <CoFounder />
      <WhatWeDo />
      <MotiveGallery />
      <DonationVolunteer />
      <SuccessStories />
    </React.Fragment>
  );
}

export default Home;
