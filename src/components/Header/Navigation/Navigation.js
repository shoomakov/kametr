import React, { PropTypes } from 'react';
import DropdownServices from '../Dropdown/DropdownServices';
import DropdownAbout from '../Dropdown/DropdownAbout';

class HeaderNav extends React.Component {
  static propTypes = {
    note: PropTypes.string,
  }

  render() {
    return(
      <div className="nav_item">
        <nav id="main_navigation" className="main_navigation">
          <ul id="menu" className="clearfix">
            <li className="current"><a href="/">Главная</a></li>
            <li className="drop"><a href="/uslugi">Услуги</a>
              <DropdownServices/>
            </li>
            <li className="drop"><a href="/about">О Компании</a>
              <DropdownAbout/>
            </li>
            <li><a href="/calculator">Калькулятор</a></li>
            <li><a href="/blog">Блог</a></li>
            <li><a href="/akcii-i-predlozheniya">Предложения</a></li>
            <li><a href="/contact">Контакты</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default HeaderNav;
