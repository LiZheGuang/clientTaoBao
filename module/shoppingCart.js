const mongoose = require('mongoose');
var Schema = mongoose.Schema;


// 购物车商品模型
let cartSchema = new Schema({
    creationTime: {
        type: Date,
        default: Date.now,
        comments:"加入购物车的时间"
    },
    price:{
        type:Schema.Types.Mixed,
        comments:"购物车内的价格"
    },
    amount:{
        type:Number,
        comments:"此商品数量"
    },
    goodsId:{
        type:String,
        comments:"商品id"
    },
    abbrId:{
        type:Schema.ObjectId,
        ref:"abbr"
    },
    userId:{
        type:String,
        comments:"用户的id，谁的"
    }
});

cartSchema.index({ userId: 1, abbrId: -1 ,goodsId:-1 })
mongoose.model('abbr')

mongoose.model('shoppingCart', cartSchema)
