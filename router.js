const KoaRouter = require('koa-router');
let taobao = require('./controller/taobao')
let util = require('./util/util')
let router = new KoaRouter();


router.get('/taobao', async (ctx, next) => {
    let query = ctx.query
    let limet = query.limet
    let creeper = []
    for(let i = 0 ; i < limet;i++){
        let creeperData =  await taobao.creeperVegetables({merchandise:query.merchandise,page:i+1})
        console.log('第' + i +'页')
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