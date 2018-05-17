# 项目结构

项目结构如下：

```text
  |--- development.js   //开发环境下的入口文件
  |--- production.js    //生产环境下的入口文件
  |--- nginx.conf       //nginx 配置文件：服务器端：nginx 反向代理
  |--- package.json
  |--- pm2.json         //pm2 配置文件：服务器端：使用 PM2 管理服务
  |--- PROJECT.md
  |--- README.md
  |--- src
  | |--- admin   ==============================================
  | | |--- config      
  | | | |--- config.js
  | | |--- controller  
  | | | |--- auth.js   
  | | | |--- base.js   
  | | | |--- brand.js   
  | | | |--- category.js   
  | | | |--- goods.js   
  | | | |--- index.js   
  | | | |--- order.js   
  | | | |--- topic.js   
  | | | |--- upload.js   
  | | | |--- user.js    
  | | |--- logic     
  | | | |--- auth.js   
  | | | |--- brand.js   
  | | | |--- category.js   
  | | | |--- goods.js   
  | | | |--- index.js   
  | | | |--- order.js   
  | | | |--- topic.js   
  | | | |--- upload.js   
  | | | |--- user.js     
  | | |--- model       
  | | | |--- index.js   
  | | | |--- order.js  
  | | |--- service     
  | | | |--- token.js  
  | |--- api   ================================================
  | | |--- config      
  | | | |--- config.js
  | | |--- controller  //控制器目录
  | | | |--- address.js 
  | | | |--- auth.js   
  | | | |--- base.js   
  | | | |--- brand.js   
  | | | |--- cart.js   
  | | | |--- catalog.js   
  | | | |--- collect.js   
  | | | |--- comment.js   
  | | | |--- footprint.js   
  | | | |--- goods.js   
  | | | |--- index.js  
  | | | |--- order.js  
  | | | |--- pay.js  
  | | | |--- region.js  
  | | | |--- search.js  
  | | | |--- topic.js  
  | | | |--- user.js    
  | | |--- logic   
  | | | |--- address.js 
  | | | |--- auth.js   
  | | | |--- base.js   
  | | | |--- brand.js   
  | | | |--- cart.js   
  | | | |--- catalog.js   
  | | | |--- collect.js   
  | | | |--- comment.js   
  | | | |--- footprint.js   
  | | | |--- goods.js   
  | | | |--- index.js  
  | | | |--- order.js  
  | | | |--- pay.js  
  | | | |--- region.js  
  | | | |--- search.js  
  | | | |--- topic.js  
  | | | |--- user.js    
  | | |--- model       
  | | | |--- cart.js   
  | | | |--- catalog.js   
  | | | |--- collect.js   
  | | | |--- footprint.js   
  | | | |--- goods.js   
  | | | |--- order.js   
  | | | |--- order_express.js   
  | | | |--- region.js   
  | | | |--- shipper.js   
  | | |--- service     
  | | | |--- express.js    
  | | | |--- token.js    
  | | | |--- weixin.js    
  | |--- common  ===============================================================
  | | |--- bootstrap  ------------------------------ 启动自动执行目录
  | | | |--- master.js    //Master 进程下自动执行
  | | | |--- worker.js    //Worker 进程下自动执行
  | | |--- config     ------------------------------ 配置文件
  | | | |--- adapter.js              //adaptor config to cache, database, logger
  | | | |--- config.js               //default config
  | | | |--- config.production.js    //生产环境下的默认配置文件，和 config.js 合并
  | | | |--- database.js             //数据库配置
  | | | |--- extend.js      
  | | | |--- middleware.js           //集中处理中间件
  | | | |--- router.js               //自定义路由配置文件
```