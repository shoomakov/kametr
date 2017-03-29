import React from 'react';
import HeaderNav from './Navigation/Navigation';
import TopHeader from './Top/TopHeader';

class Header extends React.Component {
  render() {
    return(
      <header id="header" className="header-main rsAbsoluteEl">
        <TopHeader/>
        {/*main menu*/}
        <div className="menu_holder">
          <div className="container">
            {/* remove class 'no_sticky' to apply sticky */}
            <div className="menu_wrap no_sticky">
              <HeaderNav/>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
