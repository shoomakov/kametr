import React from 'react';
import Carousel from './Carousel/Carousel';
import ServicesPricing from './Pricing/ServicesPricing';

class Services extends React.Component {
  render() {
    return(
      <div id="services">
        <div className="paralax_image_bg9">
          <svg className="separator_type_5_path top" preserveAspectRatio="none" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L30 100 L100 0 L100 100 L0 100 Z" fill="#fff" stroke="#fff" stroke-width={-1} />
            <path d="M0 0 L0 0 L50 100 L100 0 L100 0 Z" fill="rgba(255,255,255,0.01)" />
          </svg>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="mad_section_container">
                  <h3 className="mad_title_style1">Все услуги</h3>
                  <h2 className="mad_separator" style={{color:'#fff'}}>Нашей компании</h2>
                </div>
                <Carousel/>
              </div>
            </div>
          </div>
          <svg className="separator_type_5_path" preserveAspectRatio="none" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L70 100 L100 0 L100 100 L0 100 Z" fill="#fff" stroke="#fff" stroke-width={-1} />
            <path d="M0 -1 L0 0 L50 100 L100 0 L100 -1 Z" fill="rgba(255,255,255,0.01)" />
          </svg>
        </div>
        <ServicesPricing/>
      </div>
    )
  }
}

export default Services;
