const assert = require('http-assert');

const mongoose = require('mongoose');

const commodity = mongoose.model('user')

const jwt = require('jsonwebtoken')

const staticConfigs = require('../staticConfigs')
// 创建
module.exports.creation = async ({ account, password }) => {
    assert(account && password, 402, '缺少必要参数，请认真填写')
    // sku商品信息存入
    let token = jwt.sign({ account, password }, staticConfigs.jwtPassword, {
        expiresIn:'24h'
    });
    let userSave = new commodity({
        account, password, token
    })
    await userSave.save()
    return { code: 200, msg: "注册完成", token: token }
}

// 查询用户
module.exports.findUser = async ({})=>{
    let userlist = await commodity.find()
    return {
        code:200,
        userList:userlist
    }
}
// 查询用户是否是admin 
module.exports.findOneIsAdmin = async ({account,password})=>{

    try{
        let user = await commodity.findOne({account:account})
        if(password === user.password && user.isAdmin){
            return{
                code : 200,
                msg:"登录成功",
                user:user
            }
        }else{
            return{
                code:402,
                msg:"密码不正确或者不属于管理员！"
            }
        }

    }catch(err){
        return{
            code:402,
            msg:"没有这个用户"
        }
    }


}