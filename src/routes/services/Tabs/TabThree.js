import React from 'react';
const getSymbolFromCurrency = require('currency-symbol-map').getSymbolFromCurrency;

class TabThree extends React.Component {
  render() {
    const rub = getSymbolFromCurrency('RUB');
    return(
      <div>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/montazh-stropil.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Монтаж стропил</h5>
                <span className="days">Minimal Time Dur : 1 HOUR</span>
              </div>
              <div className="align_right"><a href="#">от 150 {rub} / м&sup2;</a></div>
            </div>
            <p>Монтаж стропил производится для создания каркаса при возведении кровельных покрытий, основанных на стропильной системе - в основном двускатных крыш. В качестве материала используется дерево.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/montazh-potolochnyh-balok-perekrytiya.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Монтаж потолочных балок перекрытия</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 400 {rub} / шт</a></div>
            </div>
            <p>Потолочные балки перекрытия активно применяются при строительстве современных деревянных домов, бань и иных хозяйственных построек. Задача балок - обеспечивать прочность потолка, опираясь на стены.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/obshivka-fasada-imitaciej-brusa.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Обшивка фасада имитацией бруса</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 500 {rub} / м&sup2;</a></div>
            </div>
            <p>Обшивка фасада имитацией бруса позволяет придать зданию вид деревянной постройки, применив при этом долговечные материалы. Монтаж осуществляется на каркас, внутри которого можно поместить утеплитель.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/montazh-ulichnoj-lestnicy.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Монтаж уличной лестницы (бетон с армированием)</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 2000 {rub} / м&sup3;</a></div>
            </div>
            <p>Монтаж уличной лестницы выполняется путем заливки бетона, с армированием его обвязанной арматурой. Такой способ не только экономичен, но и позволяет получить очень прочную и долговечную конструкцию.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/demontazh-frontona.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Демонтаж фронтона</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 200 {rub} / п.м.</a></div>
            </div>
            <p>Демонтаж фронтона производится, когда необходимо расчистить место для новых финишных покрытий и подготовить поверхность. Работа часто ведется на высоте. Применяются в основном ручные инструменты.</p>
          </div>
        </article>
      </div>
    )
  }
}

export default TabThree;
