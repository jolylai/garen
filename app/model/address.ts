'use strict';

// module.exports = app => {

//   const { mongoose } = app;
//   const Schema = mongoose.Schema;

//   const AddressSchema = new Schema({
//     user: {
//       type: Schema.Types.ObjectId,
//       ref: 'User',
//       required: true,
//     },
//     provinceId: {
//       type: String,
//     },
//     provinceName: {
//       type: String,
//     },
//     cityId: {
//       type: String,
//     },
//     cityName: {
//       type: String,
//     },
//     areaId: {
//       type: String,
//     },
//     areaName: {
//       type: String,
//     },
//     name: {
//       type: String,
//     },
//     detail: {
//       type: String,
//     },
//     mobile: {
//       type: String,
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

//   AddressSchema.pre('save', function(next) {
//     const now = Date.now();
//     this.updatedAt = now;
//     next();
//   });

//   return mongoose.model('Address', AddressSchema);
// };

import { EggApplication } from 'egg';

export default (app: EggApplication) => {
  // @ts-ignore
  const { STRING, INTEGER, DATE } = app.Sequelize;

  // @ts-ignore
  const Address = app.model.define('address', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  return Address;
};
