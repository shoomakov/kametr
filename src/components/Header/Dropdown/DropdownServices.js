import React from 'react';

class DropdownServices extends React.Component {
  render() {
    return(
      <div className="sub_menu_wrap clearfix">
        <ul>
          <li><a href="/osteklenie-pod-klyuch">Остекление</a></li>
          <li><a href="/raboty-po-montazhu-ventilyacii">Вентиляция</a></li>
          <li><a href="/montazh-kondicionirovaniya">Кондиционирование</a></li>
          <li><a href="/montazh-natyazhnyh-potolkov">Натяжные потолки</a></li>
          <li className="sub"><a href="/remontno-otdelochnye-raboty">Ремонтно-отделочные работы</a>
            <div className="sub_menu_wrap sub_menu_inner type_2 clearfix">
              <ul>
                <li><a href="/remont-i-otdelka-sten">Ремонт и отделка стен</a></li>
                <li><a href="/remont-i-otdelka-pola">Ремонт и отделка пола</a></li>
              </ul>
            </div>
          </li>
          <li><a href="/remont-sanuzla-pod-klyuch">Ремонт санузлов</a></li>
          <li><a href="/proizvodstvo-korpusnoj-mebeli">Производство корпусной мебели</a></li>
          <li><a href="/ehlektromontazh-pod-klyuch">Электромонтаж</a></li>
          <li><a href="/obshchestroitelnye-raboty">Общестроительные работы</a></li>
          {/* <li><a href="/obshchestroitelnye-raboty">Общестроительные работы</a></li> */}
        </ul>
      </div>
    )
  }
}

export default DropdownServices;
