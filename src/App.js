import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Volunteers from './pages/Volunteers';
import PartnershipCollaboration from './pages/PartnershipCollaboration';
import Donation from './pages/Donation';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/volunteers' component={Volunteers} />
        <Route
          path='/partnership-and-collaboration'
          component={PartnershipCollaboration}
        />
        <Route path='/donation' component={Donation} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
