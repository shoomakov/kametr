import React from 'react';
import Steny from './Steny';

const title = 'Ремонт и отделка стен';

export default {

  path: '/remont-i-otdelka-sten',

  action() {
    return {
      title,
      component: <Steny title={title} />,
      path: '/remont-i-otdelka-sten',
      description: 'Выполнение отделки стен – направление работы компании. Это выравнивание и оштукатуривание, устройство гипсокартонных стен в любых помещениях.',
    };
  },
};
