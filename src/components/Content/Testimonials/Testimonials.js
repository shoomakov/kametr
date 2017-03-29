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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod dignissim massa ut venenatis. Vivamus eleifend sem id ligula sollicitudin feugiat.
                          </p>
                          <div className="mad_author style2">
                            <h3 className="mad_title_style2">Бобба Фетт</h3>
                            <span> Founder and CEO</span>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod dignissim massa ut venenatis. Vivamus eleifend sem id ligula sollicitudin feugiat.
                          </p>
                          <div className="mad_author style2">
                            <h3 className="mad_title_style2">Кайло Рен</h3>
                            <span> Founder and CEO</span>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod dignissim massa ut venenatis. Vivamus eleifend sem id ligula sollicitudin feugiat.
                          </p>
                          <div className="mad_author style2">
                            <h3 className="mad_title_style2">Хан Соло</h3>
                            <span> Founder and CEO</span>
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
