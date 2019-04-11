'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mongoose: {
    enable: false,
    package: 'egg-mongoose',
  },
  // validate: {
  //   enable: true,
  //   package: 'egg-validate',
  // },
};
