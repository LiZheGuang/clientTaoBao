const KoaRouter = require('koa-router');
let router = new KoaRouter();


router.use('/commodity',require('./router/commodity').routes())

module.exports = router;