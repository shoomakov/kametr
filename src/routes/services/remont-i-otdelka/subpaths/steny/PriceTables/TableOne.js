// Электрика

import React from 'react';
const getSymbolFromCurrency = require('currency-symbol-map').getSymbolFromCurrency;

class TableOne extends React.Component {
  render() {
    const rub = getSymbolFromCurrency('RUB');

    return(
      <div className="mad_item_offset">
        <div className="row">
          <h4>Стоимость отделки стен</h4>
          <table className="table_type_1 style2">
            <tbody>
              <tr>
                <th>Наименование работ</th>
                <th style={{width: '10%'}}>Ед. изм.</th>
                <th style={{width: '15%'}}>Цена<br/> Площадь от 40 м&sup2;</th>
                <th style={{width: '15%'}}>Цена<br/> Площадь до 40 м&sup2;</th>
              </tr>
              <tr>
                <td>Демонтаж старых обоев/каждый последующий слой</td>
                <td>м&sup2;</td>
                <td>80 / 40 {rub}</td>
                <td>90 / 45 {rub}</td>
              </tr>
              <tr>
                <td>Размывка стен</td>
                <td>м&sup2;</td>
                <td>90 {rub}</td>
                <td>100 {rub}</td>
              </tr>
              <tr>
                <td>Зачистка стен от краски</td>
                <td>м&sup2;</td>
                <td>170 {rub}</td>
                <td>190 {rub}</td>
              </tr>
              <tr>
                <td>Демонтаж штукатурки</td>
                <td>м&sup2;</td>
                <td>200 {rub}</td>
                <td>250 {rub}</td>
              </tr>
              <tr>
                <td>Демонтаж настенной плитки</td>
                <td>м&sup2;</td>
                <td>150 {rub}</td>
                <td>200 {rub}</td>
              </tr>
              <tr>
                <td>Демонтаж пластиковой панели, вагонки</td>
                <td>м&sup2;</td>
                <td>90 {rub}</td>
                <td>100 {rub}</td>
              </tr>
              <tr>
                <td>Демонтаж перегородок из ГКЛ, фанеры</td>
                <td>м&sup2;</td>
                <td>210 {rub}</td>
                <td>250 {rub}</td>
              </tr>
              <tr>
                <td>Демонтаж стен ГКЛ</td>
                <td>м&sup2;</td>
                <td>170 {rub}</td>
                <td>190 {rub}</td>
              </tr>
              <tr>
                <td>Демонтаж дощатой перегородки </td>
                <td>м&sup2;</td>
                <td>190 {rub}</td>
                <td>210 {rub}</td>
              </tr>
              <tr>
                <td>Демонтаж перегородок (½ кирпича без штукатурки)</td>
                <td>м&sup2;</td>
                <td>290 {rub}</td>
                <td>370 {rub}</td>
              </tr>
              <tr>
                <td>Демонтаж перегородок (½ кирпича оштукатуренные)</td>
                <td>м&sup2;</td>
                <td>330 {rub}</td>
                <td>350 {rub}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TableOne;
