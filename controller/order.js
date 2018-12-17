const assert = require('http-assert');

const mongoose = require('mongoose');

const pressModel = mongoose.model('press')

const abbrsModel = mongoose.model('abbr')

// const shoppingModel = mongoose.model('shoppingCart')

const userModel = mongoose.model('user')

const orderModel = mongoose.model('order')

// 确认订单
module.exports.verify = async (body) => {

    let abbrId = body.abbrId
    let userId = body.userId
    let price = body.price
    let amount = body.amount

    // 关联查询商品详细信息
    let merchanDises = await abbrsModel.findOne({ _id: abbrId }).populate('goodsId')
    console.log(merchanDises)
    // 查询user
    let userRes = await userModel.findOne({ _id: userId }, { account: 0, password: 0, token: 0 })
    // 计算总价
    let orderPrice = amount * price
    console.log(orderPrice)
    let returnData = {
        orderTitle: merchanDises.title,
        version: merchanDises.version,
        picture: merchanDises.picture,
        price: orderPrice,
        userInfo: userRes
    }
    return {
        code: 200,
        msg: '确认订单',
        data: returnData
    }
}

// 生成订单
module.exports.create = async ({ abbrId, userId, orderPrice, amount }) => {

    assert(abbrId, '402', "abbrId")

    let orderDetail = await abbrsModel.findOne({
        _id: abbrId
    }).populate('goodsId')

    let pressId = orderDetail.goodsId.pressId
    // 出版社
    // let pressDetail = await pressModel.findOne({ _id: pressId }, { __v: 0 })
    // let userInfo = await userModel.findOne({ _id: userId }, { __v: 0 })

    let orderModelSave = new orderModel({
        orderPrice: orderPrice,
        amount: amount,
        orderTitle: orderDetail.title,
        version: orderDetail.version,
        status: 1,
        userId: userId,
        profile: "天通苑西园一区",
        abbrId: abbrId,
        pressesId: pressId
    })
    let saveRes = await orderModelSave.save()
    // 30分钟如果还未支付去取消当前订单
    moduleJs.countCall(saveRes._id)

    return {
        code: 200,
        msg: "生成订单"
    }
}

// 取消订单状态

module.exports.call = async ({ orderId }) => {
    assert(orderId, 402, "none id")
    await moduleJs.callOrderJs(orderId)
    return {
        code: 200,
        msg: "订单已取消"
    }
}

// 订单详情
module.exports.detail = async ({ orderId }) => {
    assert(orderId, '402', '缺少订单id')
    let orderRes = await orderModel.
        findOne(
            { _id: orderId },
            { __v: 0, promotionEndTime: 0, promotionCreatTime: 0 }
        ).populate('userId', 'nickName avatarUrl account ').populate('pressesId', 'pressName site officialUrl phone').populate('abbrId', 'title version picture goodsId')

    return {
        code: 200,
        data: orderRes
    }
}

// 订单列表

module.exports.getList = async ({userId}) => {
    assert(userId , '402','用户id')
    let orderListRes = await orderModel.find({userId:userId}).populate('userId', 'nickName avatarUrl account ').populate('pressesId', 'pressName site officialUrl phone').populate('abbrId', 'title version picture goodsId')
    return {
        code:200,
        orderlist:orderListRes
    }
}

// admin后台查询订单列表
module.exports.getAdminList = async ({userId})=>{
    let userRes = await userModel.findOne({_id:userId})
    let returnRes = {}
    if(userRes.isAdmin){
        let orderListRes = await orderModel.find().populate('userId').populate('pressesId').populate('abbrId')
        returnRes = {
            code:200,
            orderlist:orderListRes
        }
    }else{
        returnRes = {
            code:202,
            msg:"当前用户没有权限查看"
        }
    }
    return returnRes

}
class moduleComment {
    // 取消订单
    async callOrderJs(id) {
        return await orderModel.updateOne({
            _id: id,
        }, { $set: { status: 2 } })
    }
    // 30分钟后取消订单
    async countCall(goodsId) {
        let times = 60 * 1000 * 30
        let countTime = setTimeout(async () => {
            // 先查询这个商品ID的状态是否还是0
            let orderRes = await orderModel.findOne({ _id: goodsId })
            console.log('触发倒计时')
            if (orderRes.status === 0) {
                await orderModel.updateOne({ _id: goodsId }, { $set: { status: 2 } })
                // 后续需要更新 
            }
            clearTimeout(countTime)
        }, times)
    }
}

let moduleJs = new moduleComment()