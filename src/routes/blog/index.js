import React from 'react';
import Blog from './Blog';

const title = 'Блог';

export default {

  path: '/blog',

  action() {
    return {
      title,
      component: <Blog title={title} />,
      path: '/blog',
      description: 'В блоге фирмы "Каждый Метр" находят отражение и освещаются наиболее значимые вопросы и проблемы из мира строительства и ремонта.',
    };
  },

};
