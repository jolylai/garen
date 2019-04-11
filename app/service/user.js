'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async find() {
    const user = { name: 'jack', age: 25 };
    return user;
  }
}

module.exports = UserService;
