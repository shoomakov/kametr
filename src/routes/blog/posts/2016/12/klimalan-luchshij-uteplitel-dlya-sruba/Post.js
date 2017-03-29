import React, { PropTypes } from 'react';
import Loader from '../../../../../../components/UIElements/Loader/Loader';
import MobileAdvanced from '../../../../../../components/UIElements/Mobile/MobileAdvanced';
import Header from '../../../../../../components/Header/Header';
import FooterAdvanced from '../../../../../../components/Footer/FooterAdvanced';
import SharePopupHolder from '../../../../../../components/UIElements/SharePopupHolder/SharePopupHolder';
import RightSidebar from '../../../../../../components/UIElements/RightSidebar/RightSidebar';
import MainContent from './MainContent';


class PostOne extends React.Component {
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
                  <h2>{this.props.title}</h2>
                  <div className="mad_breadcrumbs">
                    <nav>
                      <a href="/">Главная</a><a href="/blog">Блог</a>{this.props.title}
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
                    <div className="mad_post_nav clearfix">
                      <div className="mad_post_options">
                        <a href="#" className="icon-th">Вернуться к Блогу</a>
                        <a href="#" className="icon-share-1 share_popup">Поделиться</a>
                      </div>
                      <div className="mad_post_dir">
                        <a href="#" className="prev_post">Следующая статья</a>
                        <a href="#" className="next_post">Предидущая статья</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <MainContent/>
                  <RightSidebar/>
                </div>
              </div>
            </div>
          </div>
          <FooterAdvanced/>
        </div>
        <SharePopupHolder/>
      </div>
    );
  }
}

export default PostOne;
