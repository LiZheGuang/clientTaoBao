const assert = require('http-assert');
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

let commoditySchema = new Schema({
    category: {
        type: 'String',
        comment: "商品的类型"
    }, // `test` is a path of type string
    title: {
        type: 'String',
        comment: '标题'
    },
    marketRprice: {
        type: Schema.Types.Mixed,
        comment: '市场价'
    },
    salePrice: {
        type: Schema.Types.Mixed,
        comment: '商城价'
    },
    promotionPrice: {
        type: Schema.Types.Mixed,
        comment: '促销价'
    },
    promotionEndTime: {
        type: Schema.Types.Mixed,
        comment: "促销截止时间"
    },
    picture: {
        type: [Schema.Types.Mixed],
        comment: '图片URL'
    },
    press: {
        type: String,
        comment: "出版社"
    },
    status: {
        type: Number,
        comment: "商品状态 1未上架 1上架 ",
        default: 0
    },
    creationTime: {
        type: Date,
        default: Date.now
    },
    skuData: {
        type: Schema.Types.Mixed,
        index: true
    }
});

let commodity = mongoose.model('merchandise', commoditySchema)

// 创建
module.exports.creation = async ({ category, title, marketRprice, salePrice, promotionPrice, promotionEndTime, picture, press, skuData }) => {
    assert(category && title && marketRprice && salePrice && promotionPrice && promotionEndTime && picture && press && skuData, 402, '缺少必要参数，请认真填写')
    let saveData = new commodity({ category, title, marketRprice, salePrice, promotionPrice, promotionEndTime, picture, press, skuData })
    await saveData.save()
    return { code: 200, msg: "商品创建成功" }
}
// 修改 暂时只支持 修改title salePrice
module.exports.putCommodity = async (body)=>{
    console.log(arguments)
    // assert(id,402,'缺少id')
    // console.log(ag)
    // await commodity.update({ _id: id }, { $set: { title: title }});
    return {code:200,msg:"修改商品"}
}