import React from 'react';
import FooterInfo from './FooterInfo';
import FooterSection from './FooterSection';

class FooterAdvanced extends React.Component {
  render() {
    return(
      <footer id="footer" className="footer">
        {/* Contact */}
        {/* <div id="contact2" className="mad_section paralax_image_bg5">
          <div className="container">
            <div className="mad_contact_items mad_flex_list">
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="mad_contact_item">
                    <h4 className="lnr lnr-location">Contact Us</h4>
                    <p>121 King Street, Melbourne <br />
                      Victoria 3000 Australia</p>
                    <a href="#">info@yourdomain.com</a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="mad_contact_item">
                    <h4 className="lnr lnr-clock">Opening Times</h4>
                    <p>Mon - Thu 11:30 - 22:00 clock <br />
                      Fri - Sat 11:30 - 24:00 clock </p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="mad_contact_item">
                    <h4 className="lnr lnr-calendar-full">Apointment</h4>
                    <p>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit!</p>
                    <a href="#">Phone: +61 3 8376 6284</a>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="mad_contact_item">
                    <h4 className="lnr lnr-earth">Stay Connected</h4>
                    <div className="social_icon_list">
                      <ul>
                        <li><a href="#" className="soc_icon icon-facebook" /></li>
                        <li><a href="#" className="soc_icon icon-twitter" /></li>
                        <li><a href="#" className="soc_icon icon-gplus" /></li>
                        <li><a href="#" className="soc_icon icon-tumblr" /></li>
                        <li><a href="#" className="soc_icon icon-instagram" /></li>
                        <li><a href="#" className="soc_icon icon-pinterest" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <FooterInfo/>
        {/* Footer section */}
        <FooterSection/>
      </footer>
    )
  }
}

export default FooterAdvanced;
