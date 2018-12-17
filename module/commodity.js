const mongoose = require('mongoose');
var Schema = mongoose.Schema;

//缺少促销开始时间

let commoditySchema = new Schema({
    category: {
        type: String,
        comment: "商品的类型"
    }, // `test` is a path of type string
    title: {
        type: String,
        comment: '标题'
    },
    describe:{
        type:String,
        default:"书馆象浩瀚大海中的一艘油轮,给你充分的休息与补给;图书馆像茫茫宇宙中的空间站,有了它我们才能站住脚跟;图书馆象落满树叶的后山,一页页的书汇总在一起,才最最塌实.不会失重于知识的维度."
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
        default: false
    },
    promotionEndTime: {
        type: Schema.Types.Mixed,
        comment: "促销截止时间",
        default: false
    },
    picture: {
        type: [Schema.Types.Mixed],
        comment: '图片URL'
    },
    pressId: {
        type: Schema.ObjectId,
        ref:"press"
    },
    status: {
        type: Number,
        comment: "商品状态 0未上架 1上架 ",
        default: 0
    },
    creationTime: {
        type: Date,
        default: Date.now
    },
    abbrId: [{
        type: Schema.ObjectId,
        ref: 'abbr'
    }],
    isShow:{
        type:Boolean,
        default:false
    }

});


// 库存
let abbrSchema = new Schema({
    repertory: {
        type: Number,
        comments: "库存剩余数量",
    },
    title: {
        type: String,
        comments: "详细名称"
    },
    priceSpread: {
        type: Number,
        comments: "差价",
        default: 0
    },
    version: {
        type: Schema.Types.Mixed,
        comments: "版本名称"
    },
    goodsId: {
        type: Schema.ObjectId,
        ref: 'merchandise'
    },
    picture: [{
        url: String,
        urlTitle: String
    }]
});

mongoose.model('press')

mongoose.model('abbr', abbrSchema)

mongoose.model('merchandise', commoditySchema)
