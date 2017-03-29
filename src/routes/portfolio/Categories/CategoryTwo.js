import React from 'react';

const bathroomsImages = [
  'images/bathroom/bathroom_1.jpg',
  'images/bathroom/bathroom_2.jpg',
  'images/bathroom/bathroom_3.jpg',
  'images/bathroom/bathroom_4.jpg',
  'images/bathroom/bathroom_5.jpg',
  'images/bathroom/bathroom_6.jpg',
  'images/bathroom/bathroom_7.jpg',
];

// const imgTag = bathroomsImages.map((image, index) =>
//   <img key={index} src={image} />
// );
//
// const aTag = bathroomsImages.map((image, index) =>
//   <a key={index} href={image} className="mad_icon_plus gallery" rel="category" />
// );

const itemCategory = bathroomsImages.map((image, index) =>
<div className="item category_2">
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

class CategoryTwo extends React.Component {
  render() {
    return(
      <div>
        {itemCategory}
      </div>
    )
  }
}

export default CategoryTwo;
