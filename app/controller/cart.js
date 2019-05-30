'use strict';

const Controller = require('egg').Controller;

class CartController extends Controller {
  async list() {
    const { ctx, service } = this;
    try {
      const data = await service.cart.findByUserId(ctx.request.body.userId);
      ctx.body = {
        body: data,
        status: true,
        message: 'success',
      };
    } catch (error) {
      ctx.body = {
        error,
        status: false,
      };
    }
  }

  async addGoods() {
    const { ctx, service } = this;
    try {
      const data = await service.cart.addGoods(ctx.request.body);
      ctx.body = {
        body: data,
        status: true,
        message: 'success',
      };
    } catch (error) {
      ctx.body = {
        error,
        status: false,
      };
    }
  }

  async deleteOne() {
    const { ctx, service } = this;
    try {
      const data = await service.cart.deleteOne(ctx.params.id);
      ctx.body = {
        body: data,
        status: true,
        message: 'success',
      };
    } catch (error) {
      ctx.body = {
        error,
        status: false,
      };
    }
  }

  async deleteAll() {
    const { ctx, service } = this;
    try {
      const data = await service.cart.deleteAll(ctx.params.userid);
      ctx.body = {
        body: data,
        status: true,
        message: 'success',
      };
    } catch (error) {
      ctx.body = {
        error,
        status: false,
      };
    }
  }
}

module.exports = CartController;
