import React from 'react';
import image_1 from '../images/image_1_70.jpg';
import image_2 from '../images/image_2_70.jpg';

class RecentPosts extends React.Component {
  render() {
    return(
      <div className="mad_widget widget_posts">
        <h5 className="widget_title">Популярные посты</h5>
        <div className="mad_post_section">
          <div className="mad_post_item">
            <figure><a href="/derevyannyj-dom-iz-listvennicy"><img src={image_1} alt /></a></figure>
            <div className="post_text_block">
              <a href="/derevyannyj-dom-iz-listvennicy">Деревянный дом из лиственницы</a>
            </div>
          </div>
          <div className="mad_post_item">
            <figure><a href="/klimalan-luchshij-uteplitel-dlya-sruba"><img src={image_2} alt /></a></figure>
            <div className="post_text_block">
              <a href="/klimalan-luchshij-uteplitel-dlya-sruba">"Клималан" - лучший утеплитель для сруба</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RecentPosts;
