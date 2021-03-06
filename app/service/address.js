'use strict';

const Service = require('egg').Service;

class AddressService extends Service {
  find(params) {
    return this.ctx.model.Address.find(params).exec();
  }

  create(params) {
    return this.ctx.model.Address.create(params);
  }

  update(params) {
    const doc = {
      name: params.name,
    };
    return this.ctx.model.User.updateOne({ _id: params._id }, doc).exec();
  }

  deleteOne(params) {
    return this.ctx.model.Address.deleteOne(params);
  }
}

module.exports = AddressService;
