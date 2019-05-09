'use strict';

const Controller = require('egg').Controller;

class CartController extends Controller {
  async index() {
    // todo 登录逻辑
    // Cookie Session
    const { ctx, service } = this;
    const author = ctx.session;
    console.log('author: ', author);
    ctx.body = 'hi, egg';
  }
}

module.exports = CartController;
