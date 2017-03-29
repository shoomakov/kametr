import React from 'react';
import image1 from '../../../routes/blog/posts/2016/12/18/images/derevyannyj-dom-iz-listvennicy.jpg';

class Blog extends React.Component {
  render() {
    return (
      <div id="blog">
        <div className="mad_section paralax_image_bg1">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="mad_section_container">
                  <h3 className="mad_title_style1">Блог</h3>
                  <h2 className="mad_separator style2">Последние новости</h2>
                </div>
                {/* Carousel */}
                <div className="carousel_type_2">
                  <div className="owl-carousel style2" data-max-items={2}>
                    {/* Slide */}
                    <div>
                      {/* Carousel Item */}
                      <div className="mad_blog_post">
                        <figure>
                          <img src={image1} alt="" />
                          <div className="mad_post_date">
                            <div className="date">18 / ДЕК / 2016</div>
                          </div>
                        </figure>
                        <div className="mad_post_content clearfix">
                          <div className="mad_post_info">
                            <h2><a href="/derevyannyj-dom-iz-listvennicy">Деревянный дом из лиственницы</a></h2>
                            <div className="mad_post_action">
                              <a href="#" className="admin">Admin</a>
                              <a href="#" className="days">Час назад</a>
                              <a href="#" className="comment">Нет коментариев</a>
                            </div>
                            <p>Как стройматериал лиственница используется очень давно. Общеизвестен факт, что Венеция построена на сваях из лиственницы, и они с течением времени приобрели крепость бетона. По сей день в Европе лиственница считается элитным строительным материалом. Но в России благодаря Западной и Центральной Сибири, где она произрастает, лиственницу можно сравнительно недорого купить и доставить к местам обработки и строительства.</p>
                          </div>
                        </div>
                      </div>
                      {/* /Carousel Item */}
                    </div>
                    {/* /Slide */}
                    {/* Slide */}
                    <div>
                      {/* Carousel Item */}
                      <div className="mad_blog_post">
                        <figure>
                          <img src="images/blog/2016/12/klimalan-luchshij-uteplitel-dlya-sruba.jpg" alt="" />
                          <div className="mad_post_date">
                            <div className="date">19 / ДЕК / 2016</div>
                          </div>
                        </figure>
                        <div className="mad_post_content clearfix">
                          <div className="mad_post_info">
                            <h2><a href="/klimalan-luchshij-uteplitel-dlya-sruba">"Клималан" - лучший утеплитель для сруба</a></h2>
                            <div className="mad_post_action">
                              <a href="#" className="admin">Admin</a>
                              <a href="#" className="days">Час назад</a>
                              <a href="#" className="comment">Нет коментариев</a>
                            </div>
                            <p>"Клималан" - это полноценный строительный материал, применяемый для утепления межвенцового пространства. Его делают из натуральной овечьей шерсти, которую промывают в особом солевом растворе. Благодаря такой обработке шерсть не теряет положительных свойств (экологичность, антиаллергенность), но при этом становится "неинтересной" разного рода вредителям.</p>
                          </div>
                        </div>
                      </div>
                      {/* /Carousel Item */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
