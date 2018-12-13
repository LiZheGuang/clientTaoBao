const mongoose = require('mongoose');
var Schema = mongoose.Schema;


// 库存
let pressSchema = new Schema({
    pressName: {
        type: String,
        comments: "出版社名称",
    },
    site:{
        type:String,
        comments:"地点"
    },
    officialUrl:{
        type:String,
        comments:"官网地址"
    },
    phone:{
        type:String,
        comments:"联系电话"
    }
});




mongoose.model('press', pressSchema)
