import React from 'react';

class SharePopupHolder extends React.Component {
  render() {
    return(
      <div id="share_popup_holder">
        <div className="mad_popup">
          <h4>Поделиться постом:</h4>
          <div className="social_icon_list">
            <ul>
              <li><a href="#" className="soc_icon icon-facebook" /></li>
              <li><a href="#" className="soc_icon icon-twitter" /></li>
              <li><a href="#" className="soc_icon icon-gplus" /></li>
              <li><a href="#" className="soc_icon icon-pinterest" /></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SharePopupHolder;
