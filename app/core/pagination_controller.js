'use strict';

const { Controller } = require('egg');

class PaginationController extends Controller {
  get pagination() {
    const { request } = this.ctx;
    const { pageNumber = 1, pageSize = 10 } = request.body;
    return { pageNumber, pageSize };
  }

  currentPageData(list, pagination) {
    const { pageNumber = 1, pageSize = 10 } = pagination;
    return list.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }

  responseData(list, pagination) {
    const curPageData = this.currentPageData(list, pagination);
    return {
      list: curPageData,
      total: list.length,
    };
  }
}

module.exports = PaginationController;
