import React from 'react';

class Tweets extends React.Component {
  render() {
    return(
      <div className="mad_widget widget_twitter">
        <h5 className="widget_title">Latest tweets</h5>
        <div id="twitter" />
      </div>      
    )
  }
}

export default Tweets;
