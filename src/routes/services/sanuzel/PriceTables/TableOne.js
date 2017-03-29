// Электрика

import React from 'react';
const getSymbolFromCurrency = require('currency-symbol-map').getSymbolFromCurrency;

class TableOne extends React.Component {
  render() {
    const rub = getSymbolFromCurrency('RUB');
    return(
      <div className="mad_item_offset">
        <div className="row">
          <h4>Сколько стоит ремонт санузла</h4>
          <table className="table_type_1 style2">
            <tbody>
              <tr>
                <th>Наименование работ</th>
                <th style={{width: '10%'}}>Ед. изм.</th>
                <th style={{width: '15%'}}>Цена<br/> Площадь от 40 м&sup2;</th>
                <th style={{width: '15%'}}>Цена<br/> Площадь до 40 м&sup2;</th>
              </tr>
              <tr>
                <td>Снятие любой с/т точки / (ванны, душевая кабина)</td>
                <td>шт</td>
                <td>500 / 600 {rub}</td>
                <td>650 / 850 {rub}</td>
              </tr>
              <tr>
                <td>Демонтаж смесителя</td>
                <td>шт</td>
                <td>220 {rub}</td>
                <td>280 {rub}</td>
              </tr>
              <tr>
                <td>Демонтаж джакузи</td>
                <td>шт</td>
                <td>от 1400 {rub}</td>
                <td>от 1600 {rub}</td>
              </tr>
              <tr>
                <td>Демонтаж водонагревателя</td>
                <td>шт</td>
                <td>650 {rub}</td>
                <td>770 {rub}</td>
              </tr>
              <tr>
                <td>Демонтаж полотенцесушителя</td>
                <td>шт</td>
                <td>550 {rub}</td>
                <td>590 {rub}</td>
              </tr>
              <tr>
                <td>Демонтаж радиатора, батареи</td>
                <td>шт</td>
                <td>660 {rub}</td>
                <td>680 {rub}</td>
              </tr>
              <tr>
                <td>Установка ванны (стоим. превышающая 10,000 установка + 20%)</td>
                <td>шт</td>
                <td>3200 {rub}</td>
                <td>3700 {rub}</td>
              </tr>
              <tr>
                <td>Установка унитаза</td>
                <td>шт</td>
                <td>1700 {rub}</td>
                <td>1850 {rub}</td>
              </tr>
              <tr>
                <td>Замена, поворот крестовины (унитаз)</td>
                <td>шт</td>
                <td>750 {rub}</td>
                <td>850 {rub}</td>
              </tr>
              <tr>
                <td>Биде</td>
                <td>шт</td>
                <td>1500 {rub}</td>
                <td>1700 {rub}</td>
              </tr>
              <tr>
                <td>Установка унитаза (подвесного на каркасе)</td>
                <td>шт</td>
                <td>4700 {rub}</td>
                <td>5400 {rub}</td>
              </tr>
              <tr>
                <td>Замена бочка (унитаз)</td>
                <td>шт</td>
                <td>800 {rub}</td>
                <td>850 {rub}</td>
              </tr>
              <tr>
                <td>Замена слива</td>
                <td>шт</td>
                <td>700 {rub}</td>
                <td>820 {rub}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TableOne;
