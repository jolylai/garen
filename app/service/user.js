'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  /*
   * 根据用户Id查找用户信息
   * @param {Array} id 用户id
   * @return {Promise[users]} 承载用户列表的 Promise 对象
   */
  getById(id) {
    const { ctx } = this;
    return ctx.model.User.findById(id).exec();
  }

  async getList(params) {
    const { ctx } = this;
    const { pageNumber = 1, pageSize = 10, ...restParams } = params;
    const skipNumber = (pageNumber - 1) * pageSize;
    const data = await ctx.model.User.find(restParams)
      .skip(skipNumber)
      .limit(pageSize);

    return data;
  }

  create(params) {
    return this.ctx.model.User.create(params);
  }

  update(params) {
    const doc = {
      name: params.name,
    };
    return this.ctx.model.User.updateOne({ _id: params._id }, doc).exec();
  }

  // makeGravatar(email) {
  //   return (
  //     'http://www.gravatar.com/avatar/' +
  //     utility.md5(email.toLowerCase()) +
  //     '?size=48'
  //   );
  // }

  // getGravatar(user) {
  //   return user.avatar || this.makeGravatar(user.email);
  // }
}

module.exports = UserService;
