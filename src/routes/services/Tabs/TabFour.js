import React from 'react';
const getSymbolFromCurrency = require('currency-symbol-map').getSymbolFromCurrency;

class TabFour extends React.Component {
  render() {
    const rub = getSymbolFromCurrency('RUB');
    return(
      <div>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/demontazh-dzhakuzi.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Демонтаж джакузи</h5>
                <span className="days">Minimal Time Dur : 1 HOUR</span>
              </div>
              <div className="align_right"><a href="#">от 1400 {rub}</a></div>
            </div>
            <p>Демонтаж джакузи производится в несколько этапов. Отключается от системы водопровода, обесточивается, если есть подача энергии, а затем снимается с креплений. Делать нужно бережно и аккуратно.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/demontazh-vodonagrevatelya.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Демонтаж водонагревателя</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 650 {rub} / шт</a></div>
            </div>
            <p>Демонтаж водонагревателя или бойлера производится следующим образом: сливается вода из емкости, если она там есть, отключается от электроснабжения и снимается с креплений. Важно не повредить стены.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/demontazh-polotencesushitelya.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Демонтаж полотенцесушителя</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 550 {rub} / шт</a></div>
            </div>
            <p>Демонтаж полотенцесушителя дело хлопотное и непростое, особенно если речь идет о чугунных образцах. Необходимо срезать змеевик, демонтировать трубы, а предварительно - слить воду из системы.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/ustanovka-unitaza-i-rakoviny-v-sanuzle.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Установка унитаза и раковины в санузле</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 900 {rub} / шт</a></div>
            </div>
            <p>Установка унитаза производится путем крепления к полу, монтажа гофры, либо с возведением короба, если речь идет об инсталляции. Раковина должна быть подключена к трубам и навешена ровно по уровню.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/ustanovka-dushevoj-kabiny-s-gidromassazhem.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Установка душевой кабины с гидромассажем</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 7000 {rub}</a></div>
            </div>
            <p>Установка душевой кабины с гидромассажем выполняется в несколько этапов. Во-первых, осуществляется сборка всех элементов с параллельным подключением к коммуникациям. Затем кабинку герметизируют и проверяют.</p>
          </div>
        </article>
      </div>
    )
  }
}

export default TabFour;
