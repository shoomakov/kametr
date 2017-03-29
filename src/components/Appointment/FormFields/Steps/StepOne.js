import React from 'react';

class StepOne extends React.Component {
  render() {
    return(
      <div className="field app_selected">
        <div className="mad_separator_bottom">
          {/* <h6>Пожалуйста выберите услугу:</h6> */}
          <div className="row mad_item_offset_4">
            <div className="col-sm-6">
              <form className="mad_index_3">
                <label>Выберите услугу</label>
                <div className="custom_select">
                  <div className="select_title">Услуга</div>
                  <ul id="menu_type" className="select_list" />
                  <select className="d_none">
                    <option value="menu">Остекление</option>
                    <option value="menu">Вентиляция</option>
                    <option value="menu">Кондиционировние</option>
                    <option value="menu">Натяжные потолки</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="col-sm-6">
              <form className="mad_index_3">
                <label>Где желаете встретиться?</label>
                <div className="custom_select">
                  <div className="select_title">Выберите место</div>
                  <ul id="menu_type2" className="select_list" />
                  <select className="d_none">
                    <option value="menu">У нас в офисе</option>
                    <option value="menu">Выезд специалиста на объект</option>
                  </select>
                </div>
              </form>
            </div>
            {/* <div className="col-sm-4">
              <form className="mad_index_3">
                <label>Employee</label>
                <div className="custom_select">
                  <div className="select_title">Any</div>
                  <ul id="menu_type3" className="select_list" />
                  <select className="d_none">
                    <option value="menu">Option 1</option>
                    <option value="menu">Option 2</option>
                    <option value="menu">Option 3</option>
                  </select>
                </div>
              </form>
            </div> */}
          </div>
          <div className="row">
            <div className="col-md-3">
              <form>
                <label>День встречи:</label>
                <input type="text" placeholder="16 Декабря, 2016" />
              </form>
            </div>
            <div className="col-md-4 mad_col_width">
              <div className="mad_week_list">
                <ul className="clearfix">
                  <li>
                    <h6>Пн</h6>
                    <div className="icon_check" />
                  </li>
                  <li>
                    <h6>Вт</h6>
                    <div className="icon_check" />
                  </li>
                  <li>
                    <h6>Ср</h6>
                    <div className="icon_check" />
                  </li>
                  <li>
                    <h6>Чт</h6>
                    <div className="icon_check" />
                  </li>
                  <li>
                    <h6>Пт</h6>
                    <div className="icon_check" />
                  </li>
                  <li>
                    <h6>Сб</h6>
                    <div className="icon_check" />
                  </li>
                  <li>
                    <h6>Вс</h6>
                    <div className="icon_check" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <form>
                <label>Время встречи</label>
                <div className="custom_select">
                  <div className="select_title">8:00</div>
                  <ul id="menu_type4" className="select_list" />
                  <select className="d_none">
                    <option value="menu">9:00</option>
                    <option value="menu">10:00</option>
                    <option value="menu">11:00</option>
                  </select>
                </div>
              </form>
            </div>
            {/* <div className="col-md-2">
              <form>
                <label>Finish by</label>
                <div className="custom_select">
                  <div className="select_title">6:00 pm</div>
                  <ul id="menu_type5" className="select_list" />
                  <select className="d_none">
                    <option value="menu">Option 1</option>
                    <option value="menu">Option 2</option>
                    <option value="menu">Option 3</option>
                  </select>
                </div>
              </form>
            </div> */}
          </div>
        </div>
        <div className="app_nav_buttons clearfix">
          <button type="button" className="mad_button style3 app_next">Дальше</button>
        </div>
      </div>
    )
  }
}

export default StepOne;
