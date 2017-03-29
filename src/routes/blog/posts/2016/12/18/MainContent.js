import React from 'react';
import CommentForm from '../../../../../../components/UIElements/CommentForm/CommentForm';
import Carousel from '../../../../../../components/Content/Services/Carousel/Carousel';
import image_1 from './images/derevyannyj-dom-iz-listvennicy.jpg';
import image_2 from './images/derevyannyj-dom-iz-listvennicy_256.jpg';
import image_3 from './images/derevyannyj-dom-iz-listvennicy_304.jpg';


class MainContent extends React.Component {
  render() {
    return(
      <main id="main" className="col-md-8">
        <div className="mad_blog_post blog_single_post">
          <figure>
            <img src={image_1} alt />
            <div className="mad_post_date">
              <div className="date">18 / ДЕК / 2016</div>
            </div>
          </figure>
          <div className="mad_post_content clearfix">
            <div className="mad_post_info">
              {/* <h2><a href="#">Image Blog Post Title Here</a></h2> */}
              <div className="mad_post_action">
                <a href="#" className="admin">Admin</a>
                <a href="#" className="days">6 дней назад</a>
                <a href="#" className="comment">нет коментариев</a>
              </div>
              <p className="first_letter_1"><span>К</span>ак стройматериал лиственница используется очень давно. Общеизвестен факт, что Венеция построена на сваях из лиственницы, и они с течением времени приобрели крепость бетона. По сей день в Европе лиственница считается элитным строительным материалом. Но в России благодаря Западной и Центральной Сибири, где она произрастает, лиственницу можно сравнительно недорого купить и доставить к местам обработки и строительства.</p>
            </div>
          </div>
          <div className="mad_post_text">
            <h4>Строить из лиственницы - правильно!</h4>
            <div className="clearfix">
              <figure className="img_align_left">
                <img src={image_2} />
              </figure>
              <p>В силу своих свойств лиственница превосходит такие распространенные в строительстве деревянных домов материалы, как сосна и кедр. Она более тяжелая и плотная, что обеспечивает долговечность конструкции. А благодаря фитонцидным свойствам смолы в доме из лиственницы всегда будет здоровый, полезный воздух. Что важно знать о достоинствах лиственницы с точки зрения строительства? В первую очередь надо учитывать, что у неё довольно низкая усадка, и это обеспечивает предсказуемое поведение конструкции дома. Сравните: усадка, например, у неправильно сконструированного дома из сосны бывает большой и непрогнозируемой - от 12 до 22см. У лиственницы таких показателей не будет никогда, потому что это более плотный материал. Максимальная усадка - 10 см на два этажа дома.</p>
            </div>
            <br/>
            <div className="mad_item_offset">
              <div className="row">
                <div className="col-sm-12">
                  <div className="full_width_bg_pattern_2 bg_pattern_dark mad_banner_1 size2">
                    <div className="v_align_center_section">
                      <div><h2 className="mad_title_style1">Хотите получить консультацию об удивительных свойствах лиственницы?</h2></div>
                      <div className="align_right"><a href="#" className="mad_button style2">Да</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>Конечно, с лиственницей сложнее работать с точки зрения монтажа, поскольку вес конструкции из-за плотности древесины значительно больше, а если какую-то деталь повело или изогнуло, то привести её в идеальное положение будет трудно из-за жёсткости материала.</p>
            <div className="clearfix">
              <figure className="img_align_right">
                <img src={image_3} />
              </figure>
              <p>Неоспоримым плюсом можно считать декоративные свойства этой древесины: текстура внутренних стен дома из лиственницы гораздо богаче и интереснее, чем из сосны. Именно благодаря плотности её легче шлифовать и покрывать защитно-декоративными составами как снаружи, так и внутри дома (лиственница не впитывает их, как менее плотная сосна). Более того, например, в Германии лиственницу даже не красят. Снаружи дома она буреет, каменеет, становится интересного античного цвета, и фактически происходит консервация её поверхности.</p>
            </div>
          </div>
          <div className="mad_blog_category clearfix">
            {/* <div className="mad_tags">
              <span>Tags:</span>
              <a href="#">Beauty</a>,
              <a href="#">Hair</a>,
              <a href="#">Style</a>
            </div> */}
            <div className="mad_category">
              <span>Категория:</span>
              <a href="#">Нет</a>
            </div>
          </div>
          <div className="mad_post_nav clearfix">
            <div className="mad_post_options">
              <a href="#" className="icon-th">Вернуться к Блогу</a>
              <a href="#" className="icon-share-1 share_popup">Поделиться</a>
            </div>
            <div className="mad_post_dir">
              <a href="#" className="prev_post">Назад</a>
              <a href="#" className="next_post">Вперед</a>
            </div>
          </div>
          <div className="mad_blog_author_section mad_pattern bg_pattern_dark clearfix">
            <div className="mad_post_author"><img src="#" alt /></div>
              <Carousel />
          </div>
          {/* CommentSection */}
          <CommentForm />
        </div>
      </main>
    )
  }
}

export default MainContent;
