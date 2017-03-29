import React from 'react';
import CommentForm from '../../../../../../components/UIElements/CommentForm/CommentForm';
import Carousel from '../../../../../../components/Content/Services/Carousel/Carousel';
import image1 from './images/pvh.jpg';
import image2 from './images/laminat.jpg';
import image3 from './images/pic.jpg';

const Entities = require('html-entities').XmlEntities;


class MainContent extends React.Component {
  render() {
    const entities = new Entities();
    const q = entities.decode('&quot;');
    return (
      <main id="main" className="col-md-8">
        <div className="mad_blog_post blog_single_post">
          <figure>
            <img src={image1} alt="Ламинат или плитка ПВХ? | Каждый метр" />
            <div className="mad_post_date">
              <div className="date">07 / ЯНВ / 2017</div>
            </div>
          </figure>
          <div className="mad_post_content clearfix">
            <div className="mad_post_info">
              <h2>Каким должен быть пол в доме?</h2>
              <div className="mad_post_action">
                <a href="#" className="admin">Admin</a>
                {/* <a href="#" className="days">6 дней назад</a> */}
                <a href="#" className="comment">нет коментариев</a>
              </div>
              <p className="first_letter_1">
                <span>Т</span>рудный вопрос, возникающий как айсберг перед счастливым обладателем
                только что купленной квартиры, свежепостроенного дома, или отчаянным человеком,
                решившим заняться ремонтом. Что выбрать: да так,
                чтобы себе комфортно и гостям на зависть?
              </p>
            </div>
          </div>
          <div className="mad_post_text">
            <div className="clearfix">
              <figure className="img_align_left">
                <img src={image2} alt="Ламинат от компании Каждый Метр" />
              </figure>
              <p>Вот ведь дилемма: ламинат или плитка ПВХ? Да, конечно,
                ламинат завоевал сердца и полы миллионов. Смотрится очень дорого.
                Способен создать иллюзию натурального дерева или керамической плитки на полу.
                Красиво, стильненько и со вкусом. Он является достаточно прочным,
                натурален по составу, но не терпит воды. А плитка ПВХ - это,
                фактически, тот же самый линолеум, который веками лежал на полу
                у каждой бабушки, а ему ничего не было, даже если квартиру
                 {q}топили{q} нерадивые соседи сверху.
              </p>
            </div>
            <br />
            <div className="mad_item_offset">
              <div className="row">
                <div className="col-sm-12">
                  <div className="full_width_bg_pattern_2 bg_pattern_dark mad_banner_1 size2">
                    <div className="v_align_center_section">
                      <div><h2 className="mad_title_style1">Ремонт и отделка полов</h2></div>
                      <div className="align_right"><a href="/remont-i-otdelka-pola" className="mad_button style2">Перейти</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>Прочность - проверенная годами налицо, а точнее на полу.
              Не модно - подумаете вы и ошибетесь, потому что качество и
              долговечность всегда в тренде. Оба материала легко и быстро монтируются,
              однако ламинат требует профессионализма, иначе плохие по качеству стыки
              сыграют со временем не в вашу пользу, а плитку ПВХ сможет уложить даже новичок.
              Она не натуральна по своему составу, но экологична, не аллергенна и,
              возможно, совсем чуть-чуть уступает ламинату в красоте исполнения.
            </p>
            <figure className="mad_item_offset2">
              <img src={image3} alt="Ремонт и отделка полов | Каждый метр" />
            </figure>
            <br/>
            <div className="clearfix">
              <p>Несмотря на различия напольных покрытий, цена у обоих изделий
                колеблется примерно на одинаковом уровне за квадратный метр
                и начинается с отметки в 500 рублей. Планка стоимости возрастает
                от очевидных и привычных факторов: технологий,
                качества используемых материалов, модных тенденций.
              </p>
              <p>Предпочтения у каждого свои и весы для определения лидера - тоже,
                поэтому только после тщательного анализа и изучения вопроса
                можно прийти к разумному решению. В любом случае,
                ваш пол обретет новую жизнь и внесет яркие ноты в домашний интерьер.
              </p>
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
          <div className="mad_blog_author_section">
            <div className="mad_post_author"><img src="images/100x100_admin.png" alt /></div>
            {/* <p>I am a Owner of Spa &amp; Salon &amp; <br />
              This is My own Design Studio <br />
              Say Hello me on Skype</p> */}
              <Carousel/>
            <div className="mad_admin">Jhon Doe <span>Owner - Spa &amp; Salon</span></div>
          </div>
          {/* CommentSection */}
          <CommentForm/>
        </div>
      </main>
    )
  }
}

export default MainContent;
