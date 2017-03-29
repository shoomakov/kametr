import React from 'react';
import StepOne from './Steps/StepOne';
import StepThree from './Steps/StepThree';
import StepDone from './Steps/StepDone';

class AppointmentFields extends React.Component {
  render() {
    return(
      <div id="content" className="appointment_page">
        <div className="mad_section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                {/* Appointment Field */}
                <div className="align_center">
                  <h3 className="mad_title_style1">Детали</h3>
                  <h2>Будущей встречи</h2>
                </div>
                <div id="helpdeskform" className="mad_section_offset">
                  <ul id="progressbar">
                    <li className="app_active first">1. Услуга</li>
                    <li>2. Детали</li>
                    <li>3. По рукам!</li>
                  </ul>
                  <StepOne/>
                  {/* <StepTwo/> */}
                  <StepThree/>
                  {/* <StepPay/> */}
                  <StepDone/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AppointmentFields;
