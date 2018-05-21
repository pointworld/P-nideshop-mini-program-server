/**
 *
 * default config
 *
 **/

module.exports = {
  default_module: 'api',
  weixin: {
    // appid:  'wxcbe1d349cf9edcaa', // sciclean 小程序 appid
    appid:  'wxf8fcfcff306bd31a', // 小程序 appid
    // secret: 'f4b4b907fda757803c36109f14d01354', // sciclean 小程序密钥
    secret: '4fcf16b33dcef420bd3ccd95afe785d8', // 小程序密钥
    mch_id: '1499922042', // 商户帐号ID
    partner_key: 'asjdfnwefjnwksegnasegjsangejgeww', // 微信支付密钥
    notify_url: 'https://runfa.sciclean.cn/api/pay/notify' // 微信异步通知，例：https://runfa.sciclean.cn/api/pay/notify
    // notify_url: 'http://127.0.0.1:8360/api/pay/notify' // 微信异步通知，例：http://127.0.0.1:8360/api/pay/notify
  },
  express: {
    // 快递物流信息查询使用的是快递鸟接口，申请地址：http://www.kdniao.com/
    appid: '1343947', // 对应快递鸟用户后台 用户ID
    appkey: 'c975d6e0-ae40-4ac2-84b5-161a6d99de70', // 对应快递鸟用户后台 API key
    request_url: 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx'
  }
}