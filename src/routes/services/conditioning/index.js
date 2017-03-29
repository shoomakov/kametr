import React from 'react';
import Conditioning from './Conditioning';

const title = 'Монтаж кондиционирования';

export default {

  path: '/montazh-kondicionirovaniya',

  action() {
    return {
      title,
      component: <Conditioning title={title} />,
      path: '/montazh-kondicionirovaniya',
      description: 'Полный цикл планирования и монтажа системы кондиционирования высококлассными специалистами – залог комфорта и эффективности производства.',
    };
  },

};
