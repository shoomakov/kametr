// @flow
import React from 'react';

export default class CallRequest extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="morph-button morph-button-modal morph-button-modal-2 morph-button-fixed">
        <button type="button">Заказать звонок</button>
        <div className="morph-content">
          <div>
            <div className="content-style-form content-style-form-1">
              <span className="icon icon-close">Close the dialog</span>
              <h4 style={{ 'marginTop': '65px' }}>Введите Ваши:</h4>
              <form method="post" onSubmit={this.handleSubmit}>
                <p style={{ width: '100%' }}>
                  <input
                    type="name"
                    placeholder="Имя"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </p>
                <p style={{ width: '100%' }}><input type="email" placeholder="Телефон" /></p>
                <p style={{ width: '100%' }}><button type="submit" className="mad_button size2 style2">Подтвердить</button></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// export default CallRequest;
