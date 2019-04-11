'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    const { ctx, service } = this;
    console.log('query', ctx.query);
    console.log('service: ', service.user.find());
    ctx.body = 'hi, egg';
  }
}

module.exports = UserController;
