'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 登录
  router.post('/login', controller.login.index);

  // 用户
  router.get('/user', controller.user.index);

  // 商品
  router.post('/goods/list', controller.goods.list);
  router.get('/goods/detail/:id', controller.goods.detail);
};
