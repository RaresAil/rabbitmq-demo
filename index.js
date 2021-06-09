import amqp from 'amqp';

const connection = amqp.createConnection({ host: 'localhost' });

connection.on('error', function (e) {
  console.log('Error from amqp: ', e);
});

// Wait for connection to become established.
connection.on('ready', function () {
  // Use the default 'amq.topic' exchange
  connection.queue('my-queue', function (q) {
    // Catch all messages
    q.bind('amq.topic', '#');

    console.log('STARTED');

    // Receive messages
    q.subscribe(function ({ data }) {
      console.log(Buffer.from(data).toString('utf8'));
    });
  });
});
