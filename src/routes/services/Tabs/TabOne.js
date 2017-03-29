import React from 'react';
const getSymbolFromCurrency = require('currency-symbol-map').getSymbolFromCurrency;

class TabOne extends React.Component {
  render() {
    const rub = getSymbolFromCurrency('RUB');
    return(
      <div>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/montazh-zerkalnyh-podvesnyh-potolkov.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Монтаж зеркальных подвесных потолков</h5>
                <span className="days">Minimal Time Dur : 1 HOUR</span>
              </div>
              <div className="align_right"><a href="#">от 1200 {rub} / м&sup2;</a></div>
            </div>
            <p>Монтаж зеркальных подвесных потолков нескольких типов: фурнитурных (применяется декоративная фурнитура для закрытия швов), Армстронг (модульная конструкция), фацетных (монтаж потолочных плиток по диагонали).</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/armirovanie-potolka.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Армирование потолка</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 250 {rub} / м&sup2;</a></div>
            </div>
            <p>Армирование потолка осуществляется с целью его укрепления и создания возможности для нанесения выравнивающих покрытий: штукатурки или шпатлевки. Для штукатурки используют сетку, для шпатлевки - стеклохолст.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/oshkurivanie-potolka.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Ошкуривание потолка</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 80 {rub} / м&sup2;</a></div>
            </div>
            <p>Ошкуривание потолков производится для устранения неровностей, вмятин и царапин на поверхности финишной шпатлевки, чтобы предотвратить возникновение дефектов при окрашивании. Применяются абразивные материалы.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/pokraska-potolka-maslyanoj-kraskoj.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Покраска потолка масляной краской</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 220 {rub} / м&sup2;</a></div>
            </div>
            <p>Покраска потолков масляной краской выполняется для придания ему завершающего вида. Краска наносится на подготовленные и ошкуренные поверхности, придает потолку глянцевый блеск и эстетичный вид.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/nanesenie-betonokontakta.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Нанесение бетоноконтакта</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 100 {rub} / м&sup2;</a></div>
            </div>
            <p>Нанесение бетоноконтакта на потолок производится с целью максимально улучшить адгезию поверхности, в случаях, когда имеется старая масляная краска, а удаление ее нерационально. Применяется валик.</p>
          </div>
        </article>
      </div>
    )
  }
}

export default TabOne;
