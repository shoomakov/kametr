import React from 'react';
const getSymbolFromCurrency = require('currency-symbol-map').getSymbolFromCurrency;

class TabSix extends React.Component {
  render() {
    const rub = getSymbolFromCurrency('RUB');
    return(
      <div>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/razmyvka-zachistka-potolka.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Размывка, зачистка потолка</h5>
                <span className="days">Minimal Time Dur : 1 HOUR</span>
              </div>
              <div className="align_right"><a href="#">от 100 {rub} / м&sup2;</a></div>
            </div>
            <p>Наши специалисты выполнят работы по очистке потолка от побелки, старой краски, шпатлевки, штукатурки и иных покрытий, которые могут препятствовать нормальному ходу ремонта. Работаем безопасными материалами.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/demontazh-lepniny.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Демонтаж лепнины</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 170 {rub} / п.м.</a></div>
            </div>
            <p>Демонтаж лепнины с потолка и стен производится с применением инструментов, позволяющих избежать лишнего повреждения поверхностей. Иногда лепнина бывает довольно твердой, поэтому применяются мощные инструменты.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/ustrojstvo-figurnogo-potolka.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Устройство фигурного потолка</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 1400 {rub} / м&sup2;</a></div>
            </div>
            <p>Устройство фигурного потолка - очень сложная и творческая работа. Мастера могут выполнить из гипсокартонных потолков любые фигуры - бабочку, звезду, корабль, волнообразные изображения, другие сложные сюжеты.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/otdelka-rustov.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Отделка рустов</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 170 {rub} / п.м.</a></div>
            </div>
            <p>Заделка рустов (стыков) на потолке - важный элемент отделочных работ, который позволит избежать неприятных последствий от "трещания" гипсокартона. Швы заделываются специальной штукатуркой и серпянкой.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/demontazh-potolochnyh-plintusov.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Демонтаж потолочных плинтусов</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 40 {rub} / п.м.</a></div>
            </div>
            <p>Бывает так, что потолочные плинтуса намертво приклеены к основе, а иногда еще и прикручены саморезами. Наши мастера смогут ловко и аккуратно демонтировать старые плинтуса, не повредив стен и потолка.</p>
          </div>
        </article>
      </div>
    )
  }
}

export default TabSix;
