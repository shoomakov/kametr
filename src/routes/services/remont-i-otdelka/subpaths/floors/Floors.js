import React, { PropTypes } from 'react';
import Loader from '../../../../../components/UIElements/Loader/Loader';
import MobileAdvanced from '../../../../../components/UIElements/Mobile/MobileAdvanced';
import Header from '../../../../../components/Header/Header';
import FooterAdvanced from '../../../../../components/Footer/FooterAdvanced';
// import TableOne from './PriceTables/TableOne';
import CallToAction from './CallToAction';

const Entities = require('html-entities').XmlEntities;

class Floors extends React.Component {
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
                          <h4>Варианты отделки пола</h4>
                          <br />
                          <p className="first_letter_1 mad_text_style1">
                            <span>У</span>слуга ремонт и отделка пола
                            от компании {q}Каждый метр{q} подразумевает проведение
                            комплексных работ, в том числе демонтажных, выравнивание
                            и укладка финишного покрытия. Производится демонтаж старого
                            деревянного пола, снятие бетонной стяжки,
                            удаление отслуживших свое плитки и линолеума.
                          </p>
                          <p className="mad_text_style1">
                            Работы по выравниванию включают в себя устройство стяжки пола,
                            укладка ГВЛ, ДСП, ОСБ, либо заливку наливного пола.
                            Отделка теплых полов позволит обустроить электрический
                            или водяной теплые полы. Финишное покрытие для пола
                            выбирается на основе предпочтений заказчика.
                            Так, отделка пола плиткой производится обычно в санузле,
                            на кухне и в коридоре, а отделка пола ламинатом -
                            в жилых помещениях, гостиной, спальне, детской комнате.
                          </p>
                        </div>
                        <div className="col-sm-6">
                          <div className="mad_pattern bg_pattern_red">
                            <article>
                              <div className="icon-flash-3" />
                              <h2>Прайс-лист</h2>
                              <p>Узнать цены на отделку пола очень просто.
                                Для этого нужно всего лишь скачать прайс-лист
                                от компании {q}Каждый метр{q}, в котором будут
                                расписаны все оказываемые услуги со стоимостью
                                за единицу измерения.
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

export default Floors;
