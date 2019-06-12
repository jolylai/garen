'use strict';

module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;

  const AddressSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    provinceId: {
      type: String,
    },
    cityId: {
      type: String,
    },
    detail: {
      type: String,
    },
    contact: {
      type: String,
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

  AddressSchema.pre('save', function(next) {
    const now = Date.now();
    this.updatedAt = now;
    next();
  });

  return mongoose.model('Address', AddressSchema);
};
