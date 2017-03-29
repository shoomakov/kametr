import React from 'react';
import Appointment from './Appointment';

const title = 'Договориться о встрече';

export default {

  path: '/appointment',

  action() {
    return {
      title,
      component: <Appointment title={title} />,
      note: 'Appointment',
      description: 'Удобный сервис позволит зарезервировать место, дату и время для встречи по вопросам оказания услуг с представителем компании "Каждый Метр".',
    };
  },

};
