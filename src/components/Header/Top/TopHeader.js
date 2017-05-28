import React from 'react';
import CallRequest from './CallRequest';
import logo from '../images/logo.png';


class TopHeader extends React.Component {
  render() {
    return (
      <div className="mad_top_header">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <a href="/" className="logo"><img src={logo} alt="Строительная компания Каждый метр" /></a>
            </div>
            <div className="col-md-8">
              <div className="header_info_section">
                <div className="head_socials">
                  <p className="icon_location">124527, РФ, г. Москва, г. Зеленоград,<br /> к. 814, этаж 6, пом. I, ком. 10</p>
                  {/* SocialIconList */}
                </div>
                <div className="head_phone">
                  <div><p className="icon_mobile">8 (495) 37-495-38</p></div>
                  {/* <a className="mad_button" onClick="test()">Заказать звонок</a> */}
                  <br />

                  <CallRequest />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopHeader;
