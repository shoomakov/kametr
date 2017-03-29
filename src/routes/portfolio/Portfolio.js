import React, { PropTypes } from 'react';
import Loader from '../../components/UIElements/Loader/Loader';
import MobileAdvanced from '../../components/UIElements/Mobile/MobileAdvanced';
import Header from '../../components/Header/Header';
import CategoryTwo from './Categories/CategoryTwo';
import CategoryThree from './Categories/CategoryThree';
import CategoryFour from './Categories/CategoryFour';
import FooterAdvanced from '../../components/Footer/FooterAdvanced';


class Portfolio extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.number,
  };

  render() {
    return (
      <div>
        <Loader/>
        <div id="wrapper" className="wrapper_container">
          <MobileAdvanced/>
          <Header/>
          <div className="mad_page_title paralax_image_bg1 v_align_center_blocks">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2>Портфолио</h2>
                  <div className="mad_breadcrumbs">
                    <nav>
                      <a href="/">Главная</a>Портфолио
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
                  <div className="col-sm-12">
                    <div className="align_center">
                      <h3 className="mad_title_style1">Наши</h3>
                      <h2>Последние работы</h2>
                    </div>
                    <div className="tabs_sort post_area var2 type2">
                      <div id="options">
                        <div id="filters" className="button-group js-radio-button-group">
                          <button className="is-checked" data-filter="*">Все</button>
                          <button data-filter=".category_2">Санузлы</button>
                          <button data-filter=".category_3">Кухни</button>
                          <button data-filter=".category_4">Другое</button>
                          {/* <button data-filter=".category_5">PHOTOGRAPHY</button> */}
                        </div>
                      </div>
                      <div className="isotope three_collumn clearfix post_news" data-isotope-options="{&quot;itemSelector&quot; : &quot;.item&quot;,&quot;layoutMode&quot; : &quot;masonry&quot;,&quot;transitionDuration&quot;:&quot;0.7s&quot;,&quot;masonry&quot; : {&quot;columnWidth&quot;:&quot;.item&quot;}}">
                        <CategoryTwo/>
                        <CategoryThree/>
                        <CategoryFour/>
                      </div>
                    </div>
                    <div className="align_center">
                      <a href="#" id="load_more" className="mad_button">Load More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterAdvanced/>
        </div>
      </div>
    );
  }
}

export default Portfolio;
