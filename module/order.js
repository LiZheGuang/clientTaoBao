const mongoose = require('mongoose');
var Schema = mongoose.Schema;


// 库存
let orderSchema = new Schema({
    orderPrice: {
        type: Number,
        comments: "商品总价"
    },
    amount: {
        type: Number,
        comments: "订单生成后的商品数量"
    },
    orderTitle: {
        type: String,
        comments: "商品名称"
    },
    version: {
        type: String,
        comments: "版本"
    },
    creationTime: {
        type: Date,
        default: Date.now,
        comments: "生成订单的时间"
    },
    status: {
        type: Number,
        comments: "订单状态 0未支付 1支付 2未支付取消订单 3发起退款 "
    },
    payStatus: {
        type: Number,
        comments: "支付后的订单状态 0未发货 1已发货 2已签收 3拒收"
    },
    userId: {
        type: Schema.ObjectId,
        ref: 'user'
    },
    abbrId: {
        type: Schema.ObjectId,
        ref: "abbr"
    },
    pressesId: {
        type: Schema.ObjectId,
        ref: "press"
    },
    profile: {
        type: String,
        comments: "收货地址"
    },

});

mongoose.model('user')

mongoose.model('press')

mongoose.model('abbr')


mongoose.model('order', orderSchema)

