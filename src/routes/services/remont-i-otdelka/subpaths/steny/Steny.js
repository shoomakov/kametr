import React, { PropTypes } from 'react';
import Loader from '../../../../../components/UIElements/Loader/Loader';
import MobileAdvanced from '../../../../../components/UIElements/Mobile/MobileAdvanced';
import Header from '../../../../../components/Header/Header';
import FooterAdvanced from '../../../../../components/Footer/FooterAdvanced';
import TableOne from './PriceTables/TableOne';
import CallToAction from './CallToAction/CallToAction';


class Steny extends React.Component {
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
                          <h4>Выполним отделку стен</h4>
                          <br/>
                          <p className="first_letter_1 mad_text_style1"><span>О</span>тделка стен и косметический ремонт - две вещи, неразрывно связанные друг с другом. Обратившись в компанию "Каждый Метр", клиент может быть уверен, что мастера выполнят весь комплекс работ по ремонту и отделке стен.</p>
                          <p className="mad_text_style1">Производим демонтажные работы любых уровней сложности: от снятия ГКЛ и обоев до разбора кирпичной кладки и сноса бетонных перегородок. Выполняем работы по черновой отделке: ремонт и отделка стен штукатуркой или монтаж на стены гипсокартона - базовое выравнивание, нанесение шпатлевки в качестве финишного выравнивающего покрытия.</p>
                          <p className="mad_text_style1">Под чистовую могут быть исполнены любые виды работ: поклейка обоев, покраска, облицовка плиткой, монтаж панелей ПВХ или МДФ, ремонт и отделка стен декоративной штукатуркой, в том числе и венецианской. Если говорить про отделку стен и цены, то в соседнем меню клиенты могут скачать полный прайс с указанием видов услуг и их стоимостью.</p>
                        </div>
                        <div className="col-sm-6">
                          <div className="mad_pattern bg_pattern_red">
                            <article>
                              <div className="icon-flash-3" />
                              <h2>Прайс-лист</h2>
                              <p>Всего в один клик любой посетитель нашего сайта может скачать прайс лист на отделку стен. Это поможет заказчику получить представление о предлагаемых услугах и их ценовых категориях.</p>
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

export default Steny;
