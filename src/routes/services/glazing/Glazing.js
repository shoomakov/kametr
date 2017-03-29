import React, { PropTypes } from 'react';
import Loader from '../../../components/UIElements/Loader/Loader';
import MobileAdvanced from '../../../components/UIElements/Mobile/MobileAdvanced';
import Header from '../../../components/Header/Header';
import FooterAdvanced from '../../../components/Footer/FooterAdvanced';
// import TableOne from './PriceTables/TableOne';
// import TableTwo from './PriceTables/TableTwo';
import CallToAction from './CallToAction/CallToAction';


class Glazing extends React.Component {
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
          <div className="mad_page_title paralax_image_bg12 v_align_center_blocks">
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
                          <h4>Остекление квартир и загородных домов</h4>
                          <br/>
                          <p className="first_letter_1 mad_text_style1"><span>К</span>омпания "Каждый Метр" осуществляет остекление квартир пластиковыми и евроокнами. В том числе: производим демонтаж и установку стандартных двустворчатых и трехстворчатых окон в гостиной, спальне, на кухне и в иных помещениях, делаем замену балконного блока, устанавливаем рамы на балконы и лоджии.</p>
                          <p className="mad_text_style1">Возможен выезд на остекление загородного дома. Установщики снабжены всем необходимым инструментом, в том числе и расходными материалами высшего качества. Имеется возможность по использованию специального транспорта - автовышек, для точечной работы на высоте, например, при оказании такой услуги, как остекление балконов дома. Для монтажа на больших площадях применяется возведение лесов.</p>
                          <p className="mad_text_style1">Специалисты компании обладают большим опытом и профессионально подготовлены для реализации таких работ, как: остекление коттеджей, квартир, офисных зданий, торговых центров и производственных помещений.</p>
                        </div>
                        <div className="col-sm-6">
                          <div className="mad_pattern bg_pattern_red">
                            <article>
                              <div className="icon-flash-3" />
                              <h2>Прайс-лист</h2>
                              <p>Для ознакомления с нашими ценами и видами работ, имеется возможность скачать прайс на остекление. Для этого нажмите на иконку "СКАЧАТЬ" и дождитесь загрузки файла.</p>
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

export default Glazing;
