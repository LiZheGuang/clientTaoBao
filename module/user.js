const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// user
let userSchema = new Schema({
    nickName: {
        type: String,
        comments: "详细名称",
        default:"洋葱小葱"
    },
    avatarUrl:{
        type:String,
        comments:"头像",
        default:""
    },
    gender:{
        type:Number,
        default:0,
        comments:"0未知 1男 2女"
    },
    phone:String,
    profile:{
        type:String,
        comments:"收货地址"
    },
    account:String,
    password:String,
    token:String
});




mongoose.model('user', userSchema)

