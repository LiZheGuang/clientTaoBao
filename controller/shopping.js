const assert = require('http-assert');

const mongoose = require('mongoose');

const commodity = mongoose.model('merchandise')

const abbrCommodity = mongoose.model('abbr')

const shoppingCartModule = mongoose.model('shoppingCart')

// 加入购物车
module.exports.pushCart = async ({ abbrId, amount ,userId}) => {
    assert(abbrId, 402, '缺少必要参数，请认真填写')
    assert(amount, 402, '缺少必要参数，请认真填写')
    assert(userId, 402, '缺少必要参数，请认真填写')
    let abbrCommodityData = await abbrCommodity.findOne({ _id: abbrId }, { __v: 0 }).populate('goodsId')
    // 拿到商品差价 与商品价相减，获得成交价

    let price = abbrCommodityData.goodsId.promotionPrice  - abbrCommodityData.priceSpread
    // let shoppingCartSave = new shoppingCartModule({
    //     goodsId,amount,
    // })
    let shoppingSave = new shoppingCartModule({
        price:price,
        goodsId:abbrCommodityData.goodsId._id,
        abbrId,
        amount,
        userId
    })
    await shoppingSave.save()
    return { code: 200, data:'加入购物车成功' }
}
