import React from 'react';
import s from './RevSlider.css';

class RevSlider extends React.Component {
  render() {
    return(
      <div className="tp-banner-container">
        {/* START REVOLUTION SLIDER 5.0 */}
        <div className="rev_slider_wrapper">
          <div id="slider1" className="rev_slider">
            <ul>
              <li data-transition="zoomout"
                  data-slotamount="default"
                  data-easein="Power4.easeInOut"
                  data-easeout="Power4.easeInOut"
                  data-masterspeed={2000}
                  data-fstransition="fade"
                  data-fsmasterspeed={1500}>
                {/* MAIN IMAGE */}
                <img src="images/bg1_1920x965.jpg" alt />
                <div className="tp-caption text1 align_center fadeout"
                     data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                     data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                     data-start={500} data-x="center"
                     data-y="top">


                  <h2>Ремонт квартир под ключ в Москве</h2>
                  <h5>- и Московской области -</h5>
                  <a href="/appointment" className="mad_button">Договорится о встрече</a>
                </div>
              </li>
              {/* li /li */}

            </ul>
            <svg className="separator_type_5_path"
                 preserveAspectRatio="none"
                 viewBox="0 0 100 100"
                 version="1.1"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0 L70 100 L100.1 0 L100.1 100 L0 100 Z" fill="#fff" stroke="#fff" stroke-width={-1} />
              <path d="M0 0 L0 0 L50 100 L100 0 L100 0 Z" fill="transparent" />
            </svg>
          </div>{/* END REVOLUTION SLIDER */}
        </div>{/* END OF SLIDER WRAPPER */}
      </div>
    )
  }
}

export default RevSlider;
