import React from 'react';
const getSymbolFromCurrency = require('currency-symbol-map').getSymbolFromCurrency;

class TableTwo extends React.Component {
  render() {
    const rub = getSymbolFromCurrency('RUB');
    return(
      <div className="mad_item_offset">
        <div className="row">
          <h4>Устройство эл. точки:</h4>
          <table className="table_type_1 style2">
            <tbody>
              <tr>
                <th>Наименование работ</th>
                <th style={{width: '10%'}}>Ед. изм.</th>
                <th style={{width: '15%'}}>Цена<br/> Площадь от 40 м&sup2;</th>
                <th style={{width: '15%'}}>Цена<br/> Площадь до 40 м&sup2;</th>
              </tr>
              <tr>
                <td>Накладная розетка</td>
                <td>шт</td>
                <td>240 {rub}</td>
                <td>270 {rub}</td>
              </tr>
              <tr>
                <td>Скрытая розетка (выключатель обычной розетки)</td>
                <td>шт</td>
                <td>450 {rub}</td>
                <td>530 {rub}</td>
              </tr>
              <tr>
                <td>Силовая розетка</td>
                <td>шт</td>
                <td>650 {rub}</td>
                <td>720 {rub}</td>
              </tr>
              <tr>
                <td>Монтаж распределительной коробки</td>
                <td>шт</td>
                <td>600 {rub}</td>
                <td>700 {rub}</td>
              </tr>
              <tr>
                <td>Сверление сквозного отверстие</td>
                <td>шт.</td>
                <td>400 {rub}</td>
                <td>500 {rub}</td>
              </tr>
              <tr>
                <td>Монтаж и подключение точечного светильника</td>
                <td>шт</td>
                <td>350 {rub}</td>
                <td>420 {rub}</td>
              </tr>
              <tr>
                <td>Установка вентилятора</td>
                <td>шт</td>
                <td>750 {rub}</td>
                <td>820 {rub}</td>
              </tr>
              <tr>
                <td>Штроба в гипсокартоне</td>
                <td>п.м.</td>
                <td>250 {rub}</td>
                <td>320 {rub}</td>
              </tr>
              <tr>
                <td>Установка, подключение сушки для рук</td>
                <td>шт.</td>
                <td>400 {rub}</td>
                <td>500 {rub}</td>
              </tr>
              <tr>
                <td>Монтаж крюка</td>
                <td>шт.</td>
                <td>270 {rub}</td>
                <td>310 {rub}</td>
              </tr>
              <tr>
                <td>Установка патрона</td>
                <td>шт</td>
                <td>150 {rub}</td>
                <td>170 {rub}</td>
              </tr>
              <tr>
                <td>Монтаж трансформатора</td>
                <td>шт.</td>
                <td>600 {rub}</td>
                <td>700 {rub}</td>
              </tr>
              <tr>
                <td>Прозвон старой проводки</td>
                <td></td>
                <td>1000 {rub}</td>
                <td>1500 {rub}</td>
              </tr>
              <tr>
                <td>Монтаж электрощита</td>
                <td>шт</td>
                <td>1700 {rub}</td>
                <td>2100 {rub}</td>
              </tr>
              <tr>
                <td>Работа со щитком</td>
                <td>шт</td>
                <td>1900 {rub}</td>
                <td>2600 {rub}</td>
              </tr>
              <tr>
                <td>Электромонтаж счетчика</td>
                <td>шт</td>
                <td>1700 {rub}</td>
                <td>2100 {rub}</td>
              </tr>
              <tr>
                <td>Устройство гнезда под счетчик / (ниши под счетчик)</td>
                <td>шт</td>
                <td>900 / 1600 {rub}</td>
                <td>1200 / 1900 {rub}</td>
              </tr>
              <tr>
                <td>Электромонтаж автомата</td>
                <td>шт</td>
                <td>700 {rub}</td>
                <td>750 {rub}</td>
              </tr>
              <tr>
                <td>Монтаж короба под автоматы</td>
                <td>шт</td>
                <td>от 750 {rub}</td>
                <td>от 850 {rub}</td>
              </tr>
              <tr>
                <td>Монтаж ТВ, телефонной розетки</td>
                <td>шт</td>
                <td>320 {rub}</td>
                <td>370 {rub}</td>
              </tr>
              <tr>
                <td>Монтаж звонка с кнопкой</td>
                <td>шт</td>
                <td>400 {rub}</td>
                <td>410 {rub}</td>
              </tr>
              <tr>
                <td>Монтаж люстры</td>
                <td>шт</td>
                <td>700 {rub}</td>
                <td>800 {rub}</td>
              </tr>
              <tr>
                <td>Установка ТВ, телефонного разветвителя</td>
                <td>шт</td>
                <td>400 {rub}</td>
                <td>475 {rub}</td>
              </tr>
              <tr>
                <td>Установка реостата теплого пола</td>
                <td>шт</td>
                <td>650 {rub}</td>
                <td>750 {rub}</td>
              </tr>
              <tr>
                <td>Монтаж механизма принудительной вентиляции в общую систему вентиляции</td>
                <td>шт</td>
                <td>4100 {rub}</td>
                <td>4600 {rub}</td>
              </tr>
              <tr>
                <td>Сверление сквозного отверстия под розетку(URK? ДСП, фанера)</td>
                <td>шт</td>
                <td>200 {rub}</td>
                <td>230 {rub}</td>
              </tr>
              <tr>
                <td>Монтаж проводки (в гофре) в перегородках из ГКЛ, СМЛ, ДСП</td>
                <td>шт</td>
                <td>190 {rub}</td>
                <td>240 {rub}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TableTwo;
