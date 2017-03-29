import React, { PropTypes } from 'react';
import Loader from '../../../components/UIElements/Loader/Loader';
import MobileAdvanced from '../../../components/UIElements/Mobile/MobileAdvanced';
import Header from '../../../components/Header/Header';
import FooterAdvanced from '../../../components/Footer/FooterAdvanced';
// import TableOne from './PriceTables/TableOne';
// import TableTwo from './PriceTables/TableTwo';
import CallToAction from './CallToAction/CallToAction';


class Conditioning extends React.Component {
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
          <div className="mad_page_title paralax_image_bg10 v_align_center_blocks">
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
                          <h4>Установка систем кондиционирования</h4>
                          <br/>
                          <p className="first_letter_1 mad_text_style1"><span>К</span>омпания "Каждый Метр" осуществляет оказание услуг в сфере вентиляции и кондиционирования в Москве. Специалисты организации проводят весь комплекс работ - от замера с составлением схем и чертежей до практической реализации задуманного.</p>
                          <p className="mad_text_style1">Монтаж систем кондиционирования подразумевает деятельность в нескольких направлениях: обустройство соответствующих инженерных сетей, в плане энергоснабжения и вывода отработанного воздуха, а также собственно установку и настройку самого оборудования - кондиционера или сплит-системы. Монтаж системы кондиционирования воздуха - дело ответственное и серьезное, поэтому в нашей фирме допуск к нему имеют только квалифицированные мастера.</p>
                          <div className="tooltips">
                            <p className="mad_text_style1">Еще одна сопутствующая сфера - это услуги по установке <a href="/raboty-po-montazhu-ventilyacii" className="bottom_tooltip"><span className="tooltip">перейти</span>вентиляционного оборудования</a>. Правильно смонтированные вентиляционные аппараты способствуют комфортному проживанию и эффективной производственной деятельности.</p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mad_pattern bg_pattern_red">
                            <article>
                              <div className="icon-flash-3" />
                              <h2>Прайс-лист</h2>
                              <p>Любой желающий может скачать прайс на монтаж кондиционеров, чтобы более подробно ознакомиться с предлагаемыми услугами и их стоимостью. Нажав на кнопку "СКАЧАТЬ", пользователь сможет моментально загрузить на свой компьютер файл с прайсом.</p>
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

export default Conditioning;
