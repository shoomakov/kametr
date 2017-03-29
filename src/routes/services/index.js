import React from 'react';
import Uslugi from './Uslugi';

const title = 'Услуги';

export default {

  path: '/uslugi',

  action() {
    return {
      title,
      component: <Uslugi title={title} />,
      path: '/uslugi',
      note: 'Services',
      description: 'Раздел "Услуги" от компании "Каждый Метр" позволяет заинтересованным лицам ознакомиться с возможностями фирмы по проведению различных работ.',
    };
  },

};
