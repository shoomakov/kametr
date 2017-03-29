import React from 'react';
import Sanuzel from './Sanuzel';

const title = 'Ремонт санузла под ключ';

export default {

  path: '/remont-sanuzla-pod-klyuch',

  action() {
    return {
      title,
      component: <Sanuzel title={title} />,
      path: '/remont-sanuzla-pod-klyuch',
      description: 'Ремонт, отделку совмещенных и отдельных санузлов, ванных комнат с заменой/установкой сантехники и труб выполнят профессионалы фирмы.',
    };
  },

};
