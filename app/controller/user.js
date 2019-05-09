'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async list() {
    const { ctx, service } = this;
    const { params } = ctx;
    let response;
    try {
      const data = await service.user.find({});
      response = {
        body: data,
        message: 'success',
        status: true,
      };
    } catch (error) {
      response = {
        body: data,
        message: 'fail',
        status: false,
      };
    }
    ctx.body = response;
  }

  async detail() {
    const { ctx, service } = this;
    const { params } = ctx;

    const data = await service.user.findById(params.id);
    ctx.body = data;
  }

  async create() {
    const { ctx, service } = this;
    const { request } = ctx;
    let response;
    try {
      const data = await service.user.create(request.body);
      response = {
        status: true,
        message: 'success',
      };
    } catch (error) {
      response = {
        status: false,
        message: 'fail',
      };
    }
    ctx.body = response;
  }

  async update() {
    const { ctx, service } = this;
    const { request } = ctx;
    let response;
    try {
      const data = await service.user.update(request.body);
      response = {
        body: data,
        status: true,
        message: 'success',
      };
    } catch (error) {
      response = {
        status: false,
        message: error,
      };
    }
    ctx.body = response;
  }

  async remove() {
    const { ctx, service, app } = this;
    const { request } = ctx;
    const errors = app.validator.validate(createRules, request.body);
    if (errors) {
      ctx.body = errors;
      return;
    }
    const result = await service.user.remove(request.body);
    ctx.body = result;
  }
}

module.exports = UserController;
