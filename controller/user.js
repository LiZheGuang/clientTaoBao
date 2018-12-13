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
