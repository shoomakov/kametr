import React from 'react';

class StepThree extends React.Component {
  render() {
    return(
      <div className="field">
        <div className="mad_separator_bottom">
          <p>Вы выбрали услугу <span>Остекление</span>, встречаемся <span>на Вашем объекте</span> в <span>10:45</span> <span>31 декабря, 2016</span>. Ознакомиться с прайсом на данную услугу можно <span>тут</span>. Пожалуйста заполните остальные поля, чтобы мы могли с Вами связаться.</p>
          <form id="contact_form" className="contact_form">
            <ul>
              <li className="row">
                <div className="col-sm-4">
                  <label>Имя</label>
                  <input type="text" />
                </div>
                <div className="col-sm-4">
                  <label>Телефон</label>
                  <input type="phone" />
                  {/* <div className="custom_select phone_select">
                    <div className="select_title">039 123 45</div>
                    <ul id="menu_type6" className="select_list" />
                    <select className="d_none">
                      <option value="menu">039 123 45</option>
                      <option value="menu">039 123 45</option>
                      <option value="menu">039 123 45</option>
                    </select>
                  </div> */}
                </div>
                <div className="col-sm-4">
                  <label>Email</label>
                  <input type="text" />
                </div>
              </li>
              <li>
                <label>Заметки</label>
                <textarea defaultValue={""} />
              </li>
            </ul>
          </form>
        </div>
        <div className="app_nav_buttons clearfix">
          <button type="button" className="mad_button style3 app_prev">Назад</button>
          <button type="button" className="mad_button style3 app_next">Дальше</button>
        </div>
      </div>
    )
  }
}

export default StepThree;
