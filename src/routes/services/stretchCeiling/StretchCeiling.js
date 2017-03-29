import React, { PropTypes } from 'react';
import Loader from '../../../components/UIElements/Loader/Loader';
import MobileAdvanced from '../../../components/UIElements/Mobile/MobileAdvanced';
import Header from '../../../components/Header/Header';
import FooterAdvanced from '../../../components/Footer/FooterAdvanced';
// import TableOne from './PriceTables/TableOne';
// import TableTwo from './PriceTables/TableTwo';
import CallToAction from './CallToAction/CallToAction';


class StretchCeiling extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.number,
  };

  render() {
    return (
      <div>
        <Loader/>
        <div id="wrapper" className="wrapper_container">
          <MobileAdvanced/>
          <Header/>
          <div className="mad_page_title paralax_image_bg13 v_align_center_blocks">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2>{this.props.title}</h2>
                  <div className="mad_breadcrumbs">
                    <nav>
                      <a href="/">Главная</a><a href="/uslugi">Услуги</a>{this.props.title}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="content" className="mad_elements">
            <div className="mad_section">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="mad_item_offset">
                      <div className="row">
                        <div className="col-sm-6">
                          <h4>Установка натяжных потолков в москве</h4>
                          <br/>
                          <p className="first_letter_1 mad_text_style1"><span>Н</span>атяжные потолки отличаются своей эстетичностью, легкостью в установке и функциональностью. Большим преимуществом является то, что натяжные потолки не пропускают влагу, что не раз выручало жильцов при затоплении квартиры соседями сверху.</p>
                          <p className="mad_text_style1">Компания "Каждый Метр" выполняет монтаж натяжных потолков как отечественного, так и импортного производства, в том числе - матовых, глянцевых, зеркальных, с установкой точечных светильников, люстр, молдингов, с устройством подсветки. Монтаж может выполняться как с нагревом помещения, с помощью газового оборудования, так и без нагрева - по гарпунной технологии.</p>
                          <p className="mad_text_style1">Еще один плюс, когда речь идет про натяжной потолок - цена за м2. Этот тип потолочного покрытия гораздо экономнее других, например - гипсокартонных или оштукатуренных под покраску, ведь не требуется никакой дополнительной подготовки или выравнивания.</p>
                        </div>
                        <div className="col-sm-6">
                          <div className="mad_pattern bg_pattern_red">
                            <article>
                              <div className="icon-flash-3" />
                              <h2>Прайс-лист</h2>
                              <p>Чтобы изучить предложения компании "Каждый Метр" по монтажу натяжного потолка, можно скачать прайс. В специальном файле клиент найдет стоимость на каждый натяжной потолок - цена с работой.</p>
                              <a href="#" className="mad_button style2">Скачать</a>
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <CallToAction/>

            <div className="mad_section">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    {/* <TableOne/>
                    <TableTwo/> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="full_width_bg_pattern full_screen bg_pattern_red mad_banner_1 size2">
               <div className="container">
                 <div className="row">
                   <div className="col-sm-12">
                     <div className="v_align_center_section">
                       <div><h2 className="mad_title_style1">Будьте в курсе последних акций и предложений</h2></div>
                       <div className="align_right"><a href="/akcii-i-predlozheniya" className="mad_button style2">Перейти</a></div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>

          </div>{/*content*/}


        </div>
        <FooterAdvanced/>
      </div>
    );
  }
}

export default StretchCeiling;
