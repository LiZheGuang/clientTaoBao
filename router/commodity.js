const KoaRouter = require('koa-router');
const merchandise = require('../controller/merchandise')
const shoppingReq = require('../controller/shopping')

const jwt = require('koa-jwt')
const staticConfigs = require('../staticConfigs')
const authorization = require('../lib/authorization')

let router = new KoaRouter();

// 创建商品
router.post('/creation',jwt({ secret: staticConfigs.jwtPassword }), authorization, async (ctx, next) => {
    console.log(ctx.request.body)
    ctx.body = await merchandise.creation(ctx.request.body)
})
// 编辑商品
router.put('/creation',jwt({ secret: staticConfigs.jwtPassword }), authorization, async (ctx, next) => {
    ctx.body = await merchandise.putCommodity(ctx.request.body)
})
// 商品上下架
router.post('/editStatus',jwt({ secret: staticConfigs.jwtPassword }), authorization, async (ctx, next) => {
    ctx.body = await merchandise.putCommodityStatus(ctx.request.body)
})

// 商品列表
router.get('/list', async (ctx, next) => {
    ctx.body = await merchandise.findCommodit(ctx.request.query)
})

// 查询商品名
router.get('/title', async (ctx, next) => {
    ctx.body = await merchandise.findNameCommodit(ctx.request.query)
})

// 商品详情
router.get('/detail', async (ctx, next) => {
    ctx.body = await merchandise.finOneCommodit(ctx.request.query)
})

// 加入购物车
router.post('/shoppingCart',jwt({ secret: staticConfigs.jwtPassword }), authorization, async (ctx, next) => {
    ctx.body = await shoppingReq.pushCart(ctx.request.body)
})

// 查询某个ID下的购物车列表
router.get('/shopping/List',async (ctx,next)=>{
    ctx.body = await shoppingReq.findCartsList(ctx.request.query)
})
module.exports = router;

