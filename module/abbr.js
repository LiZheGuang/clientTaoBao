const mongoose = require('mongoose');
var Schema = mongoose.Schema;

let pictureSchema = new Schema({
    url:{
        type:String,
        comments:"图片链接地址",
        default:"http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E4%B8%89%E4%BD%93&step_word=&hs=0&pn=12&di=91572017350&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=777645829%2C1873139044&os=2373354084%2C1656594747&simid=0%2C0&adpicid=0&lpn=0&ln=1805&fr=&fmq=1544512931149_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=&height=&face=undefined&ist=&jit=&cg=&oriquery=&objurl=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171005%2Ff7073fce3f454b44a1376aa4310b7dff.jpeg&gsm=3c&rpstart=0&rpnum=0&tabname=&islist=&querylist=&selected_tags="
    },
    urlTitle:{
        type:String,
        comments:"图片标题",
        default:"图片的标题"
    }
})
// 库存
let abbrSchema = new Schema({
   repertory:{
       type:Number,
       comments:"库存剩余数量",
   },
   title:{
       type:String,
       comments:"详细名称"
   },
   priceSpread:{
       type:Number,
       comments:"差价",
       default:0
   },
   version:{
       type:Schema.Types.Mixed,
       comments:"版本名称"
   },
   picture:pictureSchema
});


mongoose.model('abbr',abbrSchema)
