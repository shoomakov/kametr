import React from 'react';
const getSymbolFromCurrency = require('currency-symbol-map').getSymbolFromCurrency;

class TabFive extends React.Component {
  render() {
    const rub = getSymbolFromCurrency('RUB');
    return(
      <div>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/montazh-antresoli.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Монтаж антресоли</h5>
                <span className="days">Minimal Time Dur : 1 HOUR</span>
              </div>
              <div className="align_right"><a href="#">от 2700 {rub} / шт</a></div>
            </div>
            <p>Монтаж антресолей - необходимая мера для тех, кому нужно дополнительное место для хранения вещей. Антресоли могут быть готовые сборные. Также их можно создать из дерева, ГКЛ, ДСП и других материалов.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/izgotovlenie-mezhkomnatnyh-arok.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Изготовление межкомнатных арок</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 4000 {rub} / шт</a></div>
            </div>
            <p>Межкомнатные арки изготавливаются из гипсокартона, который идеально подходит для этой роли. Ему можно придать практически любую форму, затем покрасить, наклеить на него обои, либо обложить декоративной плиткой.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/montazh-arki-gotovoj-v-proeme.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Монтаж арки готовой в проеме</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 2800 {rub} / шт</a></div>
            </div>
            <p>Монтаж готовой арки в проеме дело простое, если обладать нужными знаниями и оборудованием. Используя готовые коробки можно установить декоративные арки из МДФ, массива, гипсокартона или натурального дерева.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/ustanovka-okonnyh-ram.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Установка оконных рам</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 2700 {rub} / шт</a></div>
            </div>
            <p>Может осуществляться установка деревянных, пластиковых или оконных рам типа евроокна. В края оконного проема вбиваются соответствующие распоры, а остальная площадь заполняется монтажной пеной.</p>
          </div>
        </article>
        <article className="smooth_item">
          <figure>
            <img src="images/uslugi/170x170/ustanovka-okonnyh-otlivov.jpg" alt />
          </figure>
          <div className="smooth_item_details">
            <div className="item_title">
              <div>
                <h5>Установка оконных отливов</h5>
                <span className="days">Minimal Time Dur : 2 HOURS</span>
              </div>
              <div className="align_right"><a href="#">от 150 {rub} / п.м.</a></div>
            </div>
            <p>Оконные отливы устанавливаются снаружи оконных проемов, а также на балконах для отвода дождевой воды и снега. Монтаж производится на специальные саморезы. В некоторых случаях нужно серьезное оборудование.</p>
          </div>
        </article>
      </div>
    )
  }
}

export default TabFive;
