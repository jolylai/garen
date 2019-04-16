'use strict';

module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;

  const GoodsSchema = new Schema({
    name: String,
    price: Number,
    wholesaleProce: Number,
    imgUrl: String,
    description: String,
    qty: Number,
    lockQty: Number,
    meta: {
      createdAt: {
        type: Date,
        default: Date.now(),
      },
      updatedAt: {
        type: Date,
        default: Date.now(),
      },
    },
  });

  return mongoose.model('Goods', GoodsSchema);
};
