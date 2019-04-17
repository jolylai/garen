'use strict';

const Service = require('egg').Service;

class OrderService extends Service {
  callback(error, order) {
    if (error) {
      const { logger } = this.ctx;
      logger.error(error);
      return;
    }
    return order;
  }

  async find(params) {
    const { ctx } = this;
    const result = await ctx.model.Order.find(params, this.callback);
    return result;
  }

  async create(params) {
    const { ctx } = this;
    const result = await ctx.model.Order.create(params, this.callback);
    return result;
  }

  async update(params) {
    const { ctx } = this;
    const result = await ctx.model.Order.update(
      { _id: params._id },
      params,
      {},
      this.callback
    );
    return result;
  }

  async remove(_id) {
    const { ctx } = this;
    const result = await ctx.model.Order.remove({ _id }, function(error) {
      if (error) {
        ctx.logger.error(error);
      }
    });
    return result;
  }
}

module.exports = OrderService;
