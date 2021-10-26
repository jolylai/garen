'use strict';

// module.exports = app => {
//   const { mongoose } = app;
//   const Schema = mongoose.Schema;

//   const OrderSchema = new Schema({
//     orderNo: {
//       type: String,
//     },
//     status: {
//       type: Number,
//       enum: [0, 1, 2, 3],
//       default: 0,
//     },
//     cart: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: 'Cart',
//       },
//     ],
//     user: {
//       type: Schema.Types.ObjectId,
//       ref: 'User',
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

//   OrderSchema.pre('save', function(next) {
//     const now = Date.now();
//     this.updatedAt = now;
//     next();
//   });

//   return mongoose.model('Order', OrderSchema);
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
