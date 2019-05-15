'use strict';

const Service = require('egg').Service;

class OrderService extends Service {
  async findById(id) {
    const { ctx } = this;
    const result = ctx.model.Order.findById(id)
      .populate({
        path: 'cart',
        populate: { path: 'goods', select: 'name _id' },
      })
      .exec();
    return result;
  }

  /**
   * 根据订单号查询订单
   *
   * @param {*} orderNo
   * @returns {Promise[order]} 承载订单列表的 Promise 对象
   * @memberof OrderService
   */

  getByOrderNo(orderNo) {
    const { ctx } = this;
    return ctx.model.Order.find({ orderNo }).exec();
  }

  /**
   * 创建订单
   *
   * @param {Array} params
   * @returns {Promise[order]} 承载订单列表的 Promise 对象
   * @memberof OrderService
   */

  create(params) {
    const { ctx } = this;
    return ctx.model.Order.create(params);
  }

  update(params) {
    const doc = {
      status: params.status,
    };
    return this.ctx.model.Order.updateOne({ _id: params._id }, doc).exec();
  }

  /**
   * 根据订单号删除订单
   *
   * @param {String} orderNo
   * @returns {Object} 删除结果
   * @memberof OrderService
   */

  remove(orderNo) {
    const { ctx } = this;
    return ctx.model.Goods.remove({ orderNo }).exec();
  }
}

module.exports = OrderService;