/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Loader from '../../components/UIElements/Loader/Loader';
import Footer from '../../components/Footer/Footer';

class NotFound extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.number,
  };

  render() {
    return (
      <div>
        <Loader />
        <div id="wrapper" className="wrapper_container">
          <div id="content">
            <div className="page_404 paralax_image_bg6">
              <div className="page_404_section">
                <h3 className="mad_title_style1">Ой!</h3>
                <h2>404</h2>
                <h5 className="mad_separator_bottom">Извините! Но такой страницы не существует!</h5>
                <p className="mad_text_style1">Вы можете посетить:</p>
              </div>
              <svg className="separator_type_5_path" preserveAspectRatio="none" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0 L70 100 L100 0 L100 100 L0 100 Z" fill="#fff"></path>
                <path d="M0 -1 L0 0 L50 100 L100 0 L100 -1 Z" fill="rgba(255,255,255,0.01)"></path>
                <path d="M0 0 L50 100 L100 0" fill="none" stroke="" stroke-width="0"></path>
              </svg>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default NotFound;
