import React, { Component } from 'react';
import logo from '../images/logo.png';


class TopHeader extends React.Component {
    render() {
      return(
        <div className="mad_top_header">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <a href="/" className="logo"><img src={logo} alt="Строительная компания Каждый метр" /></a>
              </div>
              <div className="col-md-8">
                <div className="header_info_section">
                  <div className="head_socials">
                    <p className="icon_location">124527, РФ, г. Москва, г. Зеленоград,<br/> к. 814, этаж 6, пом. I, ком. 10</p>
                    {/* SocialIconList */}
                  </div>
                  <div className="head_phone">
                    <div><p className="icon_mobile">8 (495) 37-495-38</p></div>
                    {/* <a className="mad_button" onClick="test()">Заказать звонок</a> */}
                    <br/>

                    <div className="morph-button morph-button-modal morph-button-modal-2 morph-button-fixed">
                      <button type="button">Заказать звонок</button>
                      <div className="morph-content">
                        <div>
                          <div className="content-style-form content-style-form-1">
                            <span className="icon icon-close">Close the dialog</span>
                            <h4 style={{'margin-top':'65px'}}>Введите Ваши:</h4>
                            <form>
                              {/* <label>Имя</label> */}
                              {/* <label>Телефон</label> */}
                              <p style={{width:'100%'}}><input type="name" placeholder="Имя"/></p>
                              <p style={{width:'100%'}}><input type="email" placeholder="Телефон"/></p>
                              <p style={{width:'100%'}}><button className="mad_button size2 style2">Подтвердить</button></p>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }


}

export default TopHeader;
