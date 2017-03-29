import React from 'react';
import Blog from './Post';

const title = '"Клималан" - лучший утеплитель для сруба';

export default {

  path: '/klimalan-luchshij-uteplitel-dlya-sruba',

  action() {
    return {
      title,
      component: <Blog title={title}/>,
      path: '/klimalan-luchshij-uteplitel-dlya-sruba',
    };
  },
};
