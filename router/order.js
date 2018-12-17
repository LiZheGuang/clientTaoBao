const KoaRouter = require('koa-router');
const orderReq = require('../controller/order')
let router = new KoaRouter();


const jwt = require('koa-jwt')
const staticConfigs = require('../staticConfigs')
const authorization = require('../lib/authorization')

// 确认订单
router.post('/verify', jwt({ secret: staticConfigs.jwtPassword }), authorization, async (ctx, next) => {
    // ctx.body = {code:200}
    ctx.body = await orderReq.verify(ctx.request.body)
})

// 生成订单
router.post('/', jwt({ secret: staticConfigs.jwtPassword }), authorization, async (ctx, next) => {
    // ctx.body = {code:200}
    ctx.body = await orderReq.create(ctx.request.body)
})

// 订单详情
router.get('/', jwt({ secret: staticConfigs.jwtPassword }), authorization, async (ctx, next) => {
    ctx.body = await orderReq.detail(ctx.request.query)
})

// 取消订单
router.post('/call', jwt({ secret: staticConfigs.jwtPassword }), authorization, async (ctx, next) => {
    ctx.body = await orderReq.call(ctx.request.body)
})

// 订单列表
router.get('/list', jwt({ secret: staticConfigs.jwtPassword }), authorization, async (ctx, next) => {
    ctx.body = await orderReq.getList(ctx.request.query)
})

// 后台查询订单列表
router.get('/adminList', jwt({ secret: staticConfigs.jwtPassword }), authorization, async (ctx, next) => {
    ctx.body = await orderReq.getAdminList(ctx.request.query)
})


module.exports = router;