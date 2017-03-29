import React from 'react';

class AdvancedTable extends React.Component {
  render() {
    return(
      <div className="mad_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="tabs tabs-section vertical clearfix">
                {/*tabs navigation*/}
                <ul className="tabs_nav clearfix">
                  <li className><a href="#tab_1" className="icon-home">Общестроительные работы</a></li>
                  <li className><a href="#tab_2" className="icon-puzzle">Ремонтно-отделочные работы</a></li>
                  <li className><a href="#tab_3" className="icon-brush">Покраска</a></li>
                  <li className><a href="#tab_4" className="icon-flash-3">Электромонтаж</a></li>
                  <li className><a href="#tab_5" className="icon-up-open-big">Ремонт санузлов</a></li>
                  {/* <li className><a href="#tab_6" className="icon-user-1">Consulting</a></li> */}
                </ul>
                {/*tabs content*/}
                <div className="tabs_content">
                  <div id="tab_1">
                    <div className="tabs tabs-section style2">
                      {/*tabs navigation*/}
                      <div className="clearfix tabs_conrainer">
                        <ul className="tabs_nav clearfix">
                          <li className><a href="#tab1">от 40 м2</a></li>
                          <li className><a href="#tab2">до 40 м2</a></li>
                          {/* <li className><a href="#tab3">УСТАНОВКА/УКЛАДКА</a></li> */}
                          {/* <li className><a href="#tab4">другое</a></li> */}
                        </ul>
                      </div>
                      {/*tabs content*/}
                      <div className="tabs_content">
                        <div id="tab1">
                          <div className="accordion">
                            {/*accordion item*/}
                            <div className="accordion_item">
                              <h5 className="a_title active">
                                Укладка пароизоляционного слоя
                                <span>150 руб</span>
                              </h5>
                              <div className="a_content">
                                <p>(потолок, кровля)</p>
                              </div>
                            </div>
                            {/*accordion item*/}
                            <div className="accordion_item">
                              <h5 className="a_title">
                                Укладка пароизоляционного слоя
                                <span>130 руб</span>
                              </h5>
                              <div className="a_content">
                                <p>(стены, пол)</p>
                              </div>
                            </div>
                            {/*accordion item*/}
                            <div className="accordion_item">
                              <h5 className="a_title">
                                Устройство обрешетки (шаг 20-40)
                                <span>160 руб.</span>
                              </h5>
                              <div className="a_content">
                                <p>Устройство обрешетки по стропильной системе с шагом 20-40см (потолок, кровля)</p>
                              </div>
                            </div>
                            {/*accordion item*/}
                            <div className="accordion_item">
                              <h5 className="a_title">
                                Устройство обрешетки (шаг до 19)
                                <span>150 руб.</span>
                              </h5>
                              <div className="a_content">
                                <p>Устройство обрешетки по стропильной системе с шагом до 19см. (потолок, кровля)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="tab2">
                          <div className="accordion">
                            {/*accordion item*/}
                            <div className="accordion_item">
                              <h5 className="a_title active">
                                Укладка пароизоляционного слоя
                                <span>170 руб.</span>
                              </h5>
                              <div className="a_content">
                                <p>(потолок, кровля)</p>
                              </div>
                            </div>
                            {/*accordion item*/}
                            <div className="accordion_item">
                              <h5 className="a_title">
                                Укладка пароизоляционного слоя
                                <span>150 руб.</span>
                              </h5>
                              <div className="a_content">
                                <p>(стены, пол)</p>
                              </div>
                            </div>
                            {/*accordion item*/}
                            <div className="accordion_item">
                              <h5 className="a_title">
                                Устройство обрешетки (шаг 20-40)
                                <span>200 руб.</span>
                              </h5>
                              <div className="a_content">
                                <p>Устройство обрешетки по стропильной системе с шагом 20-40см (потолок, кровля)</p>
                              </div>
                            </div>
                            {/*accordion item*/}
                            <div className="accordion_item">
                              <h5 className="a_title">
                                Устройство обрешетки (шаг до 19)
                                <span>190 руб.</span>
                              </h5>
                              <div className="a_content">
                                <p>Устройство обрешетки по стропильной системе с шагом до 19см. (потолок, кровля)</p>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div id="tab_2">

                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>      
    )
  }
}

export default AdvancedTable;
