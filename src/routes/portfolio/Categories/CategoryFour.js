import React from 'react';

const anothersImages = [
  'images/another/another_1.jpg',
  'images/another/another_2.jpg',
  'images/another/another_3.jpg',
  'images/another/another_4.jpg',
  'images/another/another_5.jpg',
  'images/another/another_6.jpg',
  'images/another/another_7.jpg',
];

const itemCategory = anothersImages.map((image, index) =>
<div className="item category_4">
  <div className="mad_gallery_item">
    <div className="mad_item_hover">
      <figure>
        <img key={index} src={image} />
      </figure>
      <div className="item_overlay">
        <div className="text_holder">
          <a key={index} href={image} className="mad_icon_plus gallery" rel="category" />
          <a href="#" className="mad_icon_link" />
        </div>
      </div>
    </div>
  </div>
</div>
);

class CategoryFour extends React.Component {
  render() {
    return(
      <div>
        {itemCategory}
      </div>
    )
  }
}

export default CategoryFour;
