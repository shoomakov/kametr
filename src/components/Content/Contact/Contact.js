import React from 'react';
import FooterInfo from '../../Footer/FooterInfo';

class Contact extends React.Component {
  render() {
    return(
      <div id="contact">
        <div className="mad_section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="mad_section_container">
                  <article>
                    <h3 className="mad_title_style1">Мы на связи</h3>
                    <h2>Задайте вопрос</h2>
                    <p>Заполните форму с Вашим вопросом и через короткое время Вы получите полноценный ответ или консультацию от нашего менеджера.</p>
                  </article>
                </div>
              </div>
              <div className="col-md-6">
                <form id="contact_form" className="contact_form">
                  <ul>
                    <li className="row">
                      <div className="col-sm-6">
                        <input type="text" name="cf_name" placeholder="Ваше имя" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" name="cf_name" placeholder="Фамилия" />
                      </div>
                    </li>
                    <li>
                      <input type="url" name="cf_email" placeholder="Email" />
                    </li>
                    <li>
                      <textarea name="cf_message" placeholder="Сообщение..." defaultValue={""} />
                    </li>
                  </ul>
                  <button className="mad_button">Отправить</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <FooterInfo/>

        {/* Google map */}
        <div className="relative">
          <div id="googleMap2" className="map_container" />
        </div>
      </div>
    )
  }
}

export default Contact;
