'use strict';

const Controller = require('../core/pagination_controller');

class GoodsController extends Controller {
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

    const data = await service.goods.find(params.id);
    ctx.body = data;
  }
}

module.exports = GoodsController;
