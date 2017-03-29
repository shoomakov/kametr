import React from 'react';

const kitchensImages = [
  'images/kitchen/kitchen_1.jpg',
  'images/kitchen/kitchen_2.jpg',
  'images/kitchen/kitchen_3.jpg',
  'images/kitchen/kitchen_4.jpg',
  'images/kitchen/kitchen_5.jpg',
  'images/kitchen/kitchen_6.jpg',
  'images/kitchen/kitchen_7.jpg',
];

const itemCategory = kitchensImages.map((image, index) =>
<div className="item category_3">
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

class CategoryThree extends React.Component {
  render() {
    return(
      <div>
        {itemCategory}
      </div>
    )
  }
}

export default CategoryThree;
