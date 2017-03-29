import React, { PropTypes } from 'react';
import Loader from '../../../components/UIElements/Loader/Loader';
import MobileAdvanced from '../../../components/UIElements/Mobile/MobileAdvanced';
import Header from '../../../components/Header/Header';
import FooterAdvanced from '../../../components/Footer/FooterAdvanced';
import TableOne from './PriceTables/TableOne';
import TableTwo from './PriceTables/TableTwo';
import CallToAction from './CallToAction/CallToAction';


class Uslugi extends React.Component {
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
          <div className="mad_page_title paralax_image_bg8 v_align_center_blocks">
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
                          <h4>Выполним электромонтаж</h4>
                          <br/>
                          <p className="first_letter_1 mad_text_style1"><span>В</span>ыполним электромонтаж любой сложности под ключ - от составления схем и проектов до установки приборов. Компетенция электриков компании "Каждый Метр" не подлежит сомнению, ведь каждый из них прошел обязательное обучение и имеет соответствующие допуски и квалификацию.</p>
                          <p className="mad_text_style1">Практическое выполнение задач включает в себя работы по установке распределительного электрощита, проведению инженерных сетей - электромонтаж проводки, как скрытой, путем штробления в стенах или прокладки трасс в гипсокартоне, так и наружной - в гофре или кабель-канале.</p>
                          <p className="mad_text_style1">Производим электромонтаж розеток и выключателей со сверлением отверстий в любых стенах, как в кирпичных, так и в бетонных. Любой клиент, заказавший электромонтаж под ключ в компании "Каждый Метр", может быть уверен в высоком качестве и безопасности проводимых работ.</p>
                        </div>
                        <div className="col-sm-6">
                          <div className="mad_pattern bg_pattern_red">
                            <article>
                              <div className="icon-flash-3" />
                              <h2>Прайс-лист</h2>
                              <p>Если Вас интересуют подробные расценки на проводимые работы, то есть возможность узнать цены на электромонтаж в прайс листе, скачать который можно, нажав всего одну кнопку. Там Вы найдете подробный перечень оказываемых услуги и их стоимость.</p>
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
                    <TableTwo/>
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

export default Uslugi;
