'use strict';

module.exports = app => {
  const { mongoose } = app;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    avatar: String,
    name: {
      unique: true,
      type: String,
    },
    mobile: {
      unique: true,
      type: String,
    },
    email: {
      unique: true,
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      // eslint-disable-next-line
      enum: ['normal', 'admin'],
      default: 'normal',
    },
    address: String,
    balance: Number,
    createdAt: {
      type: Number,
      default: Date.now(),
    },
    updatedAt: {
      type: Number,
      default: Date.now(),
    },
  });

  return mongoose.model('User', UserSchema);
};
