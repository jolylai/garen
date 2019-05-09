'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  callback(error, goods) {
    if (error) {
      const { logger } = this.ctx;
      logger.error(error);
      return;
    }
    return goods;
  }

  async find(params) {
    const { ctx } = this;
    const result = await ctx.model.User.find(params, this.callback);
    return result;
  }

  async create(params) {
    const { ctx } = this;

    function callback(error, user) {
      if (error) {
        throw error;
      }
      return user;
    }
    const result = await ctx.model.User.create(params, callback);
    return result;
  }

  async update(params) {
    const { ctx } = this;
    try {
      const result = await ctx.model.User.updateOne(
        { _id: params._id },
        params,
        function(error, user) {
          if (error) {
          }
          return user;
        }
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async remove(_id) {
    const { ctx } = this;
    const result = await ctx.model.User.remove({ _id }, function(error) {
      if (error) {
        ctx.logger.error(error);
      }
    });
    return result;
  }
}

module.exports = UserService;
