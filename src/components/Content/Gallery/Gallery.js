import React from 'react';

class Gallery extends React.Component {
  render() {
    return(
      <div id="gallery">
        <div className="mad_section paralax_image_bg1">
          <div className="container relative">
            <div className="row">
              <div className="col-sm-12">
                <div className="mad_section_container">
                  <h3 className="mad_title_style1">Портфолио</h3>
                  <h2 className="mad_separator style2">Выполненные работы</h2>
                  <div className="owl_custom_buttons">
                    <button className="mad_owl_prev" />
                    <button className="mad_owl_next" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Carousel */}
          <div className="carousel_type_2 full_width_gallery">
            <div className="owl-carousel gallery_carousel" data-max-items={4}>
              {/* Slide */}
              <div>
                {/* Carousel Item */}
                <div className="mad_item_hover">
                  <figure>
                    <img src="images/test/300x225-1.jpeg" alt />
                  </figure>
                  <div className="item_overlay">
                    <div className="text_holder">
                      <a href="images/test/300x225-1.jpeg" className="mad_icon_plus gallery" rel="category" />
                      <a href="#" className="mad_icon_link" />
                    </div>
                  </div>
                </div>
                <div className="mad_item_hover">
                  <figure>
                    <img src="images/test/300x225-5.jpeg" alt />
                  </figure>
                  <div className="item_overlay">
                    <div className="text_holder">
                      <a href="images/test/300x225-5.jpeg" className="mad_icon_plus gallery" rel="category" />
                      <a href="#" className="mad_icon_link" />
                    </div>
                  </div>
                </div>
                {/* /Carousel Item */}
              </div>
              {/* /Slide */}
              {/* Slide */}
              <div>
                {/* Carousel Item */}
                <div className="mad_item_hover">
                  <figure>
                    <img src="images/test/300x225-2.jpeg" alt />
                  </figure>
                  <div className="item_overlay">
                    <div className="text_holder">
                      <a href="images/test/300x225-2.jpeg" className="mad_icon_plus gallery" rel="category" />
                      <a href="#" className="mad_icon_link" />
                    </div>
                  </div>
                </div>
                <div className="mad_item_hover">
                  <figure>
                    <img src="images/test/300x225-6.jpeg" alt />
                  </figure>
                  <div className="item_overlay">
                    <div className="text_holder">
                      <a href="images/test/300x225-6.jpeg" className="mad_icon_plus gallery" rel="category" />
                      <a href="#" className="mad_icon_link" />
                    </div>
                  </div>
                </div>
                {/* /Carousel Item */}
              </div>
              {/* /Slide */}
              {/* Slide */}
              <div>
                {/* Carousel Item */}
                <div className="mad_item_hover">
                  <figure>
                    <img src="images/test/300x225-3.jpeg" alt />
                  </figure>
                  <div className="item_overlay">
                    <div className="text_holder">
                      <a href="images/test/300x225-3.jpeg" className="mad_icon_plus gallery" rel="category" />
                      <a href="#" className="mad_icon_link" />
                    </div>
                  </div>
                </div>
                <div className="mad_item_hover">
                  <figure>
                    <img src="images/test/300x225-7.jpeg" alt />
                  </figure>
                  <div className="item_overlay">
                    <div className="text_holder">
                      <a href="images/test/300x225-7.jpeg" className="mad_icon_plus gallery" rel="category" />
                      <a href="#" className="mad_icon_link" />
                    </div>
                  </div>
                </div>
                {/* /Carousel Item */}
              </div>
              {/* /Slide */}
              {/* Slide */}
              <div>
                {/* Carousel Item */}
                <div className="mad_item_hover">
                  <figure>
                    <img src="images/test/300x225-4.jpeg" alt />
                  </figure>
                  <div className="item_overlay">
                    <div className="text_holder">
                      <a href="images/test/300x225-4.jpeg" className="mad_icon_plus gallery" rel="category" />
                      <a href="#" className="mad_icon_link" />
                    </div>
                  </div>
                </div>
                <div className="mad_item_hover">
                  <figure>
                    <img src="images/test/300x225-8.jpg" alt />
                  </figure>
                  <div className="item_overlay">
                    <div className="text_holder">
                      <a href="images/test/300x225-8.jpg" className="mad_icon_plus gallery" rel="category" />
                      <a href="#" className="mad_icon_link" />
                    </div>
                  </div>
                </div>
                {/* /Carousel Item */}
              </div>
              {/* /Slide */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery;
