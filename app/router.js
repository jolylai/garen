'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 登录
  router.post('/api/login', controller.login.index);

  // 短信验证码
  router.post('/api/common/sms', controller.common.sms);

  // 用户
  router.get('/api/user/:id', controller.user.detail);
  router.post('/api/user/list', controller.user.list);
  router.post('/api/user/create', controller.user.create);
  router.post('/api/user/update', controller.user.update);

  // 商品
  router.get('/api/goods/:id', controller.goods.detail);
  router.get('/api/goods/remove/:id', controller.goods.deleteOne);
  router.post('/api/goods/list', controller.goods.list);
  router.post('/api/goods/create', controller.goods.create);
  router.post('/api/goods/remove', controller.goods.remove);
  router.post('/api/goods/update', controller.goods.update);

  // 订单
  router.get('/api/order/:id', controller.order.detail);
  router.post('/api/order/create', controller.order.create);
  // router.post('/api/order/remove', controller.order.remove);
  router.post('/api/order/update', controller.order.update);

  // 购物车
  router.post('/api/cart/list', controller.cart.list);
  router.post('/api/cart/create', controller.cart.create);
  router.get('/api/cart/deleteone/:id', controller.cart.deleteOne);
  router.get('/api/cart/deleteall/:userid', controller.cart.deleteAll);
};
