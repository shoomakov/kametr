import React, { PropTypes } from 'react';
import Loader from '../../../components/UIElements/Loader/Loader';
import MobileAdvanced from '../../../components/UIElements/Mobile/MobileAdvanced';
import Header from '../../../components/Header/Header';
import FooterAdvanced from '../../../components/Footer/FooterAdvanced';
// import TableOne from './PriceTables/TableOne';
// import TableTwo from './PriceTables/TableTwo';
import CallToAction from './CallToAction/CallToAction';


class Ventilation extends React.Component {
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
          <div className="mad_page_title paralax_image_bg11 v_align_center_blocks">
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
                          <h4>Работы по монтажу систем вентиляции</h4>
                          <br/>
                          <p className="first_letter_1 mad_text_style1"><span>О</span>беспечение нормальной циркуляции воздуха внутри помещений имеет большое значение. Различают два типа вентиляции: приточную и вытяжную. Выполнение работ по вентиляции включает в себя прокладку воздуховодов, монтаж приточного или вытяжного оборудования, в том числе - с подключением и интеграцией в инженерные сети.</p>
                          <p className="mad_text_style1">При необходимости система вентилирования воздуха может быть автоматизирована при помощи установки шкафа управления. Вытяжные вентиляторы обеспечивают удаление неприятных запахов и отработанного воздуха, а приточные устройства - затягивают свежий воздух в помещения. В компании "Каждый Метр" есть возможность заказать вентиляцию под ключ, в том числе - комбинированного типа.</p>
                          <p className="mad_text_style1">Не стоит мучиться вопросом - где заказать вентиляцию - обратитесь к нашим специалистам и на выходе Вы получите готовую и исправно функционирующую систему. Установка оборудования для вентиляции производится исключительно опытными профессиональными мастерами, прошедшими специализированное обучение.</p>
                        </div>
                        <div className="col-sm-6">
                          <div className="mad_pattern bg_pattern_red">
                            <article>
                              <div className="icon-flash-3" />
                              <h2>Прайс-лист</h2>
                              <p>Остались вопросы по поводу цены на услуги по монтажу вентиляции? Скачайте подробный прайс-лист и узнайте стоимость установки системы вентиляции. Это позволит получить сведения о возможных затратах и перечне производимых работ.</p>
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

export default Ventilation;
