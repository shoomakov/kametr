import React, { PropTypes } from 'react';
import Loader from '../../components/UIElements/Loader/Loader';
import MobileAdvanced from '../../components/UIElements/Mobile/MobileAdvanced';
import Header from '../../components/Header/Header';
import FooterAdvanced from '../../components/Footer/FooterAdvanced';
import TabsNavigation from './Tabs/TabsNavigation';
import TabOne from './Tabs/TabOne';
import TabTwo from './Tabs/TabTwo';
import TabThree from './Tabs/TabThree';
import TabFour from './Tabs/TabFour';
import TabFive from './Tabs/TabFive';
import TabSix from './Tabs/TabSix';


class Uslugi extends React.Component {
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
                  <h2>Услуги</h2>
                  <div className="mad_breadcrumbs">
                    <nav>
                      <a href="/">Главная</a>Услуги
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
                    <div className="tabs vertical vertical_style2 clearfix">
                      <TabsNavigation/>
                      {/*tabs content*/}
                      <div className="tabs_content mad_smooth_list">

                        <h3 id="part_1">Заказ натяжных потолков</h3>
                        <TabOne/>

                        <h3 id="part_2">Услуги электромонтажа</h3>
                        <TabTwo/>

                        <h3 id="part_3">Ремонтные общестроительные работы</h3>
                        <TabThree/>

                        <h3 id="part_4">Виды ремонта санузла</h3>
                        <TabFour/>

                        <h3 id="part_5">Виды плотницких работ</h3>
                        <TabFive/>

                        <h3 id="part_6">Капитальный ремонт потолка</h3>
                        <TabSix/>
                      </div>
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

export default Uslugi;
