/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Home.css';
import Loader from '../../components/UIElements/Loader/Loader';
import Header from '../../components/Header/Header';
// import RevSlider from '../../components/Revolution/RevSlider';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';

class Home extends React.Component {
  static propTypes = {
    // news: PropTypes.arrayOf(PropTypes.shape({
    //   title: PropTypes.string.isRequired,
    //   link: PropTypes.string.isRequired,
    //   contentSnippet: PropTypes.string,
    // })).isRequired,
    title: PropTypes.string,

  };

  render() {
    return (
      <div>
        <Loader />
        <div id="wrapper" className="wrapper_container">
          {/* - - - - - - - - - - - - Mobile Menu - - - - - - - - - - - - - - */}
          <nav id="mobile-advanced" className="mobile-advanced" />
          {/* - - - - - - - - - - - / Mobile Menu - - - - - - - - - - - - - */}
          <Header />
          {/* <RevSlider/> */}
          <div className="page_coming_soon paralax_image_bg6">
            <div className="container">
              <div className="row">
                <div className="col-sm-12" style={{ top: '11vw' }}>
                  <div className="home_title">
                    <h1>Ремонт квартир под ключ в Москве</h1>
                    <h3 className="mad_title_style1">- и Московской области -</h3>
                    <div style={{ 'margin-top': '1vw' }}>
                      <a href="/appointment" className="mad_button">Договорится о встрече</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg className="separator_type_5_path" preserveAspectRatio="none" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0 L70 100 L100 0 L100 100 L0 100 Z" fill="#fff" />
              <path d="M0 -1 L0 0 L50 100 L100 0 L100 -1 Z" fill="rgba(255,255,255,0.01)" />
              <path d="M0 0 L50 100 L100 0" fill="none" stroke="" strokWidth="0" />
            </svg>
          </div>
          <Content />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
