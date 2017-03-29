import React from 'react';

class CommentSection extends React.Component {
  render() {
    return(
      <div className="mad_comment_section">
        <h5 className="widget_title">Comments</h5>
        <div className="mad_post_comment">
          <div className="mad_post_author"><img src="images/100x100_admin2.png" alt /></div>
          <div className="post_author">Alice Doe<span>|  18 / JAN / 2016</span><a href="#">Reply</a></div>
          <p>Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
        </div>
        <div className="mad_post_comment comment_level_2">
          <div className="mad_post_author"><img src="images/100x100_admin3.png" alt /></div>
          <div className="post_author">Admin<span>|  18 / JAN / 2016</span><a href="#">Reply</a></div>
          <p>Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
        </div>
        <div className="mad_post_comment">
          <div className="mad_post_author"><img src="images/100x100_admin4.png" alt /></div>
          <div className="post_author">Jack Doe<span>|  18 / JAN / 2016</span><a href="#">Reply</a></div>
          <p>Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. </p>
        </div>
      </div>      
    )
  }
}

export default CommentSection;
