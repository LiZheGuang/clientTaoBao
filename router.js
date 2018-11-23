const KoaRouter = require('koa-router');
let router = new KoaRouter();


router.use('/taobao',require('./router/taobao').routes())



module.exports = router;