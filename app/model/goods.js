'use strict';

module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;

  const GoodsSchema = new Schema({
    name: String,
    price: Number,
    wholesalePrice: Number,
    imgUrl: String,
    description: String,
    qty: Number,
    lockQty: Number,
    unit: {
      type: String,
      // enum: ['瓶', '箱'],
      // default: 'NEW',
    },
    meta: {
      createdAt: {
        type: Number,
        default: Date.now(),
      },
      updatedAt: {
        type: Number,
        default: Date.now(),
      },
    },
  });

  return mongoose.model('Goods', GoodsSchema);
};
