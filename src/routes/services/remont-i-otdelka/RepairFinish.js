import React, { PropTypes } from 'react';
import Loader from '../../../components/UIElements/Loader/Loader';
import MobileAdvanced from '../../../components/UIElements/Mobile/MobileAdvanced';
import Header from '../../../components/Header/Header';
import FooterAdvanced from '../../../components/Footer/FooterAdvanced';
// import TableOne from './PriceTables/TableOne';
import CallToAction from './CallToAction';

const Entities = require('html-entities').XmlEntities;

class Repair extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.number,
  };

  render() {
    const entities = new Entities();
    const q = entities.decode('&quot;');
    return (
      <div>
        <Loader />
        <div id="wrapper" className="wrapper_container">
          <MobileAdvanced />
          <Header />
          <div className="mad_page_title paralax_image_bg7 v_align_center_blocks">
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
                          <h4>Выполнение ремонтно отделочных работ</h4>
                          <br />
                          <p className="first_letter_1 mad_text_style1">
                            <span>П</span>роведение ремонтных отделочных работ
                            от компании {q}Каждый метр{q}
                            включает в себя черновую и финишную отделку любых помещений,
                            различного уровня сложности - от косметической
                            до класса {q}Люкс{q} по индивидуальным проектам.
                          </p>
                          <p className="mad_text_style1">
                            Строительно ремонтно отделочные работы производятся в отношении полов,
                            стен, потолков, а также коммуникаций. Практической деятельности
                            предшествует серьезный подготовительный этап - осмечивание,
                            составление плана работ, разработка дизайна,
                            а также формирование необходимых схем и проектов.
                          </p>
                          <p className="mad_text_style1">
                            Виды ремонтно отделочных работ, выполняемых специалистами компании,
                            широк и включает в себя все возможные типы деятельности,
                            осуществляемые в этой сфере, начиная от демонтажа ненужных
                            конструкций и перепланировки и заканчивая отделкой эксклюзивными
                            чистовыми материалами. Фирма располагает штатом прекрасно
                            подготовленных мастеров различного профиля.
                          </p>
                        </div>
                        <div className="col-sm-6">
                          <div className="mad_pattern bg_pattern_red">
                            <article>
                              <div className="icon-flash-3" />
                              <h2>Прайс-лист</h2>
                              <p>
                                Для того, чтобы узнать стоимость ремонтно отделочных работ,
                                нажмите на кнопку {q}Скачать{q}. Вы получите на свой компьютер
                                файл с прайс-листом на все виды оказываемых услуг.
                                Для удобства они разбиты по категориям.
                              </p>
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

            <CallToAction />

            <div className="mad_section">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    {/* <TableOne /> */}
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

          </div>


        </div>
        <FooterAdvanced />
      </div>
    );
  }
}

export default Repair;
