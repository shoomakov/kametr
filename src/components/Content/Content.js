import React from 'react';
import About from './About/About';
import Testimonials from './Testimonials/Testimonials';
import Services from './Services/Services';
import Gallery from './Gallery/Gallery';
import Team from './Team/Team';
import OffersNews from './OffersNews/OffersNews';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

class Content extends React.Component {
  render() {
    return(
      <div id="content">
        <About/>
        <Testimonials/>
        <Services/>
        <Gallery/>
        {/* Team */}
        <OffersNews/>
        <Blog/>
        <Contact/>
      </div>
    )
  }
}

export default Content;
