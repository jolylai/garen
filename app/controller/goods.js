'use strict';

const PaginationController = require('../core/pagination_controller');

class GoodsController extends PaginationController {
  async list() {
    const { ctx } = this;
    const pagination = this.pagination;
    const dataSource = [{ nane: 'milk' }, { nane: 'milk' }, { nane: 'milk' }];

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
    const { ctx, service } = this;
    const { request } = ctx;
    const result = await service.goods.remove(request.body);
    ctx.body = result;
  }
}

module.exports = GoodsController;
