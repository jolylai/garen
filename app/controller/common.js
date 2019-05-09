'use strict';

const Controller = require('egg').Controller;

class CommonController extends Controller {
  // 短信验证
  async sms() {
    // todo 登录逻辑
    // Cookie Session
    const { ctx, service } = this;
    const { request } = ctx;
    ctx.body = 'hi, egg';
  }
}

module.exports = CommonController;
