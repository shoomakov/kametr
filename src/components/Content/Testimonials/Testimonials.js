import React from 'react';

class Testimonials extends React.Component {
  render() {
    return(
      <div className="mad_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="mad_section_container mad_testimonials">
                <article>
                  <h3 className="mad_title_style1">Отзывы</h3>
                  <h2>Наших клиентов</h2>
                  {/* Carousel */}
                  <div className="carousel_type_1">
                    <div className="owl-carousel" data-max-items={1} data-autoplay="true">
                      {/* Slide */}
                      <div>
                        {/* Carousel Item */}
                        <blockquote>
                          <p>
                            Хочу порекомендовать фирму "Каждый Метр", как надежного подрядчика
                            на объекты любой сложности. Обращался уже дважды - первый раз они мне делали
                            "косметику" в квартире. Это было проверочное задание. Затем,
                            я им доверил ремонт в коттедже. Ребята не подвели и сделали мне шикарную отделку.
                            Если нужно качество, то обращайтесь только сюда.
                          </p>
                          <div className="mad_author style2">
                            <h3 className="mad_title_style2">Антон Гришанов</h3>
                          </div>
                        </blockquote>
                        {/* /Carousel Item */}
                      </div>
                      {/* /Slide */}
                      {/* Slide */}
                      <div>
                        {/* Carousel Item */}
                        <blockquote>
                          <p>
                            Компания "Каждый Метр" произвела у меня ремонт санузла.
                            Требовалось провести демонтаж стенки и объединить ванную с туалетом,
                            а также сделать полную отделку. Понравилось, что весь мусор
                            сразу складывали в мешки и выносили. Особо отмечу работу
                            плиточника - сделал все очень точно и красиво, это при том,
                            что запил на 45 градусов требовался.
                          </p>
                          <div className="mad_author style2">
                            <h3 className="mad_title_style2">Константин Сминов</h3>
                          </div>
                        </blockquote>
                        {/* /Carousel Item */}
                      </div>
                      {/* /Slide */}
                      {/* Slide */}
                      <div>
                        {/* Carousel Item */}
                        <blockquote>
                          <p>
                            Специалисты из этой компании делали у меня комплексную отделку квартиры в новостройке.
                            Учли все мои пожелания. Не тянули с проектом и сметой.
                            Помогли разобраться с вопросами по теплому полу,
                            когда я не мог выбрать между водяным и электрическим.
                            Отдельно скажу о ценах - соотношение с качеством отличное.
                          </p>
                          <div className="mad_author style2">
                            <h3 className="mad_title_style2">Михаил Сулейманов</h3>                            
                          </div>
                        </blockquote>
                        {/* /Carousel Item */}
                      </div>
                      {/* /Slide */}
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-md-6">
              <figure className="section_image align_right">
                <img src="images/565x520_img.jpg" alt />
              </figure>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonials;
