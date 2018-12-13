
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
    require('./module/commodity')
    require('./module/user')
    require('./module/press')
    require('./module/shoppingCart')
    require('./module/order')
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
    app.use(function (ctx, next) {
        return next().catch((err) => {
            if (401 == err.status) {
                ctx.status = 401;
                ctx.body = 'Protected resource, use Authorization header to get access\n';
            } else {
                throw err;
            }
        });
    });

    app.use(router.routes()).use(router.allowedMethods());
}).then(() => {
    app.listen(3000)
})



