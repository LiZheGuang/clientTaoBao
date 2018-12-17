const assert = require('http-assert');

const mongoose = require('mongoose');

const commodity = mongoose.model('merchandise')

const abbrCommodity = mongoose.model('abbr')

const pressModel = mongoose.model('press')



// 创建
module.exports.creation = async ({ category, title, marketRprice, salePrice, promotionPrice, promotionEndTime, picture, pressId, skuData }) => {
    assert(category && title && marketRprice && salePrice && promotionPrice && promotionEndTime && picture  && skuData, 402, '缺少必要参数，请认真填写')
    // sku商品信息存入
    let saveData = new commodity({ category, title, marketRprice, salePrice, promotionPrice, promotionEndTime, picture ,pressId})
    await saveData.save()
    let abbrCommoditySave = new abbrCommodity({
        repertory: skuData.repertory,
        title: skuData.title,
        version: skuData.version,
        picture: skuData.picture,
        goodsId: saveData._id
    })
    await abbrCommoditySave.save()

    let upDat = await commodity.update({ _id: saveData._id }, { $set: {abbrId:abbrCommoditySave._id} })
    return { code: 200, msg: "商品创建成功" }
}
// 修改商品标题与价格 暂时只支持 修改title salePrice
module.exports.putCommodity = async ({ id, title, salePrice }) => {
    // console.log(arguments)
    assert(id, 402, '缺少id')
    // console.log(ag)
    await commodity.update({ _id: id }, { $set: { title: title, salePrice: salePrice } });
    return { code: 200, msg: "修改商品成功" }
}

// 上架商品 下架
module.exports.putCommodityStatus = async ({ id, status }) => {
    assert(id, 402, '缺少id')
    assert(status, 402, '缺少参数')
    await commodity.update({ _id: id }, {
        $set: {
            status: status
        }
    })
    return { code: 200, msg: "商品状态已修改" }
}

// 商品查询(通过status)
module.exports.findCommodit = async ({ status }) => {
    // assert(status, 402, 'status no ')
    let findQueryData = {}
    if(status){
        findQueryData = { status: status}
    }
    let findData = await commodity.find(findQueryData).populate('abbrId').populate('pressId')

    return {
        code: 200,
        list: findData
    }
}
// 商品查询（通过关键词查询）
module.exports.findNameCommodit = async ({ title }) => {
    assert(title, 402, "缺少title参数")
    let findData = await commodity.find(
        {
            title: { '$regex': title },
            status: 1
        })
    return {
        code: 200,
        list: findData
    }
}

// 传入id查询商品详情
module.exports.finOneCommodit = async ({ id }) => {
    assert(id, 402, "缺少必要参数")
    // 关联查询
    let findOnewData = await commodity.findOne({ _id: id }).populate('abbrId').populate('pressId')

    return {
        code: 200,
        data: findOnewData
    }
}