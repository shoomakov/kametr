import React, { PropTypes } from 'react';
import Loader from '../../../components/UIElements/Loader/Loader';
import MobileAdvanced from '../../../components/UIElements/Mobile/MobileAdvanced';
import Header from '../../../components/Header/Header';
import FooterAdvanced from '../../../components/Footer/FooterAdvanced';
// import TableOne from './PriceTables/TableOne';
// import TableTwo from './PriceTables/TableTwo';
import CallToAction from './CallToAction/CallToAction';


class Furniture extends React.Component {
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
          <div className="mad_page_title paralax_image_bg14 v_align_center_blocks">
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
                          <h4>Изготовление корпусной мебели на заказ</h4>
                          <br/>
                          <p className="first_letter_1 mad_text_style1"><span>С</span>делав ремонт в квартире, нужно подобрать подходящую мебель. Компания "Каждый Метр" осуществляет изготовление корпусной мебели на заказ. Ее преимущества: легкость, простота в сборке, относительная дешевизна, которая достигается за счет невысокой себестоимости используемых материалов.</p>
                          <p className="mad_text_style1">Производство корпусной мебели происходит на современном оборудовании, с применением эффективных технологических процессов. Работу ведут квалифицированные рабочие, а товар, перед поступлением к конечному потребителю, проходит обязательный контроль качества. Можно заказать такие предметы обстановки, как: столы, шкафы-купе, стенки, кровати и так далее. Корпусная мебель в Московской области, производство которой осуществляет компании "Каждый Метр", идеально впишется в любой интерьер, подчеркнув индивидуальность дизайна.</p>
                          {/* <p className="mad_text_style1">Не стоит мучиться вопросом - где заказать вентиляцию - обратитесь к нашим специалистам и на выходе Вы получите готовую и исправно функционирующую систему. Установка оборудования для вентиляции производится исключительно опытными профессиональными мастерами, прошедшими специализированное обучение.</p> */}
                        </div>
                        <div className="col-sm-6">
                          <div className="mad_pattern bg_pattern_red">
                            <article>
                              <div className="icon-flash-3" />
                              <h2>Прайс-лист</h2>
                              <p>Главная особенность, которая отличает наше производство корпусной мебели - цены. Они будут приемлемы для большинства людей. Убедиться в этом легко, скачав прайс-лист и ознакомившись с расценками.</p>
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

export default Furniture;
