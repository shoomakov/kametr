import React, { PropTypes } from 'react';
import Loader from '../../../components/UIElements/Loader/Loader';
import MobileAdvanced from '../../../components/UIElements/Mobile/MobileAdvanced';
import Header from '../../../components/Header/Header';
import FooterAdvanced from '../../../components/Footer/FooterAdvanced';
import TableOne from './PriceTables/TableOne';
import CallToAction from './CallToAction/CallToAction';


class Sanuzel extends React.Component {
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
          <div className="mad_page_title paralax_image_bg3 v_align_center_blocks">
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
                          <h4>Ремонт ванных комнат и санузлов под ключ</h4>
                          <br/>
                          <p className="first_letter_1 mad_text_style1"><span>С</span>троительная компания "Каждый Метр" выполнит комплексный ремонт под ключ в санузле. Специалисты фирмы производят все виды работ - от электромонтажа и демонтажных работ до облицовки плиткой и установки сантехнического оборудования. Ремонт санузла в Москве от организации "Каждый Метр" осуществляется по всем правилам отделочных работ, с применением самых современных инструментов.</p>
                          <p className="mad_text_style1">Опытные сантехники заменят и проведут гребенку, проложат трубы канализации, в том числе со штроблением в стенах; электрики заведут кабель под стиральную машину или джакузи, смонтируют розетки, подключат точечные светильники и лампы; отделочники выровняют стены и пол, снесут перегородку, если нужно объединение ванный с туалетом, либо наоборот - возведут новую, уложат плитку на пол и стены, соберут потолки из панелей или натянут натяжные. Ремонт санузла под ключ заканчивается установкой двери и выносом строительного мусора. На выходе клиент получит сверкающую ванную комнату!</p>
                          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit lobortis enim, ut bibendum ligula auctor tincidunt. Aliquam eget ligula ut mi interdum interdum. Nullam luctus auctor aliquet. Praesent ut porttitor neque. Curabitur efficitur, risus et ullamcorper aliquet, nisi diam maximus nisl, vel ultricies ante justo sit amet sem. Ut imperdiet odio condimentum magna dignissim finibus.</p> */}
                        </div>
                        <div className="col-sm-6">
                          <div className="mad_pattern bg_pattern_red">
                            <article>
                              <div className="icon-flash-3" />
                              <h2>Прайс-лист</h2>
                              <p>Часто заказчиков волнует вопрос - а во сколько мне обойдется ремонт санузла? Чтобы рассчитать стоимость ремонта ванной комнаты и туалета самостоятельно, каждый посетитель сайта может скачать наш прайс, разобраться в котором очень просто.</p>
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
                    <TableOne/>
                    {/* <TableTwo/> */}
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

export default Sanuzel;
