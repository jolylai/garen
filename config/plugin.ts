'use strict';

/** @type Egg.EggPlugin */
export default {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  mongoose: {
    enable: false,
    package: 'egg-mongoose',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
};
