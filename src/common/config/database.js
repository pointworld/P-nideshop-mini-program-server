/**
 *
 * 数据库配置
 *
 **/

const mysql = require('think-model-mysql') // Mysql model adapter

module.exports = {
  handle: mysql,
  database: 'nideshop',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'wrf956750621', // 阿里云服务器数据库密码 | 本地数据库密码
  dateStrings: true
}