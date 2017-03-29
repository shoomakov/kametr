import React from 'react';

class Archives extends React.Component {
  render() {
    return(
      <div className="mad_widget widget_categories">
        <h5 className="widget_title">Archives</h5>
        <ul>
          <li><a href="#">March 2016<span>5</span></a></li>
          <li><a href="#">Februar 2016<span>13</span></a></li>
          <li><a href="#">Januar 2016<span>6</span></a></li>
          <li><a href="#">December 2015<span>4</span></a></li>
        </ul>
      </div>      
    )
  }
}

export default Archives;
