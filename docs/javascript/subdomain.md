express  子域名seesion共享实验

```bash
# nginx 配置 两个子域名
    server {
        listen 80;
        server_name demo01.test.com;
        location / {
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
           proxy_set_header Host $http_host;
           proxy_set_header X-Nginx-Proxy true;
           proxy_pass http://127.0.0.1:3000;
        }
    }
    server {
        listen 80;
        server_name demo02.test.com;
        location / {
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;  
           proxy_set_header Host $http_host;
           proxy_set_header X-Nginx-Proxy true;
           proxy_pass http://127.0.0.1:3001/;
        }
    }
```
```javascript
// 使用express创建两个应用 分别监听 3000及3001端口
// 方案一 使用express-session插件，用connect-mongo插件来保存session值，来达到session共享
//  app.js 片段 下方片段两个应用一致
var session = require('express-session');
const MongoStore = require('connect-mongo')(session)
// 使用 session 中间件
app.use(session({
  secret :  'secret', // 对session id 相关的cookie 进行签名
  resave : false,
  saveUninitialized: true, // 是否保存未初始化的会话
  cookie : {
      maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒,
      path: '/',
      domain: '.test.com'
  },
  store: new MongoStore({url: 'mongodb://localhost/locals'})
}));
app.use(function (req, res, next) {
   if (req.path ==='/login'  ||  req.cookies.name) {
     next()
   } else {
     res.redirect('/login')
   }
})
// ps: cookie的domain值需要设置为一级域名
// ps: 保证mongodb 设置的一致

// 方案二 将session保存在本地
// 使用cookie-session中间件
app.use(cookieSession({
  name: 'session',
  keys: ['czwai123', '321iawzc'], //加密
  maxAge : 1000 * 60 * 3, 
  path: '/',
  domain: '.test.com'
}))
// ps: cookie的domain值需要设置为一级域名
```