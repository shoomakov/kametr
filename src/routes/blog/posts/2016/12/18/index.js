import React from 'react';
import Blog from './PostOne';

const title = 'Деревянный дом из лиственницы';

export default {

  path: '/derevyannyj-dom-iz-listvennicy',

  action() {
    return {
      title,
      component: <Blog title={title}/>,
      path: '/derevyannyj-dom-iz-listvennicy',
    };
  },
};
