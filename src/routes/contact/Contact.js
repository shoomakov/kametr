/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.css';
import Loader from '../../components/UIElements/Loader/Loader';
import MobileAdvanced from '../../components/UIElements/Mobile/MobileAdvanced';
import Header from '../../components/Header/Header';
import FooterAdvanced from '../../components/Footer/FooterAdvanced';

class Contact extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
        <div id="wrapper" className="wrapper_container">
          <Loader/>
          <MobileAdvanced/>
          <Header/>
          <div className="mad_page_title paralax_image_bg1 v_align_center_blocks">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2>{this.props.title}</h2>
                  <div className="mad_breadcrumbs">
                    <nav>
                      <a href="/">Главная</a>Контакты
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="content">
            {/* Google map */}
            <div className="relative">
              <div id="googleMap2" className="map_container" />
            </div>
            <div className="mad_section_2">
              <div className="container">
                {/* Contact info */}
                <div className="row">
                  <div className="col-sm-6">
                    <h4>Address</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar at nunc id sagittis. Fusce sit amet libero lacus. Phasellus euismod mi et venenatis hendrerit. Aliquam sollicitudin gravida est, rhoncus vulputate orci. Integer ante mi, lacinia sit amet consectetur quis, cursus vestibulum lorem.</p>
                    <div className="c_info_list">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="contact_item clearfix">
                            <i className="icon-direction" />
                            <p>г. Москва, г. Зеленоград,<br/>к. 814, этаж 6, пом. I, ком. 10</p>
                          </div>
                          <div className="contact_item clearfix">
                            <i className="icon-phone-1" />
                            <p>Тел: 8 (495) 37-495-38</p>
                          </div>
                          <div className="contact_item clearfix">
                            <i className="icon-email" />
                            <p>Email: <a className="contact_e" href="mailto:#">info@kametr.ru</a></p>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="contact_item clearfix">
                            <i className="icon-clock" />
                            <p>Пн - Пт 9:00 - 18:00</p>
                          </div>
                          <div className="contact_item clearfix">
                            <i className="icon-fax" />
                            <p>Факс: 8 (495) 37-495-38</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <h4>Напишите нам</h4>
                    <form id="contact_form" className="contact_form">
                      <ul>
                        <li>
                          <input type="text" name="cf_name" placeholder="Имя" />
                        </li>
                        <li>
                          <input type="url" name="cf_email" placeholder="Emai" />
                        </li>
                        <li>
                          <textarea name="cf_message" placeholder="Сообщение..." defaultValue={""} />
                        </li>
                      </ul>
                      <button className="mad_button small_button">Отправить</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="mad_item_offset">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <h4>ООО "Каждый Метр"</h4>
                    <div className="row">
                      <div className="col-sm-6">
                        <table className="table_type_1 style2 horisontal">
                          <tbody>
                            <tr>
                              <th>ОГРН</th>
                              <td>1167746269481</td>
                            </tr>
                            <tr>
                              <th>Юридический адрес</th>
                              <td>124527, г. Москва, г. Зеленоград, корпус 814, этаж 6,  пом. I, ком. 10</td>
                            </tr>
                            <tr>
                              <th>Телефон и факс по юр. адресу</th>
                              <td>+7 (495) 37-495-38</td>
                            </tr>
                            <tr>
                              <th>Полное наименование учреждения банка</th>
                              <td>АО «АЛЬФА-БАНК» г. Москва</td>
                            </tr>
                            <tr>
                              <th>Расчетный счет</th>
                              <td>40702810402470000482</td>
                            </tr>
                            <tr>
                              <th>Корреспондентский счет</th>
                              <td>30101810200000000593</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-sm-6">
                        <table className="table_type_1 style2 horisontal">
                          <tbody>
                            <tr>
                              <th>БИК</th>
                              <td>044525593</td>
                            </tr>
                            <tr>
                              <th>ИНН</th>
                              <td>7735151182</td>
                            </tr>
                            <tr>
                              <th>КПП</th>
                              <td>773501001</td>
                            </tr>
                            <tr>
                              <th>Код отрасли по ОКВЭД</th>
                              <td>45,21</td>
                            </tr>
                            <tr>
                              <th>Код организации по ОКПО</th>
                              <td>00701139</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterAdvanced/>
        </div>
      // <div className={s.root}>
      //   <div className={s.container}>
      //     <h1>{this.props.title}</h1>
      //     <p>...</p>
      //   </div>
      // </div>
    );
  }
}

export default withStyles(s)(Contact);
