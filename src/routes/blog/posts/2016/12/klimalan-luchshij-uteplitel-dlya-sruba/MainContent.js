import React from 'react';
import CommentForm from '../../../../../../components/UIElements/CommentForm/CommentForm';
import Carousel from '../../../../../../components/Content/Services/Carousel/Carousel';


class MainContent extends React.Component {
  render() {
    return (
      <main id="main" className="col-md-8">
        <div className="mad_blog_post blog_single_post">
          <figure>
            <img src="images/blog/2016/12/klimalan-luchshij-uteplitel-dlya-sruba.jpg" alt="" />
            <div className="mad_post_date">
              <div className="date">18 / ДЕК / 2016</div>
            </div>
          </figure>
          <div className="mad_post_content clearfix">
            <div className="mad_post_info">
              <h4><a href="#">Инновационный строительный материал обеспечивает в деревянном доме тепло, комфорт и тишину.</a></h4>
              <div className="mad_post_action">
                <a href="#" className="admin">Admin</a>
                <a href="#" className="days">6 дней назад</a>
                <a href="#" className="comment">нет коментариев</a>
              </div>
              <p className="first_letter_1"><span>Т</span>радиции хороши там, где нет лучшей замены. Если речь идёт о строительстве деревянного дома, то традиционные утеплители для сруба (джут, лён, вата из полимеров и т.д.) - это лишь предтеча появления качественного, долговечного, экологичного строительного материала - утеплителя "Клималан".</p>
            </div>
          </div>
          <div className="mad_post_text">
            <h4>Что такое "Клималан"?</h4>
            <div className="clearfix">
              <figure className="img_align_left">
                <img src="images/blog/2016/12/klimalan-luchshij-uteplitel-dlya-sruba_256.jpg" />
              </figure>
              <p>"Клималан" - это полноценный строительный материал, применяемый для утепления межвенцового пространства. Его делают из натуральной овечьей шерсти, которую промывают в особом солевом растворе. Благодаря такой обработке шерсть не теряет положительных свойств (экологичность, антиаллергенность), но при этом становится "неинтересной" разного рода вредителям.</p>
            </div>
            <br/>
            <div className="mad_item_offset">
              <div className="row">
                <div className="col-sm-12">
                  <div className="full_width_bg_pattern_2 bg_pattern_dark mad_banner_1 size2">
                    <div className="v_align_center_section">
                      <div><h2 className="mad_title_style1">Хотите подробней узнать что такое "Клималан"?</h2></div>
                      <div className="align_right"><a href="#" className="mad_button style2">Да</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4>Тепло и долговечность</h4>
            <p>Волокна овечьей шерсти похожи на маленькие пружинки, которые не только не слёживаются, но и даже распрямляются сильнее под воздействием влаги и ветра. Вот почему упругий и эластичный "Клималан" легко заполняет даже те трещины, которые могут появиться в процессе усадки дома. Тем самым он обеспечивает полноценную защиту строения от проникновения влаги и холодного воздуха. С годами шерсть не теряет своих полезных качеств, поэтому срок её службы приравнивается к сроку службы самого дома.</p>
            <figure className="mad_item_offset2">
              <img src="images/blog/2016/12/klimalan-luchshij-uteplitel-dlya-sruba_700.jpg" />
            </figure>
            <br/>
            <div className="clearfix">
              <h4>О чём умалчивают строители</h4>
              <p>Ещё один неоспоримый плюс использования "Клималана": он обеспечивает потрясающий звуковой комфорт жильцам дома. Любая древесина (оцилиндрованное бревно, профилированный или клеёный брус) в зависимости от сезона будет расширяться и сужаться. Объёмное изменение деталей ведёт к появлению зазоров и трещин, которые ослабляют звукоизоляцию помещений внутри дома. Особенно остро эта проблема стоит в домах из клеёного бруса, поскольку там нет никакой прокладки в стыках деталей межкомнатных перегородок. В итоге владельцам дома приходится жить с тем, что трансляция футбольного матча из гостиной или звуки текущей в ванной воды слышны во всех спальнях. Об этом умалчивает большинство строителей деревянных домов. И только "Клималан" гарантирует по-настоящему качественную звукоизоляцию, которая не ухудшится в течении всего срока эксплуатации дома!</p>
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
    )
  }
}

export default MainContent;
