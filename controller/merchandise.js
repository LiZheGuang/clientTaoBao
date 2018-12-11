const assert = require('http-assert');

const mongoose = require('mongoose');

const commodity = mongoose.model('merchandise')

const abbrCommodity = mongoose.model('abbr')
// 创建
module.exports.creation = async ({ category, title, marketRprice, salePrice, promotionPrice, promotionEndTime, picture, press, skuData }) => {
    assert(category && title && marketRprice && salePrice && promotionPrice && promotionEndTime && picture && press && skuData, 402, '缺少必要参数，请认真填写')
    // sku商品信息存入
    let abbrCommoditySave = new abbrCommodity({
        repertory:skuData.repertory,
        title:skuData.title,
        version:skuData.version,
        picture:[{}]
    })
    let abbrCommodityRes = await abbrCommoditySave.save()

    let skuId = abbrCommodityRes._id

    let saveData = new commodity({ category, title, marketRprice, salePrice, promotionPrice, promotionEndTime, picture, press, abbrId:skuId })

    await saveData.save()

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
    assert(status, 402, 'status no ')
    let findData = await commodity.find({ status: status })

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
    let findOnewData = await commodity.findOne({ _id: id })
    return {
        code: 200,
        data: findOnewData
    }
}