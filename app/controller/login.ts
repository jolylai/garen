'use strict';

import { Controller } from 'egg';

export default class LoginController extends Controller {
  async index() {
    // todo 登录逻辑
    // Cookie Session
    const { ctx } = this;
    const author = ctx.session;
    console.log('author: ', author);
    ctx.body = 'hi, egg';
  }
}
