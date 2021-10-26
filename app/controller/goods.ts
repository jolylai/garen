'use strict';

import { Controller } from 'egg';

export default class GoodsController extends Controller {
  async list() {
    const { ctx, service } = this;
    try {
      const data = await service.goods.getList(ctx.request.body);
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

  async detail() {
    const { ctx, service } = this;
    try {
      const data = await service.goods.findById(ctx.params.id);
      ctx.body = {
        body: data,
        message: 'success',
        status: true,
      };
    } catch (error) {
      ctx.body = {
        error,
        status: false,
      };
    }
  }

  async create() {
    const { ctx, service } = this;
    try {
      const data = await service.goods.create(ctx.request.body);
      ctx.body = {
        body: data,
        message: 'success',
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
      const data = await service.goods.update(ctx.request.body);
      ctx.body = {
        body: data,
        message: 'success',
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
      const data = await service.goods.deleteOne(ctx.params.id);
      ctx.body = {
        body: data,
        message: 'success',
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
    const { ctx, service } = this;
    try {
      const data = await service.goods.remove(ctx.request.body);
      ctx.body = {
        body: data,
        message: 'success',
        status: true,
      };
    } catch (error) {
      ctx.body = {
        error,
        status: false,
      };
    }
  }

  async recommend() {
    const { ctx, service } = this;
    try {
      const data = await service.goods.getRecommend();
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
