import React from 'react';
import StretchCeiling from './StretchCeiling';

const title = 'Монтаж натяжных потолков';

export default {

  path: '/montazh-natyazhnyh-potolkov',

  action() {
    return {
      title,
      component: <StretchCeiling title={title} />,
      path: '/montazh-natyazhnyh-potolkov',
      description: 'Установка профессиональной бригадой натяжных потолков из материалов отечественного и импортного производства с монтажом источников света.',
    };
  },

};
