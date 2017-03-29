import React from 'react';

class TabsNavigation extends React.Component {
  render() {
    return(
      <div className="menu-sidebar">
        <ul className="smooth_tabs tabs_nav clearfix">
          <li className><a href="#part_1" className="smoothScroll">Натяжные потолки</a></li>
          <li className><a href="#part_2" className="smoothScroll">Услуги электромонтажа</a></li>
          <li className><a href="#part_3" className="smoothScroll">Ремонтные общестроительные работы</a></li>
          <li className><a href="#part_4" className="smoothScroll">Виды ремонта санузла</a></li>
          <li className><a href="#part_5" className="smoothScroll">Виды плотницких работ</a></li>
          <li className><a href="#part_6" className="smoothScroll">Капитальный ремонт потолка</a></li>
        </ul>
      </div>
    )
  }
}

export default TabsNavigation;
