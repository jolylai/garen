'use strict';

const Service = require('egg').Service;

class GoodsService extends Service {
  async find() {
    const user = { name: 'jack', age: 25 };
    return user;
  }

  async list() {
    return [{}];
  }
}

module.exports = GoodsService;
