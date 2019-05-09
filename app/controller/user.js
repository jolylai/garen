'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async list() {
    const { ctx, service } = this;
    const data = await service.user.getList(ctx.request.body);
    ctx.body = {
      body: data,
      status: true,
      message: 'success',
    };
  }

  async detail() {
    const { ctx, service } = this;
    const data = await service.user.getById(ctx.request.body);
    ctx.body = {
      body: data,
      status: true,
      message: 'success',
    };
  }

  async create() {
    const { ctx, service } = this;
    const data = await service.user.create(ctx.request.body);
    ctx.body = {
      body: data,
      status: true,
      message: 'success',
    };
  }

  async update() {
    const { ctx, service } = this;
    try {
      const data = await service.user.update(ctx.request.body);
      ctx.body = {
        body: data,
        status: true,
        message: 'success',
      };
    } catch (error) {
      ctx.body = {
        error,
        status: false,
      };
    }
  }
}

module.exports = UserController;
