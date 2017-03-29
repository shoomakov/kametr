import React from 'react';
import image1 from './images/magazine.png';

class OffersNews extends React.Component {
  render() {
    return (
      <div id="news">
        <div className="mad_section paralax_image_bg4">
          <div className="container">
            <div className="row">
              <div className="col-lg-5" />
              <div className="col-lg-7">
                <div className="mad_section_container mad_item_offset">
                  <h3 className="mad_title_style1">Акции</h3>
                  <h2>Скидки и предложения</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="full_width_bg_pattern bg_pattern_red">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <figure><img src={image1} alt="" /></figure>
                  {/* images/magazine_620x480.png */}
                </div>
                <div className="col-md-7">
                  <div className="mad_section_container">
                    <h3 className="mad_title_style1">Чтобы узнать о последних акциях и предложениях</h3>
                    <a href="/akcii-i-predlozheniya" className="mad_button style2">Перейти сюда</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg className="separator_type_5_path" preserveAspectRatio="none" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L70 100 L100 0 L100 100 L0 100 Z" fill="#fff" stroke="#fff" strokeWidth={-1} />
            <path d="M0 -1 L0 0 L50 100 L100 0 L100 -1 Z" fill="rgba(255,255,255,0.01)" />
          </svg>
        </div>
      </div>
    );
  }
}

export default OffersNews;
