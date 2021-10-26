'use strict';

import { EggApplication } from 'egg';

export default (app: EggApplication) => {
  // @ts-ignore
  const { STRING, INTEGER, DATE } = app.Sequelize;

  // @ts-ignore
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};
