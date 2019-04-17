'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
  async detail() {
    const { ctx, service } = this;
    const { params } = ctx;

    const data = await service.order.findById(params.id);
    ctx.body = data;
  }

  async create() {
    const { ctx, service } = this;
    const { request } = ctx;
    const result = await service.order.create(request.body);
    ctx.body = result;
  }

  async update() {
    const { ctx, service } = this;
    const { request } = ctx;
    const result = await service.order.update(request.body);
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
    const result = await service.order.remove(request.body);
    ctx.body = result;
  }
}

module.exports = OrderController;
