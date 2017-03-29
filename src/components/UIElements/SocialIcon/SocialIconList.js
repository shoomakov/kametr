import React from 'react';

class SocialIconList extends React.Component {
  render() {
    return(
      <div className="social_icon_list">
        <ul>
          <li><a href="#" className="soc_icon icon-facebook" /></li>
          <li><a href="#" className="soc_icon icon-twitter" /></li>
          <li><a href="#" className="soc_icon icon-gplus" /></li>
          <li><a href="#" className="soc_icon icon-tumblr" /></li>
          <li><a href="#" className="soc_icon icon-instagram" /></li>
          <li><a href="#" className="soc_icon icon-pinterest" /></li>
        </ul>
      </div>
    )
  }
}

export default SocialIconList;
