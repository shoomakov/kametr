import React from 'react';

class PricingDescription extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <figure className="section_image align_center">
              <img src="images/500x385_img.jpg" alt />
            </figure>
          </div>
          <div className="col-md-6">
            <div className="mad_section_container">
              <article>
                <h3 className="mad_title_style1">Прайс листы</h3>
                <h2>Наших услуг</h2>
                <p>Ознакомьтесь с полным перечнем услуг, оказываемых нашей компанией. Для удобства клиентов имеется как подробный общий прейскурант, так и прайсы, ранжированные по категориям работ.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PricingDescription;
