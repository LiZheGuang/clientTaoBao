const KoaRouter = require('koa-router');
const press = require('../controller/press')
let router = new KoaRouter();



// 创建商品
router.post('/', async (ctx, next) => {
    console.log(ctx.request.body)
    // ctx.body = {code:200}
    ctx.body = await press.creation(ctx.request.body)
})
// 编辑商品
router.put('/',async(ctx,next)=>{
    ctx.body =  await merchandise.putCommodity(ctx.request.body)
})

module.exports = router;