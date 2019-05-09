'use strict';

const Service = require('egg').Service;

class GoodsService extends Service {
  async getList(params) {
    const { ctx } = this;
    const { pageNumber = 1, pageSize = 10, ...restParams } = params;
    const skipNumber = (pageNumber - 1) * pageSize;
    const goods = await ctx.model.Goods.find(restParams)
      .skip(skipNumber)
      .limit(pageSize);

    return goods;
  }

  findById(id) {
    return this.ctx.model.Goods.findById(id).exec();
  }

  update(params) {
    const doc = {
      name: params.name,
    };
    return this.ctx.model.Goods.updateOne({ _id: params._id }, doc).exec();
  }

  create(params) {
    const { ctx } = this;
    return ctx.model.Goods.create(params);
  }

  remove(_id) {
    const { ctx } = this;
    return ctx.model.Goods.remove({ _id }).exec();
  }

  deleteOne(_id) {
    const { ctx } = this;
    return ctx.model.Goods.deleteOne({ _id }).exec();
  }
}

module.exports = GoodsService;
