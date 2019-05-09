'use strict';

module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;

  const CartSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    goodsId: {
      type: Schema.Types.ObjectId,
      ref: 'goods',
    },
    number: {
      type: Number,
    },
    createdAt: {
      type: Number,
      default: Date.now(),
    },
    updatedAt: {
      type: Number,
      default: Date.now(),
    },
  });

  return mongoose.model('Cart', CartSchema);
};
