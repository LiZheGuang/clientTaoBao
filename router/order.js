const KoaRouter = require('koa-router');
const orderReq = require('../controller/order')
let router = new KoaRouter();

// 确认订单
router.post('/verify', async (ctx, next) => {
    // ctx.body = {code:200}
    ctx.body = await orderReq.verify(ctx.request.body)
})

// 生成订单
router.post('/', async (ctx, next) => {
    // ctx.body = {code:200}
    ctx.body = await orderReq.create(ctx.request.body)
})

// 订单详情
router.get('/', async (ctx, next) => {
    ctx.body = await orderReq.detail(ctx.request.query)
})

// 取消订单
router.post('/call', async (ctx, next) => {
    ctx.body = await orderReq.call(ctx.request.body)
})


module.exports = router;