import React from 'react';

class FooterSection extends React.Component {
  render() {
    return(
      <div className="mad_top_footer">
        <div className="v_align_center_blocks">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="mad_nav_list">
                  <ul>
                    <li><a href="/">Главная</a></li>
                    <li><a href="/about">О Компании</a></li>
                    <li><a href="/uslugi">Услуги</a></li>
                    <li><a href="/contact">Контакты</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <a href="#" className="mad_logo_container">
                  <img src="images/logo_bel_ser.png" alt />
                </a>
              </div>
              <div className="col-sm-4">
                <div className="align_right">
                  <span>2017 © ООО "Каждый Метр"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterSection;
