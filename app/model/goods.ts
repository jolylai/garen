'use strict';

// module.exports = app => {
//   const { mongoose } = app;
//   const Schema = mongoose.Schema;

//   const GoodsSchema = new Schema({
//     name: {
//       type: String,
//     },
//     banner: [
//       {
//         type: String,
//       },
//     ],
//     price: {
//       type: Number,
//     },
//     wholesalePrice: {
//       type: Number,
//     },
//     imgUrl: {
//       type: String,
//     },
//     description: {
//       type: String,
//     },
//     qty: {
//       type: Number,
//     },
//     lockQty: {
//       type: Number,
//     },
//     unit: {
//       type: String,
//     },
//     recommend: {
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

//   GoodsSchema.pre('save', function(next) {
//     const now = Date.now();
//     this.updatedAt = now;
//     next();
//   });

//   return mongoose.model('Goods', GoodsSchema);
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
