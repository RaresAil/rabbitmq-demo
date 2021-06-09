import amqp from 'amqp';

import constants from '../constants.js';

const connection = amqp.createConnection(constants.amqpConfig);
connection.on('error', function (e) {
  console.log('Error from amqp: ', e);
});

connection.on('ready', function () {
  const queue = connection.queue(
    constants.queue.registerOrder,
    {
      autoDelete: false
    },
    () => {
      queue.bind(constants.exchange.registerOrder, '');

      queue.subscribe(
        {
          prefetchCount: 1
        },
        function (msg, headers, deliveryInfo, messageObject) {
          console.log('%o %o %o', msg, headers, deliveryInfo);
        }
      );
    }
  );
});
