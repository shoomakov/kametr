import React from 'react';
import Furniture from './Furniture';

const title = 'Производство корпусной мебели';

export default {

  path: '/proizvodstvo-korpusnoj-mebeli',

  action() {
    return {
      title,
      component: <Furniture title={title} />,
      path: '/proizvodstvo-korpusnoj-mebeli',
      description: 'Эксклюзивную корпусную мебель, относительно недорогую, легкую в сборке и качественную изготовят мастера фирмы на новейшем оборудовании.',
    };
  },

};
