import React from 'react';
import image1 from './images/400x400/osteklenie.jpg';
import image2 from './images/400x400/vent.jpg';
import image3 from './images/400x400/konder.jpg';
import image4 from './images/400x400/npotolki.jpg';
import image5 from './images/400x400/otdelka.jpg';
import image6 from './images/400x400/sanuzel.jpg';
import image7 from './images/400x400/mebel.jpg';
import image8 from './images/400x400/electro.jpg';
import image9 from './images/400x400/main.jpg';

class Carousel extends React.Component {
  render() {
    return (
      <div className="carousel_type_2">
        <div className="owl-carousel" data-max-items={3}>
          <div>
            {/* Carousel Item */}
            <div className="mad_item_hover">
              <figure>
                <img src={image1} alt="" />
              </figure>
              <div className="mad_item_desc with_bg_img">
                <h5>Остекление</h5>
              </div>
              <a href="/osteklenie-pod-klyuch" className="item_overlay">
                <div className="text_holder">
                  <p>Остекление квартир и загородных домов</p>
                </div>
              </a>
            </div>
            {/* /Carousel Item */}
          </div>
          <div>
            {/* Carousel Item */}
            <div className="mad_item_hover">
              <figure>
                <img src={image2} alt="" />
              </figure>
              <div className="mad_item_desc with_bg_img">
                <h5>Работы по вентиляции</h5>
              </div>
              <a href="/raboty-po-montazhu-ventilyacii" className="item_overlay">
                <div className="text_holder">
                  <p>Работы по вентиляции</p>
                </div>
              </a>
            </div>
            {/* /Carousel Item */}
          </div>
          <div>
            {/* Carousel Item */}
            <div className="mad_item_hover">
              <figure>
                <img src={image3} alt="" />
              </figure>
              <div className="mad_item_desc with_bg_img">
                <h5>Работы по кондиционированию</h5>
              </div>
              <a href="/montazh-kondicionirovaniya" className="item_overlay">
                <div className="text_holder">
                  <p>Работы по кондиционированию</p>
                </div>
              </a>
            </div>
            {/* /Carousel Item */}
          </div>
          <div>
            {/* Carousel Item */}
            <div className="mad_item_hover">
              <figure>
                <img src={image4} alt="" />
              </figure>
              <div className="mad_item_desc with_bg_img">
                <h5>Натяжные потолки</h5>
              </div>
              <a href="/montazh-natyazhnyh-potolkov" className="item_overlay">
                <div className="text_holder">
                  <p>Натяжные потолки</p>
                </div>
              </a>
            </div>
            {/* /Carousel Item */}
          </div>
          <div>
            {/* Carousel Item */}
            <div className="mad_item_hover">
              <figure>
                <img src={image5} alt="" />
              </figure>
              <div className="mad_item_desc with_bg_img">
                <h5>Ремонтно-отделоные работы</h5>
              </div>
              <a href="/remontno-otdelochnye-raboty" className="item_overlay">
                <div className="text_holder">
                  <p>Ремонтно-отделоные работы</p>
                </div>
              </a>
            </div>
            {/* /Carousel Item */}
          </div>
          <div>
            {/* Carousel Item */}
            <div className="mad_item_hover">
              <figure>
                <img src={image6} alt="" />
              </figure>
              <div className="mad_item_desc with_bg_img">
                <h5>Ремонт санузлов</h5>
              </div>
              <a href="/remont-sanuzla-pod-klyuch" className="item_overlay">
                <div className="text_holder">
                  <p>Ремонт санузлов</p>
                </div>
              </a>
            </div>
            {/* /Carousel Item */}
          </div>
          <div>
            {/* Carousel Item */}
            <div className="mad_item_hover">
              <figure>
                <img src={image7} alt="" />
              </figure>
              <div className="mad_item_desc with_bg_img">
                <h5>Производство корпусной мебели</h5>
              </div>
              <a href="/proizvodstvo-korpusnoj-mebeli" className="item_overlay">
                <div className="text_holder">
                  <p>Производство корпусной мебели</p>
                </div>
              </a>
            </div>
            {/* /Carousel Item */}
          </div>
          <div>
            {/* Carousel Item */}
            <div className="mad_item_hover">
              <figure>
                <img src={image8} alt="" />
              </figure>
              <div className="mad_item_desc with_bg_img">
                <h5>Электромонтаж</h5>
              </div>
              <a href="/ehlektromontazh-pod-klyuch" className="item_overlay">
                <div className="text_holder">
                  <p>Электромонтаж</p>
                </div>
              </a>
            </div>
            {/* /Carousel Item */}
          </div>
          <div>
            {/* Carousel Item */}
            <div className="mad_item_hover">
              <figure>
                <img src={image9} alt="" />
              </figure>
              <div className="mad_item_desc with_bg_img">
                <h5>Общестроительные работы</h5>
              </div>
              <a href="/obshchestroitelnye-raboty" className="item_overlay">
                <div className="text_holder">
                  <p>Общестроительные работы</p>
                </div>
              </a>
            </div>
            {/* /Carousel Item */}
          </div>
          {/* /Slide */}
        </div>
        <div className="align_center">
          <a href="/uslugi" className="mad_button style2">К разделу услуг</a>
        </div>
      </div>
    );
  }
}

export default Carousel;
