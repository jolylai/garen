'use strict';

import { Service } from 'egg';

export default class UserService extends Service {
  /*
   * 根据用户Id查找用户信息
   * @param {Array} id 用户id
   * @return {Promise[users]} 承载用户列表的 Promise 对象
   */
  async getById(userId) {
    // @ts-ignore
    const user = await this.app.mysql.get('users', { id: userId });

    return { user };
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

  async create(params) {
    // @ts-ignore
    const user = await this.app.mysql.get('users', params);

    return user;
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
