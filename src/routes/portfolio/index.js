import React from 'react';
import Portfolio from './Portfolio';

const title = 'Портфолио';

export default {

  path: '/portfolio',

  action() {
    return {
      title,
      component: <Portfolio title={title}/>,
    };
  },

};
