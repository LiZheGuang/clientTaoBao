const KoaRouter = require('koa-router');
const mongoose = require('mongoose');
let taobao = require('../controller/taobao')
let util = require('../util/util')
let router = new KoaRouter();
var Schema = mongoose.Schema;

let  commoditySchema = new Schema({
    data: {
        type: Schema.Types.Mixed,
        comment: "爬虫数据"
    }, // `test` is a path of type string
    creationTime:{
        type:Date,
        default: Date.now
    },
    page:{
        type:Schema.Types.Mixed,
        comment:"爬虫的第几页的数据"
    },
    sosoName:{
        type:String,
        comment:"搜索的名称"
    }
  });

let commodity = mongoose.model('commodity',commoditySchema)


router.get('/list', async (ctx, next) => {
    let query = ctx.query
    let limet = query.limet
    let creeper = []
    for(let i = 0 ; i < limet;i++){
        let creeperData =  await taobao.creeperVegetables({merchandise:query.merchandise,page:i+1})
        console.log('第' + i +'页')
        let saveObject = {
            data:creeperData,
            page:i + 1,
            sosoName:query.merchandise
        }
        let saveData = new commodity(saveObject)
        await saveData.save()
        console.log('存储成功')
        creeper.push(creeperData.listItem)
    }

    ctx.body = {ok :true,data:creeper}
     // 处理数据 晒出链接地址 与标题
     let data = creeper
     let body = ''
     // 循环最外层
     for(let i = 0;i<data.length;i++){
       itemFor(data[i])
     }
     util.fsText(body)
    // 重构数据
    function itemFor(keyData){
        for(let keyI = 0;keyI<keyData.length;keyI++){
            let itemData = keyData[keyI]
            let title = itemData.title
            let taobaoUrl = itemData.item_id
            let content = `https://detail.tmall.com/item.htm?id=${taobaoUrl}              ${title}\r\n`
            body+=content
        }   
    }
})



module.exports = router;