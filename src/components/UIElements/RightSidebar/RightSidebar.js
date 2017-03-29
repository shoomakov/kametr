import React from 'react';
import Search from './Widgets/Search';
import BlogCategories from './Widgets/BlogCategories';
import RecentPosts from './Widgets/RecentPosts';
import Quote from './Widgets/Quote';


class RightSidebar extends React.Component {
  render() {
    return(
      <aside id="sidebar" className="col-md-4">
        <Search/>
        <BlogCategories/>
        <RecentPosts/>
        <Quote/>
        {/* Instagram */}
        {/* Tags */}
        {/* Tweets */}
        {/* Comments */}
        {/* Archives */}
      </aside>
    )
  }
}

export default RightSidebar;
