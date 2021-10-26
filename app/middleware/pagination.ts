'use strict';

import { Context } from 'egg';

export default () => {
  return async (ctx: Context, next) => {
    const { pageNumber, pageSize } = ctx.request.body;

    if (pageNumber && pageSize) {
      ctx.request.body.limit = pageSize;
      ctx.request.body.offset = (pageNumber - 1) * pageSize;
    }

    console.log('ctx: ', ctx);

    await next();
  };
};
