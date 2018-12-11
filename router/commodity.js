const KoaRouter = require('koa-router');
const merchandise = require('../controller/merchandise')
let router = new KoaRouter();



// 创建商品
router.post('/creation', async (ctx, next) => {
    console.log(ctx.request.body)
    ctx.body = await merchandise.creation(ctx.request.body)
})
// 编辑商品
router.put('/creation',async(ctx,next)=>{
    ctx.body =  await merchandise.putCommodity(ctx.request.body)
})
// 商品上下架
router.post('/editStatus',async (ctx,next)=>{
    ctx.body =  await merchandise.putCommodityStatus(ctx.request.body)
})

// 商品列表
router.get('/list',async(ctx,next)=>{
    ctx.body = await merchandise.findCommodit(ctx.request.query)
})

// 查询商品名
router.get('/title',async(ctx,next)=>{
    ctx.body = await merchandise.findNameCommodit(ctx.request.query)
})

// 商品详情
router.get('/detail',async(ctx,next)=>{
    ctx.body = await merchandise.finOneCommodit(ctx.request.query)
})

module.exports = router;