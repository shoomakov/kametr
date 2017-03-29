// Электрика

import React from 'react';
const getSymbolFromCurrency = require('currency-symbol-map').getSymbolFromCurrency;

class TableOne extends React.Component {
  render() {
    const rub = getSymbolFromCurrency('RUB');
    return(
      <div className="mad_item_offset">
        <div className="row">
          <h4>Электрика:</h4>
          <table className="table_type_1 style2">
            <tbody>
              <tr>
                <th>Наименование работ</th>
                <th style={{width: '10%'}}>Ед. изм.</th>
                <th style={{width: '15%'}}>Цена<br/> Площадь от 40 м&sup2;</th>
                <th style={{width: '15%'}}>Цена<br/> Площадь до 40 м&sup2;</th>
              </tr>
              <tr>
                <td>Демонтаж провода</td>
                <td>п. м.</td>
                <td>40 {rub}</td>
                <td>50 {rub}</td>
              </tr>
              <tr>
                <td>Демонтаж электрической точки</td>
                <td>шт.</td>
                <td>170 {rub}</td>
                <td>190 {rub}</td>
              </tr>
              <tr>
                <td>Демонтаж люстры, светильника</td>
                <td>шт.</td>
                <td>270 {rub}</td>
                <td>310 {rub}</td>
              </tr>
              <tr>
                <td>Демонтаж счетчика</td>
                <td>шт.</td>
                <td>600 {rub}</td>
                <td>700 {rub}</td>
              </tr>
              <tr>
                <td>Штробление стен: 1 провод</td>
                <td>п.м.</td>
                <td>300 {rub}</td>
                <td>360 {rub}</td>
              </tr>
              <tr>
                <td>Штробление стен: 2 провода</td>
                <td>п.м.</td>
                <td>320 {rub}</td>
                <td>400 {rub}</td>
              </tr>
              <tr>
                <td>Штробление стен: 3 провода</td>
                <td>п.м.</td>
                <td>340 {rub}</td>
                <td>450 {rub}</td>
              </tr>
              <tr>
                <td>Штроба в гипсокартоне</td>
                <td>п.м.</td>
                <td>250 {rub}</td>
                <td>320 {rub}</td>
              </tr>
              <tr>
                <td>Штроба в бетоне / (без арматуры)</td>
                <td>п.м.</td>
                <td>600 {rub}/ 500 {rub}</td>
                <td>700 {rub}/ 600 {rub}</td>
              </tr>
              <tr>
                <td>Провод в гофре</td>
                <td>п.м.</td>
                <td>120 {rub}</td>
                <td>170 {rub}</td>
              </tr>
              <tr>
                <td>Открытая проводка</td>
                <td>п.м.</td>
                <td>70 {rub}</td>
                <td>90 {rub}</td>
              </tr>
              <tr>
                <td>Проводка в коробе</td>
                <td>п.м.</td>
                <td>200 {rub}</td>
                <td>250 {rub}</td>
              </tr>
              <tr>
                <td>Подготовка гнезда под монтажную коробку</td>
                <td>шт.</td>
                <td>340 {rub}</td>
                <td>370 {rub}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TableOne;
