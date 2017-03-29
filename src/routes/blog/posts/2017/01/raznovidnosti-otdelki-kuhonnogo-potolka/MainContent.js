import React from 'react';
import CommentForm from '../../../../../../components/UIElements/CommentForm/CommentForm';
import Carousel from '../../../../../../components/Content/Services/Carousel/Carousel';
import image1 from './images/otdelka-potolka-na-kuhne.jpg';
import image2 from './images/otdelka.jpg';

class MainContent extends React.Component {
  render() {
    return (
      <main id="main" className="col-md-8">
        <div className="mad_blog_post blog_single_post">
          <figure>
            <img src={image1} alt="Отделка потолка на кухне | Каждый метр" />
            <div className="mad_post_date">
              <div className="date">12 / ЯНВ / 2017</div>
            </div>
          </figure>
          <div className="mad_post_content clearfix">
            <div className="mad_post_info">
              {/* <h2>Каким должен быть пол в доме?</h2> */}
              <div className="mad_post_action">
                <a href="#" className="admin">Admin</a>
                {/* <a href="#" className="days">6 дней назад</a> */}
                <a href="#" className="comment">нет коментариев</a>
              </div>
              <p className="first_letter_1">
                <span>Б</span>ольшинству людей известно, что для отделки кухни
                следует использовать такой строительный материал,
                который легко отмывается. Кроме того, он не должен впитывать жир
                и копоть. На строительных рынках существует большой ассортимент
                такого материала и поэтому подобрать для своей кухни что-то подходящее,
                будет достаточно просто. При выборе материала для потолка необходимо помнить,
                что на него будет воздействовать температура и пар.
              </p>
            </div>
          </div>
          <div className="mad_post_text">
            <div className="clearfix">
              <figure className="img_align_left">
                <img src={image2} alt="Отделка потолка | Каждый Метр" />
              </figure>
              <p>
                Побелка и эмульсионная краска. Эти способы отделки кухонного
                потолка являются не слишком действенными. Поскольку такие
                стройматериалы недолговечные и нуждаются в тщательной подготовке поверхности.
                Помимо этого, по своей практичности и надёжности это тоже не самый лучший вариант.
                Так как побелка довольно быстро желтеет, вам необходимо будет достаточно
                часто заниматься перекрашиванием потолка. А это, в свою очередь,
                лишние финансовые затраты и трата времени.
              </p>
            </div>
            <br />
            <div className="mad_item_offset">
              <div className="row">
                <div className="col-sm-12">
                  <div className="full_width_bg_pattern_2 bg_pattern_dark mad_banner_1 size2">
                    <div className="v_align_center_section">
                      <div><h2 className="mad_title_style1">Натяжные потолки</h2></div>
                      <div className="align_right"><a href="/montazh-natyazhnyh-potolkov" className="mad_button style2">Перейти</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              Применение водоэмульсионных обоев. Благодаря такому качественному
              покрытию можно с лёгкостью скрыть все имеющиеся дефекты потолка.
              Помимо этого, такие обои хорошо отмываются от грязи и жира.
              Следует отметить, что имеется большой ассортимент данного материала,
              поэтому всегда можно подобрать что-то подходящее. Водоэмульсионные
              обои бывают разные по цвету и своей фактуре.
            </p>
            <figure className="mad_item_offset2">
              {/* <img src={image3} alt="Ремонт и отделка полов | Каждый метр" /> */}
            </figure>
            <br />
            <div className="clearfix">
              <p>
                Отделка плиткой из пенополистирола. Такой материал очень легко
                крепить к потолку. Плитка обладает прекрасной эластичностью и
                способна скрыть существующие погрешности потолка. Она может
                быть разной по цвету и с разным узором.
              </p>
              <p>
                Подвесной потолок. Этот вид отделки потолка является оригинальным
                и очень красивым. Перед началом отделочных работ не следует
                избавляться от имеющихся дефектов на основном потолке,
                поскольку они будут скрыты подвесной конструкцией.
                Внутри этого устройства будет проведено освещение,
                сделана звукоизоляция, а также проложены различные коммуникации.
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
            <div className="mad_post_author"><img src="images/100x100_admin.png" alt="" /></div>
            {/* <p>I am a Owner of Spa &amp; Salon &amp; <br />
              This is My own Design Studio <br />
              Say Hello me on Skype</p> */}
            <Carousel />
            <div className="mad_admin">Jhon Doe <span>Owner - Spa &amp; Salon</span></div>
          </div>
          {/* CommentSection */}
          <CommentForm />
        </div>
      </main>
    );
  }
}

export default MainContent;
