// 检验token

let jwt = require('jsonwebtoken');

module.exports = {
    async isToken(ctx,jwtPassword){
        return new Promise((resover,reject)=>{
            let authorization =  ctx.header.authorization 
            let token = authorization.split('Bearer ')[1]
            // 校验token
            jwt.verify(token,jwtPassword,function(error,res){
                resover(res)
            })
        })
    }
}