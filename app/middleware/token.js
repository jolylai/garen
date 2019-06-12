'use strict';

module.exports = () => {
  return async function(ctx, next) {
    const token = ctx.headers.authorization;
    if (!token) {
      ctx.body = {
        success: false,
        message: '错误的 token',
      };
      return;
    }

    const user = await ctx.service.user.getUserByToken(token);

    if (!user) {
      ctx.status = 401;
      ctx.body = {
        success: false,
        error_msg: '错误的 accessToken',
      };
      return;
    }

    if (user.is_block) {
      ctx.status = 403;
      ctx.body = {
        success: false,
        error_msg: '您的账户被禁用',
      };
      return;
    }

    ctx.request.user = user;

    await next();
  };
};
