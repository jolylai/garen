'use strict';

import { Service } from 'egg';
import { CreateOptions } from 'sequelize';

interface User {
  id: number;
  name: string;
  age: number;
}

export default class UserService extends Service {
  async list({ offset = 0, limit = 10 }: { offset: number; limit: number }) {
    return this.ctx.model.User.findAndCountAll({
      offset,
      limit,
      order: [
        ['created_at', 'desc'],
        ['id', 'desc'],
      ],
    });
  }

  async findById(id: number) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user!;
  }

  async create(user: CreateOptions) {
    return this.ctx.model.User.create(user);
  }

  async update(id: number, updates: Omit<User, 'id'>) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user!.update(updates);
  }

  async remove(id: number) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user!.destroy();
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
