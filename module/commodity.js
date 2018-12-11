const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//缺少促销开始时间

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
    promotionCreatTime: {
        type: Schema.Types.Mixed,
        comment: "促销开始时间",
        default:false
    },
    promotionEndTime: {
        type: Schema.Types.Mixed,
        comment: "促销截止时间",
        default:false
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
        comment: "商品状态 0未上架 1上架 ",
        default: 1
    },
    creationTime: {
        type: Date,
        default: Date.now
    },
    abbrId: {
        type: Schema.Types.Mixed,
        index: true,
        comment:"关联的SKUid"
    }
});

mongoose.model('merchandise',commoditySchema)
