'use strict';
import { Application } from 'egg';

export default (app: Application) => {
  // @ts-ignore
  const { STRING, INTEGER, DATE } = app.Sequelize;

  // @ts-ignore
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER,
  });

  return User;
};
