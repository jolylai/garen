'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 登录
  router.post('api/login', controller.login.index);

  // 用户
  router.get('api/user', controller.user.index);

  // 商品
  router.post('/api/goods/list', controller.goods.list);
  router.get('/api/goods/detail/:id', controller.goods.detail);
  router.post('/api/goods/create', controller.goods.create);
  router.post('/api/goods/remove', controller.goods.remove);
  router.post('/api/goods/update', controller.goods.update);
};
