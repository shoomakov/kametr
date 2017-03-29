import React from 'react';

class BlogCategories extends React.Component {
  render() {
    return(
      <div className="mad_widget widget_categories">
        <h5 className="widget_title">Рубрики</h5>
        <ul>
          <li><a href="#">Категория №1<span>#3</span></a></li>
          <li><a href="#">Категория №2<span>#3</span></a></li>
          <li><a href="#">Категория №3<span>#6</span></a></li>
        </ul>
      </div>
    )
  }
}

export default BlogCategories;
