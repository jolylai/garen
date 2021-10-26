'use strict';

import { Application } from 'egg';

/**
 * @param {Egg.Application} app - egg application
 */
export default (app: Application) => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);

  // // 登录
  // router.post('/api/login', controller.login.index);

  // // 短信验证码
  // router.post('/api/common/sms', controller.common.sms);

  // 用户
  router.get('/api/user/:id', controller.user.detail);
  router.post('/api/user/list', controller.user.list);
  router.post('/api/user', controller.user.create);
  router.patch('/api/user', controller.user.update);

  // // 商品
  // router.get('/api/goods/remove/:id', controller.goods.deleteOne);
  // router.post('/api/goods/list', controller.goods.list);
  // router.post('/api/goods/create', controller.goods.create);
  // router.post('/api/goods/remove', controller.goods.remove);
  // router.post('/api/goods/update', controller.goods.update);
  // router.get('/api/goods/recommend', controller.goods.recommend);
  // router.get('/api/goods/:id', controller.goods.detail);

  // // 订单
  // router.get('/api/order/:id', controller.order.detail);
  // router.post('/api/order/create', controller.order.create);
  // // router.post('/api/order/remove', controller.order.remove);
  // router.post('/api/order/update', controller.order.update);
  // router.post('/api/order/list', controller.order.list);

  // // 购物车
  // router.post('/api/cart/list', controller.cart.list);
  // router.post('/api/cart/addGoods', controller.cart.addGoods);
  // router.get('/api/cart/deleteone/:id', controller.cart.deleteOne);
  // router.get('/api/cart/deleteall/:userid', controller.cart.deleteAll);

  // // 收货地址
  // router.post('/api/address/list', controller.address.list);
  // router.post('/api/address/create', controller.address.create);
  // router.del('/api/address/:id', controller.address.deleteOne);
  // router.post('/api/address/update', controller.address.update);
};
