import React, { PropTypes } from 'react';
import Loader from '../../components/UIElements/Loader/Loader';
import MobileAdvanced from '../../components/UIElements/Mobile/MobileAdvanced';
import Header from '../../components/Header/Header';
import FooterAdvanced from '../../components/Footer/FooterAdvanced';
import RightSidebar from '../../components/UIElements/RightSidebar/RightSidebar';
import image1 from './posts/2016/12/18/images/derevyannyj-dom-iz-listvennicy.jpg';
import image2 from './posts/2017/01/laminat-ili-plitka-pvh/images/pvh.jpg';

const Entities = require('html-entities').XmlEntities;

class Blog extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.number,
  };

  render() {
    const entities = new Entities();
    const q = entities.decode('&quot;');
    return (
      <div>
        <Loader />
        <div id="wrapper" className="wrapper_container">
          <MobileAdvanced />
          <Header />
          <div className="mad_page_title paralax_image_bg1 v_align_center_blocks">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2>{this.props.title}</h2>
                  <div className="mad_breadcrumbs">
                    <nav>
                      <a href="/">Главная</a>{this.props.title}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="content">
            <div className="mad_section">
              <div className="container">
                <div className="row">
                  {/* Main content */}
                  <div id="main" className="col-md-8">
                    {/* Image post */}
                    <div className="mad_blog_post">
                      <figure>
                        <img src={image2} alt="Ламинат или плитка ПВХ? | Каждый Метр" />
                        <div className="mad_post_date">
                          <div className="date">7 / ЯНВ / 2017</div>
                        </div>
                      </figure>
                      <div className="mad_post_content clearfix">
                        <div className="mad_post_info">
                          <h2><a href="/laminat-ili-plitka-pvh">Ламинат или плитка ПВХ?</a></h2>
                          <div className="mad_post_action">
                            <a href="#" className="admin">Admin</a>
                            {/* <a href="#" className="days">6 дней назад</a> */}
                            <a href="#" className="comment">нет коментариев</a>
                          </div>
                          <p>Трудный вопрос, возникающий как айсберг перед счастливым обладателем
                            только что купленной квартиры, свежепостроенного дома,
                            или отчаянным человеком, решившим заняться ремонтом. Что выбрать:
                            да так, чтобы себе комфортно и гостям на зависть?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mad_blog_post">
                      <figure>
                        <img src={image1} alt="Деревянный дом из лиственницы | Каждый Метр" />
                        <div className="mad_post_date">
                          <div className="date">18 / ДЕК / 2016</div>
                        </div>
                      </figure>
                      <div className="mad_post_content clearfix">
                        <div className="mad_post_info">
                          <h2><a href="/derevyannyj-dom-iz-listvennicy">Деревянный дом из лиственницы</a></h2>
                          <div className="mad_post_action">
                            <a href="#" className="admin">Admin</a>
                            {/* <a href="#" className="days">6 дней назад</a> */}
                            <a href="#" className="comment">нет коментариев</a>
                          </div>
                          <p>Многие наслышаны об удивительных свойствах лиственницы,
                            но не все знают, что именно в России строительство дома
                            из этого материала намного доступнее, чем в Европе. Почему?
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Slider post */}
                    <div className="mad_blog_post">
                      {/* Carousel */}
                      <div className="carousel_type_3 relative">
                        <div className="mad_post_date">
                          <div className="date">19 / ДЕК / 2016</div>
                        </div>
                        <div className="owl-carousel" data-max-items={1}>
                          {/* Slide */}
                          <div>
                            {/* Carousel Item */}
                            <figure>
                              <img src="images/blog/2016/12/klimalan-luchshij-uteplitel-dlya-sruba.jpg" alt="" />
                            </figure>
                            {/* /Carousel Item */}
                          </div>
                          {/* /Slide */}
                          {/* Slide */}
                          <div>
                            {/* Carousel Item */}
                            <figure>
                              <img src="images/blog/2016/12/klimalan-luchshij-uteplitel-dlya-sruba_700.jpg" alt="" />
                            </figure>
                            {/* /Carousel Item */}
                          </div>
                          {/* /Slide */}
                        </div>
                      </div>
                      <div className="mad_post_content clearfix">
                        <div className="mad_post_info">
                          <h2><a href="/klimalan-luchshij-uteplitel-dlya-sruba">{q}Клималан{q} - лучший утеплитель для сруба</a></h2>
                          <div className="mad_post_action">
                            <a href="#" className="admin">Admin</a>
                            <a href="#" className="days">5 дней назад</a>
                            <a href="#" className="comment">нет коментариев</a>
                          </div>
                          <p>Традиции хороши там, где нет лучшей замены.
                            Если речь идёт о строительстве деревянного дома,
                            то традиционные утеплители для сруба
                            (джут, лён, вата из полимеров и т.д.) - это лишь предтеча
                            появления качественного, долговечного, экологичного
                            строительного материала - утеплителя {q}Клималан{q}.</p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="mad_pagination_section">
                      <a href="#" className="current">1</a>
                      <a href="#">2</a>
                      <a href="#">3</a>
                      <a href="#">...</a>
                      <a href="#" className="icon-left-open-1" />
                      <a href="#" className="icon-right-open-1" />
                    </div> */}
                  </div>
                  <RightSidebar />
                </div>
              </div>
            </div>
          </div>
          <FooterAdvanced />
        </div>
      </div>
    );
  }
}

export default Blog;
