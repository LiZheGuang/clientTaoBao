const assert = require('http-assert');

const mongoose = require('mongoose');

const commodity = mongoose.model('press')

// 创建
module.exports.creation = async ({ pressName, site, officialUrl, phone }) => {
    assert(pressName && site && officialUrl && phone, 402, '缺少必要参数，请认真填写')
    // sku商品信息存入
    let pressSave = new commodity({
        pressName,
        site,
        officialUrl,
        phone
    })
    await pressSave.save()

    return { code: 200, msg: "出版社创建成功" }
}
