'use strict';

import { Controller } from 'egg';

export default class UserController extends Controller {
  async list() {
    const { ctx, service } = this;

    ctx.validate({
      offset: { type: 'number' },
      limit: { type: 'number' },
    });

    const { offset, limit } = ctx.request.body;

    const { count, rows } = await service.user.list({ offset, limit });

    ctx.body = {
      body: { total: count, list: rows },
      status: true,
      message: 'success',
    };
  }

  async find() {
    const { ctx, service } = this;

    ctx.validate({ id: 'id' }, ctx.params);

    const { id } = ctx.params;

    const data = await service.user.findById(id);

    ctx.body = {
      body: data,
      status: true,
      message: 'success',
    };
  }

  async create() {
    const { ctx } = this;

    ctx.validate({
      name: 'string',
      age: { type: 'number', min: 1, max: 200 },
    });

    // const { name, age } = ctx.request.body;

    const user = await this.ctx.service.user.create(ctx.request.body);

    ctx.body = {
      body: user,
      status: true,
      message: 'success',
    };
  }

  async update() {
    const { ctx, service } = this;

    ctx.validate({
      id: 'id',
      name: 'string',
      age: { type: 'number', min: 0, max: 200 },
    });

    const { id, name, age } = ctx.request.body;

    const data = await service.user.update(id, { name, age });

    ctx.body = {
      body: data,
      status: true,
      message: 'success',
    };
  }

  async remove() {
    const { ctx, service } = this;

    ctx.validate({ id: 'id' }, ctx.params);

    const data = await service.user.remove(ctx.params.id);

    ctx.body = {
      body: data,
      status: true,
      message: 'success',
    };
  }
}
