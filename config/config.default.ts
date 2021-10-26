/* eslint valid-jsdoc: "off" */

'use strict';

import { EggAppConfig, PowerPartial } from 'egg';

// app special config scheme
export interface BizConfig {
  sourceUrl: string;
  news: {
    pageSize: number;
    serverUrl: string;
  };
}

export default (appInfo: EggAppConfig) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;

  // override config from framework / plugin
  config.keys = appInfo.name + '123456';

  config.cors = {
    origin: 'http://localhost:8088',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
  };

  // add your middleware config here
  config.middleware = ['pagination'];

  config.security = {
    csrf: {
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '47.113.95.50',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '12345678',
      // 数据库名
      database: 'dev',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '47.113.95.50',
    port: 3306,
    database: 'dev',
    username: 'root',
    password: '12345678',
  };

  return config;
};
