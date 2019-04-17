'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async detail() {
    const { ctx, service } = this;
    const { params } = ctx;

    const data = await service.user.findById(params.id);
    ctx.body = data;
  }

  async create() {
    const { ctx, service } = this;
    const { request } = ctx;
    const result = await service.user.create(request.body);
    ctx.body = result;
  }

  async update() {
    const { ctx, service } = this;
    const { request } = ctx;
    const result = await service.user.update(request.body);
    ctx.body = result;
  }

  async remove() {
    const { ctx, service, app } = this;
    const { request } = ctx;
    const errors = app.validator.validate(createRules, request.body);
    if (errors) {
      ctx.body = errors;
      return;
    }
    const result = await service.user.remove(request.body);
    ctx.body = result;
  }
}

module.exports = UserController;
