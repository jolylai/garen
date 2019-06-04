'use strict';

module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;

  const OrderSchema = new Schema({
    orderNo: {
      type: String,
    },
    status: {
      type: Number,
      enum: [0, 1, 2, 3],
      default: 0,
    },
    cart: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Cart',
      },
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
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

  OrderSchema.pre('save', function(next) {
    const now = Date.now();
    this.updatedAt = now;
    next();
  });

  return mongoose.model('Order', OrderSchema);
};
