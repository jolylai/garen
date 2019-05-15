'use strict';

module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;

  const CartSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    goods: {
      type: Schema.Types.ObjectId,
      ref: 'Goods',
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

  CartSchema.pre('save', function(next) {
    const now = Date.now();
    this.updatedAt = now;
    next();
  });

  return mongoose.model('Cart', CartSchema);
};
