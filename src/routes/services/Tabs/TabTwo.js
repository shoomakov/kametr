import React from 'react';
const getSymbolFromCurrency = require('currency-symbol-map').getSymbolFromCurrency;

class TabTwo extends React.Component {
  render() {
    const rub = getSymbolFromCurrency('RUB');
    return(
      <div>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/demontazh-lyustry.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Демонтаж люстры</h5>
                <span className="days">Minimal Time Dur : 1 HOUR</span>
              </div>
              <div className="align_right"><a href="#">от 270 {rub} / шт</a></div>
            </div>
            <p>Демонтаж люстры - важное и ответственное дело, которое лучше производить усилиями профессионалов. Производится отключение напряжения, люстра демонтируется так, чтобы не повредить контакты и элементы.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/demontazh-schetchika.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Демонтаж счетчика</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 600 {rub} / шт</a></div>
            </div>
            <p>Демонтаж электрического счетчика производится путем отключения оборудования в распределительном щитке. Эта работа связана с большим риском для жизни, поэтому ее должен проводить умелый электрик.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/montazh-ehlektroshchita.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Монтаж электрощита</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 1700 {rub} / шт</a></div>
            </div>
            <p>Монтаж квартирного электрощита - одна из самых важных и трудозатратных процедур, ведь нужно будет смонтировать коробку, подключить автоматы, завести вводной кабель и сформировать группы подачи напряжения.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/ustanovka-reostata-teplogo-pola.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Установка реостата теплого пола</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 650 {rub} / шт</a></div>
            </div>
            <p>Установка реостата теплого пола производится для регуляции температуры электрического теплого пола, наиболее комфортной для пользователя. Оборудование может иметь релейный или кнопочный варианты.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/montazh-transformatora.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Монтаж трансформатора</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 600 {rub} / шт</a></div>
            </div>
            <p>Монтаж трансформаторов осуществляется в помещениях, где имеется повышенная влажность - в бассейнах, санузлах или кухнях, а также совместно с электросчетчиком для проведения измерительных работ.</p>
          </div>
        </article>
      </div>

    )
  }
}

export default TabTwo;
