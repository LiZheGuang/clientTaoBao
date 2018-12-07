const KoaRouter = require('koa-router');
const merchandise = require('../controller/merchandise')
let router = new KoaRouter();



// 创建商品
router.post('/creation', async (ctx, next) => {
    console.log(ctx.request.body)
    ctx.body = await merchandise.creation(ctx.request.body)
})

router.put('/creation',async(ctx,next)=>{
    ctx.body =  await merchandise.putCommodity(ctx.request.body)
})

// 编辑商品

// 获取某个商品

// 商品上下架

// 

module.exports = router;