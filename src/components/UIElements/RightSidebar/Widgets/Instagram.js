import React from 'react';

class Instagram extends React.Component {
  render() {
    return(
      <div className="mad_widget widget_instagram">
        <h5 className="widget_title">Instagram</h5>
        <ul data-instagram={6} data-instagram-username="mrgicucaus" className="instagram-feed" />
      </div>      
    )
  }
}

export default Instagram;
