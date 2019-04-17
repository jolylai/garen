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
  router.get('api/user/:id', controller.user.detail);
  router.post('api/user/create', controller.user.create);
  router.post('api/user/remove', controller.user.remove);
  router.post('api/user/update', controller.user.update);

  // 商品
  router.post('/api/goods/list', controller.goods.list);
  router.get('/api/goods/detail/:id', controller.goods.detail);
  router.post('/api/goods/create', controller.goods.create);
  router.post('/api/goods/remove', controller.goods.remove);
  router.post('/api/goods/update', controller.goods.update);

  // 订单
  router.get('api/order/:id', controller.order.detail);
  router.post('api/order/create', controller.order.create);
  router.post('api/order/remove', controller.order.remove);
  router.post('api/order/update', controller.order.update);
};
