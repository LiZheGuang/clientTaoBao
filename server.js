
const Koa = require('koa');
const static = require('koa-static')
const path = require('path')
// let bodyParser = require('koa-body');
const app = new Koa();
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

async function mongoStart() {
    await mongoose.connect('mongodb://localhost:27017/crawler');
}
mongoStart().then(() => {
    require('./module/user')
    require('./module/press')
    require('./module/shoppingCart')
    require('./module/order')
    require('./module/commodity')
    const router = require('./router.js')
    app.use(bodyParser());

    app.use(static(
        path.join(__dirname, './static')
    ))
    app.use(logger((str, args) => {
        console.log(str)
    }))
    app.use(bodyParser())

    // 错误处理
    // app.use( async (ctx, next) => {
    //     if (!ctx.header || !ctx.header.authorization) {
    //         return await next().catch((err) => {
    //             if(err.status === 401){
    //                 ctx.status = 401;
    //                 ctx.body = 'Protected resource, use Authorization header to get access\n';
    //             }else{
    //                 throw err;
    //             }
    //         })
    //     }else{
    //         await next()
    //     }

    // })

    app.use(router.routes()).use(router.allowedMethods());
}).then(() => {
    app.listen(3000)
})



