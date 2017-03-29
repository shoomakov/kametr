import React from 'react';

class StepPay extends React.Component {
  render() {
    return(
      <div className="field">
        <div className="mad_separator_bottom">
          <h6>Please tell us how you would like to pay:</h6>
          <div className="mad_vertical_list">
            <ul>
              <li>
                <div className="control-group form-elements">
                  <input type="radio" id="radio_51" name="radio" className="hide" />
                  <label htmlFor="radio_51">I will pay locally</label>
                </div>
              </li>
              <li>
                <div className="control-group form-elements">
                  <input type="radio" id="radio_52" name="radio" className="hide" />
                  <label htmlFor="radio_52">I will pay now with Pal<i className="icon-paypal" /></label>
                </div>
              </li>
              <li>
                <div className="control-group form-elements">
                  <input type="radio" id="radio_53" name="radio" className="hide" />
                  <label htmlFor="radio_53">I will pay now with Credit Card<i className="icon-credit-card" /></label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="app_nav_buttons clearfix">
          <button type="button" className="mad_button style3 app_prev">Back</button>
          <button type="button" className="mad_button style3 app_next">Next</button>
        </div>
      </div>
    )
  }
}

export default StepPay;
