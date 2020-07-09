import React from 'react';
import HumanResource from '../components/HumanResource';
import JoinUs from '../components/JoinUs';
import VolunteerForm from '../components/VolunteerForm';
import Testimonials from '../components/Testimonials';

function Volunteers() {
  return (
    <React.Fragment>
      <HumanResource />
      <JoinUs />
      <VolunteerForm />
      <Testimonials />
    </React.Fragment>
  );
}

export default Volunteers;
