'use strict';

module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;

  const OrderSchema = new Schema({
    orderNo: String,
    // status: {
    //   type: String,
    //   enum: ['NEW', 'STATUS'],
    //   default: 'NEW',
    // },
    pay: Boolean,
    delivery: Boolean,
    address: String,
    amount: Number,
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

  return mongoose.model('Order', OrderSchema);
};
