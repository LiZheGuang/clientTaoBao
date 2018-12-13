// 检验token

const jwtwebToken = require('jsonwebtoken');
const jwt = require('koa-jwt')
const staticConfigs = require('../staticConfigs')

module.exports = async(ctx, next)=>{
    // console.log('11')
    let authorization = ctx.header.authorization
    let token = authorization.split('Bearer ')[1]
    let verifyRes = await jwtwebToken.verify(token,  staticConfigs.jwtPassword)

    if(verifyRes){
        await next()
    }else{
        ctx.body = {
            msg:'token失效'
        }
    }
}
