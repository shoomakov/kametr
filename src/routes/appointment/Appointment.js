import React, { PropTypes } from 'react';
import Loader from '../../components/UIElements/Loader/Loader';
import Header from '../../components/Header/Header';
import AppointmentFields from '../../components/Appointment/FormFields/Form';
import FooterAdvanced from '../../components/Footer/FooterAdvanced';

class Appointment extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        <Loader/>
        <div id="wrapper" className="wrapper_container">
          <nav id="mobile-advanced" className="mobile-advanced"></nav>
          <Header/>
          <div className="mad_page_title paralax_image_bg1 v_align_center_blocks">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h2>{this.props.title}</h2>
                  <div className="mad_breadcrumbs">
                    <nav>
                      <a href="/">Главная</a>{this.props.title}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AppointmentFields/>
          <FooterAdvanced/>
        </div>
      </div>
    );
  }
}

export default Appointment;
