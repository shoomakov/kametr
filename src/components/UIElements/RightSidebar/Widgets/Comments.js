import React from 'react';

class Comments extends React.Component {
  render() {
    return(
      <div className="mad_widget widget_comments">
        <h5 className="widget_title">Popular comments</h5>
        <div className="mad_widget_comment"><a href="#">Admin</a> on <a href="#">In Pede Mi Aliquet Sit Amet Euismod In Auctor</a></div>
        <div className="mad_widget_comment"><a href="#">John Doe</a> on <a href="#">Fusce Euismod Consequat Ante</a></div>
        <div className="mad_widget_comment"><a href="#">John Doe</a> on <a href="#">Donec Sagittis Euismod Purus Sed Ut Perspiciatis</a></div>
      </div>      
    )
  }
}

export default Comments;
