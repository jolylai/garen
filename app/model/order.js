'use strict';

module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;

  const OrderSchema = new Schema({
    orderNo: String,
    type: {
      type: Number,
      enum: [0, 1, 2, 3],
      default: 0,
    },
    goods: {
      type: Schema.Types.ObjectId,
      ref: 'goods',
    },
    number: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  });

  return mongoose.model('Order', OrderSchema);
};
