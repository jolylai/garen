'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
  async detail() {
    const { ctx, service } = this;
    const { params } = ctx;

    const data = await service.order.findById(params.id);
    ctx.body = data;
  }

  /**
   * 创建订单
   *
   * @memberof OrderController
   */
  async create() {
    const { ctx, service } = this;
    const { userId, goods } = ctx.request.body;
    try {
      const createRule = {
        userId: 'string',
        goods: 'array',
      };
      ctx.validate(createRule);
      goods.forEach(item => (item.user = userId));
      const data = await service.order.create(goods);
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
    const { request } = ctx;
    const result = await service.order.update(request.body);
    ctx.body = result;
  }

  async remove() {
    // todo
  }
}

module.exports = OrderController;
