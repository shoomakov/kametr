import React from 'react';

class FooterInfo extends React.Component {
  render() {
    return(
      <div id="contact2" className="mad_section paralax_image_bg5">
        <div className="container">
          <div className="mad_contact_items mad_flex_list">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="mad_contact_item" itemScope itemType="http://schema.org/Organization">
                  <h4 className="lnr lnr-location">Найти нас</h4>
                  <span itemProp="name">Каждый Метр</span>
                  <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                    <p><span itemProp="addressLocality">г. Москва, г. Зеленоград</span>,<br />
                      <span itemProp="streetAddress">к. 814</span>, этаж 6, пом. I, ком. 10</p>
                      <span itemProp="telephone" style={{ display: 'none' }}>8 (495) 37-495-38</span>
                    <a href="#"><span itemProp="email">info@kametr.ru</span></a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="mad_contact_item">
                  <h4 className="lnr lnr-clock">Время работы</h4>
                  <p>Пн - Пт 9:00 - 18:00</p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="mad_contact_item">
                  <h4 className="lnr lnr-calendar-full">Назначить встречу</h4>
                  <p>В удобное для Вас время, <br /> можете посектить наш офис</p>
                  <a href="#">Тел: 8 (495) 37-495-38</a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="mad_contact_item">
                  <h4 className="lnr lnr-earth">Присоединяйтесь</h4>
                  <div className="social_icon_list">
                    <ul>
                      <li><a href="#" className="soc_icon icon-facebook" /></li>
                      <li><a href="#" className="soc_icon icon-twitter" /></li>
                      <li><a href="#" className="soc_icon icon-gplus" /></li>
                      {/* <li><a href="#" className="soc_icon icon-tumblr" /></li> */}
                      <li><a href="#" className="soc_icon icon-instagram" /></li>
                      {/* <li><a href="#" className="soc_icon icon-pinterest" /></li> */}
                    </ul>
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

export default FooterInfo;
