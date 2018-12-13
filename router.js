const KoaRouter = require('koa-router');
let router = new KoaRouter();

// 商品
router.use('/commodity', require('./router/commodity').routes())
// 出版社
router.use('/press', require('./router/press').routes())
// 用户
router.use('/user', require('./router/user').routes())
// 订单
router.use('/order', require('./router/order').routes())


module.exports = router;