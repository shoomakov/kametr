import React from 'react';
import CivilWorks from './CivilWorks';

const title = 'Общестроительные работы';

export default {

  path: '/obshchestroitelnye-raboty',

  action() {
    return {
      title,
      component: <CivilWorks title={title} />,
      path: '/obshchestroitelnye-raboty',
      note: 'civilWorks',
      description: 'В разделе представлены общестроительные работы, производимые компанией "Каждый Метр". От планирования и подготовки до реализации.',
    };
  },
};
