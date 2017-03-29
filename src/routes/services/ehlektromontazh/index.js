import React from 'react';
import Ehlektromontazh from './Ehlektromontazh';

const title = 'Электромонтаж под ключ';

export default {

  path: '/ehlektromontazh-pod-klyuch',

  action() {
    return {
      title,
      component: <Ehlektromontazh title={title} />,
      path: '/ehlektromontazh-pod-klyuch',
      description: 'Весь цикл электромонтажа от проекта до подключения приборов можно доверить квалифицированным специалистам, получив полную гарантию качества.',
    };
  },

};
