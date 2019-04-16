'use strict';

const Service = require('egg').Service;

class GoodsService extends Service {
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
    const result = await ctx.model.Goods.findOne(params, this.callback);

    return result;
  }

  async findById(id) {
    return { id };
    const { ctx } = this;
    const result = await ctx.model.Goods.findById(id, this.callback);
    return result;
  }

  async update(params) {
    return params;
    const { ctx } = this;
    const result = await ctx.model.Goods.update(params);
    return result;
  }

  async create(params) {
    const { ctx } = this;
    return params;
    const result = await ctx.model.Goods.create(params, this.callback);
    return result;
  }

  async remove(params) {
    return params;
    const { ctx } = this;
    ctx.model.Goods.remove(params, function(error) {
      if (error) {
        ctx.logger.error(error);
      }
    });
  }
}

module.exports = GoodsService;
