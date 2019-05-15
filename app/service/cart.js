'use strict';

const Service = require('egg').Service;

class CartService extends Service {
  /**
   * 根据用户id查询购物车商品
   *
   * @param {*} params
   * @returns
   * @memberof CartService
   */

  async findByUserId(userId) {
    const { ctx } = this;
    return ctx.model.Cart.find({ user: userId })
      .populate('goods')
      .exec();
  }

  async create(params) {
    const { ctx } = this;
    return ctx.model.Cart.create(params);
  }

  async update(params) {
    const { ctx } = this;
    const result = ctx.model.Cart.update({ _id: params._id }, params);
    return result;
  }

  /**
   * 删除单个购物车商品
   *
   * @param {*} _id
   * @returns
   * @memberof CartService
   */

  async deleteOne(goodsId) {
    const { ctx } = this;
    return ctx.model.Cart.deleteOne({ goods: goodsId });
  }

  /**
   * 清空购物车
   *
   * @param {*} userId
   * @returns
   * @memberof CartService
   */

  async deleteAll(userId) {
    console.log('userId: ', userId);
    const { ctx } = this;
    return ctx.model.Cart.deleteMany({ user: userId });
  }
}

module.exports = CartService;
