import React from 'react';
import Repair from './RepairFinish';

const title = 'Ремонтно отделочные работы';

export default {

  path: '/remontno-otdelochnye-raboty',

  action() {
    return {
      title,
      component: <Repair title={title} />,
      path: '/remont-i-otdelka-sten',
      description: 'Выполнение ремонтно отделочных работ в любых типах помещений, от косметического и стандартного до эксклюзивных вариантов. Не упустите шанс!',
    };
  },
};
