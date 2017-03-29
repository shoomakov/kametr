import React from 'react';
import Blog from './Post';

const title = 'Ламинат или плитка ПВХ?';

export default {

  path: '/laminat-ili-plitka-pvh',

  action() {
    return {
      title,
      component: <Blog title={title} />,
      path: '/laminat-ili-plitka-pvh',
      year: '2017',
      month: '01',
      day: '07',
    };
  },
};
