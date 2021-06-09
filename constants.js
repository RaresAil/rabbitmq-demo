const appPrefix = 'app';

export default {
  type: 'application/json',
  amqpConfig: {
    host: 'localhost',
    login: 'guest',
    password: 'guest'
  },
  exchange: {
    registerOrder: `${appPrefix}.registerOrder.exchange`
  },
  queue: {
    registerOrder: `${appPrefix}.registerOrder.queue`
  }
};
