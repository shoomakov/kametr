import React from 'react';
import Ventilation from './Ventilation';

const title = 'Работы по монтажу вентиляции';

export default {

  path: '/raboty-po-montazhu-ventilyacii',

  action() {
    return {
      title,
      component: <Ventilation title={title} />,
      path: '/raboty-po-montazhu-ventilyacii',
      description: 'Качественный монтаж с прокладкой воздуховодов для вытяжной или приточной вентиляции гарантирует отличную циркуляцию воздуха в помещениях.',
    };
  },

};
