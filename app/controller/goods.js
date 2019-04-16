'use strict';

const PaginationController = require('../core/pagination_controller');

const createRules = {
  _id: {
    type: 'string',
    required: true,
  },
};

class GoodsController extends PaginationController {
  async list() {
    const { ctx, service } = this;
    const pagination = this.pagination;
    const dataSource = await service.goods.find({});

    const res = this.responseData(dataSource, pagination);
    ctx.body = res;
  }

  async detail() {
    const { ctx, service } = this;
    const { params } = ctx;

    const data = await service.goods.findById(params.id);
    ctx.body = data;
  }

  async create() {
    const { ctx, service } = this;
    const { request } = ctx;
    const result = await service.goods.create(request.body);
    ctx.body = result;
  }

  async update() {
    const { ctx, service } = this;
    const { request } = ctx;
    const result = await service.goods.update(request.body);
    ctx.body = result;
  }

  async remove() {
    const { ctx, service, app } = this;
    const { request } = ctx;
    const errors = app.validator.validate(createRules, request.body);
    if (errors) {
      ctx.body = errors;
      return;
    }
    const result = await service.goods.remove(request.body);
    ctx.body = result;
  }
}

module.exports = GoodsController;
