'use strict';

const Service = require('egg').Service;

class CartService extends Service {
  callback(error, goods) {
    if (error) {
      const { logger } = this.ctx;
      logger.error(error);
      return;
    }
    return goods;
  }

  async find(params) {
    const { ctx } = this;
    const result = await ctx.model.Cart.find(params, this.callback);
    return result;
  }

  async create(params) {
    const { ctx } = this;
    const result = await ctx.model.Cart.create(params, this.callback);
    return result;
  }

  async update(params) {
    const { ctx } = this;
    const result = await ctx.model.Cart.update(
      { _id: params._id },
      params,
      {},
      this.callback
    );
    return result;
  }

  async remove(_id) {
    const { ctx } = this;
    const result = await ctx.model.Cart.remove({ _id }, function(error) {
      if (error) {
        ctx.logger.error(error);
      }
    });
    return result;
  }
}

module.exports = CartService;
