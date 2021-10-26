'use strict';

import { Controller } from 'egg';

export default class CommonController extends Controller {
  // 短信验证
  async sms() {
    // todo 登录逻辑
    // Cookie Session
    const { ctx } = this;

    ctx.body = 'hi, egg';
  }
}
