'use strict';

import { Controller } from 'egg';

export default class UserController extends Controller {
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
    const ctx = this.ctx;
    const { name, age } = ctx.request.body;
    const user = await ctx.model.User.create({ name, age });
    ctx.status = 201;
    ctx.body = user;
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
