import amqp from 'amqp';

import constants from '../../constants.js';

const connection = amqp.createConnection(constants.amqpConfig);
connection.on('error', function (e) {
  console.log('Error from amqp: ', e);
});

connection.on('ready', function () {
  const exchange = connection.exchange(constants.exchange.registerOrder, {
    type: 'direct',
    autoDelete: false
  });
  exchange.on('open', () => {
    const message = {
      product: 'test'
    };

    console.log('STARTED EXCHANGE');

    const queue = connection.queue(
      constants.queue.registerOrder,
      {
        autoDelete: false
      },
      () => {
        queue.bind(constants.exchange.registerOrder, '');
        console.log('BIND QUEUE');
      }
    );

    exchange.publish(
      '',
      message,
      {
        contentType: constants.type
      },
      (err, msg) => {
        console.log('MESSAGE SENT %o %o', err, msg);
      }
    );
  });
});
