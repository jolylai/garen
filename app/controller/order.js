'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
  async detail() {
    const { ctx, service } = this;
    try {
      const data = await service.order.findById(ctx.params.id);
      ctx.body = {
        body: data,
        status: true,
      };
    } catch (error) {
      ctx.body = {
        error,
        status: false,
      };
    }
  }

  /**
   * 创建订单
   *
   * @memberof OrderController
   */
  async create() {
    const { ctx, service } = this;
    try {
      const createRule = {
        user: 'string',
        cart: 'array',
      };
      ctx.validate(createRule);
      const data = await service.order.create(ctx.request.body);
      ctx.body = {
        body: data,
        status: true,
      };
    } catch (error) {
      ctx.body = {
        error,
        status: false,
      };
    }
  }

  async update() {
    const { ctx, service } = this;

    try {
      const data = await service.order.update(ctx.request.body);
      ctx.body = {
        body: data,
        status: true,
      };
    } catch (error) {
      ctx.body = {
        error,
        status: false,
      };
    }
  }

  async remove() {
    // todo
  }
}

module.exports = OrderController;
