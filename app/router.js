'use strict';

module.exports = app => {
  // 首页模块
  app.get('/', 'home.index');

  // 用户注册模块
  app.post('/user/checkUserName', 'user.checkUserName');
  app.get('/user/reg', 'user.reg');
  app.post('/user/reg', 'user.postreg');
  app.get('/user/getCodeImage/:date', 'user.getCodeImage');
  
  app.get('/user/login/url','user.login')
};
