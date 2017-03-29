import React from 'react';

class CommentForm extends React.Component {
  render() {
    return(
      <div className="mad_comment_form">
        <h5 className="widget_title">Оставить коментарий</h5>
        <form className="contact_form">
          <ul>
            <li className="row">
              <div className="col-sm-6">
                <input type="text" name="name" placeholder="Имя" />
              </div>
              <div className="col-sm-6">
                <input type="text" name="email" placeholder="Email" />
              </div>
            </li>
            <li>
              <textarea name="cf_message" placeholder="Ваш коментарий..." defaultValue={""} />
            </li>
          </ul>
          <button className="mad_button">Отправить</button>
        </form>
      </div>
    )
  }
}

export default CommentForm;
