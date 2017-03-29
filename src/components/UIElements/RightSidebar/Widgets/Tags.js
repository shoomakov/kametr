import React from 'react';

class Tags extends React.Component {
  render() {
    return(
      <div className="mad_widget widget_tags">
        <h5 className="widget_title">Tags</h5>
        <div>
          <a href="#" className="tag">SPA</a>
          <a href="#" className="tag">PSD</a>
          <a href="#" className="tag">WordPress</a>
          <a href="#" className="tag">Salon</a>
          <a href="#" className="tag">ThemeForest</a>
        </div>
      </div>      
    )
  }
}

export default Tags;
