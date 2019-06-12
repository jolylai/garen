'use strict';

const Controller = require('egg').Controller;

class AddressController extends Controller {
  // 短信验证
  async list() {
    const { ctx, service } = this;
    try {
      const data = await service.address.find({ user: '11' });
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
    ctx.body = 'hi, egg';
  }

  async create() {
    const { ctx, service } = this;
    try {
      const data = await service.address.create(ctx.request.body);
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

  async deleteOne() {
    const { ctx, service } = this;
    try {
      const data = await service.address.deleteOne({ _id: ctx.params.id });
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
      const data = await service.address.update(ctx.request.body);
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
}

module.exports = AddressController;
