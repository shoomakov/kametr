import React from 'react';
import Glazing from './Glazing';

const title = 'Остекление под ключ';

export default {

  path: '/osteklenie-pod-klyuch',

  action() {
    return {
      title,
      component: <Glazing title={title} />,
      path: '/osteklenie-pod-klyuch',
      description: 'Остекление специалистами компании любых помещений и балконов стандартными изделиями и по индивидуальным параметрам – гарантия уюта и тепла.',
    };
  },

};
