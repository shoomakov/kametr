import React from 'react';
import Post from './Post';

const title = 'Разновидности отделки кухонного потолка';

export default {

  path: '/raznovidnosti-otdelki-kuhonnogo-potolka',

  action() {
    return {
      title,
      component: <Post title={title} />,
      path: '/raznovidnosti-otdelki-kuhonnogo-potolka',
      year: '2017',
      month: '01',
      day: '12',
      description: 'Большинству людей известно, что для отделки кухни следует использовать такой строительный материал, который легко отмывается.',
    };
  },
};
