import React from 'react';
import Floors from './Floors';

const title = 'Ремонт и отделка пола';

export default {

  path: '/remont-i-otdelka-pola',

  action() {
    return {
      title,
      component: <Floors title={title} />,
      path: '/remont-i-otdelka-pola',
      description: 'Ремонт и отделка пола, в том числе - демонтаж старых покрытий, монтаж теплого пола, выравнивание стяжкой и плитами, укладка плитки, ламината.',
    };
  },
};
