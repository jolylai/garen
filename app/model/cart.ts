'use strict';

// module.exports = app => {
//   const { mongoose } = app;
//   const Schema = mongoose.Schema;

//   const CartSchema = new Schema({
//     user: {
//       type: Schema.Types.ObjectId,
//       ref: 'User',
//     },
//     goods: {
//       type: Schema.Types.ObjectId,
//       ref: 'Goods',
//     },
//     number: {
//       type: Number,
//       default: 1,
//     },
//     isOrder: {
//       type: Boolean,
//       default: false,
//     },
//     createdAt: {
//       type: Number,
//       default: Date.now(),
//     },
//     updatedAt: {
//       type: Number,
//       default: Date.now(),
//     },
//   });

//   CartSchema.pre('save', function(next) {
//     const now = Date.now();
//     this.updatedAt = now;
//     next();
//   });

//   return mongoose.model('Cart', CartSchema);
// };

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
