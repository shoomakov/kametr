import React from 'react';
import imageMan from './images/women_457x524.png';

class About extends React.Component {
  render() {
    return(
      <div id="about">
        <div className="mad_section inset_none v_align_center_blocks">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <figure className="section_image align_right">
                  <img src={imageMan} alt />
                </figure>
              </div>
              <div className="col-md-6">
                <div className="mad_section_container">
                  <article>
                    <h3 className="mad_title_style1">Строительная компания</h3>
                    <h2>"Каждый метр"</h2>
                    <p>Компания "Каждый метр" - это строительная организация, где работают профессионалы с огромным опытом, которые смогут обеспечить нашим клиентам качественный ремонт квартир под ключ...</p>
                    <div className="mad_author">
                      <h3 className="mad_title_style2">АманДосов.</h3>
                      <span>Генеральный директор</span>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mad_section inset_none">
          <div className="mad_full_width_grid">
            <div className="row pattern_section">
              <div id="mad_item_second" className="col-md-6">
                <div className="mad_pattern bg_pattern_red clearfix">
                  <article className="f_right">
                    <h2>Остекление квартир</h2>
                    <span className="testclass">и загородных домов</span>
                    <p>В этом разделе Вы сможете ознакомиться с предложениями по остеклению квартир, частных домов коттеджей, офисов и производственных цехов. Представлен краткий перечень услуг и есть возможность скачать прайс.</p>
                    <a href="/osteklenie-pod-klyuch" className="mad_button style2">Подробней</a>
                  </article>
                </div>
              </div><div id="mad_item_first" className="col-md-6">
                <figure className="mad_img_wrap">
                  <img src="images/kottedg-7.jpg" alt />
                </figure>
              </div>
            </div>
            <div className="row pattern_section">
              <div className="col-md-6">
                <figure>
                  <img src="images/remont.jpg" alt />
                </figure>
              </div>
              <div className="col-md-6">
                <div className="mad_pattern bg_pattern_dark">
                  <article>
                    <h2>Ремонтно-отделочные работы</h2>
                    <p>В этой категории описываются возможности компании "Каждый Метр" по проведению отделочных работ - от косметических до капитальных. Оказываем услуги по демонтажу и возведению перегородок, а также по отделке стен.</p>
                    <a href="/remont-i-otdelka-sten" className="mad_button style2">Подробней</a>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials */}

      </div>
    )
  }
}

export default About;
