import React from 'react';

class CallToAction extends React.Component {
  render() {
    return(
      <div id="offer_action">
        <div className="mad_item_offset paralax_image_bg2">
          <svg className="separator_type_5_path top" preserveAspectRatio="none" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L30 100 L100 0 L100 100 L0 100 Z" fill="#fff" />
            <path d="M0 -1 L0 0 L50 100 L100 0 L100 -1 Z" fill="rgba(255,255,255,0.01)" />
            <path d="M0 0 L50 100 L100 0" fill="none" stroke stroke-width={0} />
          </svg>

          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2>Заказать отделку стен</h2>
                <div className="col-md-6">
                  <p className="mad_text_style1" style={{color:'#fff'}}>
                    Если Вы хотите заказать работы по отделке стен, то введите свое Имя и Электронную почту в поля справа. Наши менеджеры примут заявку и через короткое время свяжутся с Вами, чтобы уточнить детали.
                  </p>
                </div>
                <div className="col-md-6">
                  <form id="contact_form" className="contact_form">
                    <ul>
                      <li>
                          <input type="text" name="cf_name" placeholder="Ваше имя" />
                      </li>
                      <li>
                        <input type="email" name="cf_email" placeholder="Email" />
                      </li>
                    </ul>
                    <button className="mad_button">Заявка</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <svg className="separator_type_5_path" preserveAspectRatio="none" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 L70 100 L100 0 L100 100 L0 100 Z" fill="#fff" />
            <path d="M0 -1 L0 0 L50 100 L100 0 L100 -1 Z" fill="rgba(255,255,255,0.01)" />
            <path d="M0 0 L50 100 L100 0" fill="none" stroke stroke-width={0} />
          </svg>
        </div>
      </div>
    )
  }
}

export default CallToAction;
