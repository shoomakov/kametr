import React from 'react';

class Quote extends React.Component {
  render() {
    return(
      <div className="mad_widget widget_quote">
        <h5 className="widget_title">Цитата</h5>
        <blockquote>
          “Design is not just what it
          Looks like and Feels like.
          Design is how it Works.”
        </blockquote>
        <div className="mad_blockquote_author"> ― Steve Jobs</div>
      </div>
    )
  }
}

export default Quote;
