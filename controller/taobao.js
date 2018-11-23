var request = require('request');
/** 
 * @limit 要爬虫多少页
 * @page  从第几页开始爬
 * @merchandise 商品的名称
*/ 
module.exports.creeperVegetables = async function({merchandise,page}){
    let q = encodeURI(merchandise)
    console.log(page)
  //   let sort = ctx.query.sort ==  undefined ?'1':  ctx.query.sort//sort=_bid 从高到低  bind//从低到高  _ratesum信用排序  _sale 销量优先
    let url = 'https://s.m.taobao.com/search?' //url
    let sort = '_sale' //排序
    //page 页码
    let data = `sort=${sort}&event_submit_do_new_search_auction=1&_input_charset=utf-8&topSearch=1&atype=b&searchfrom=1&action=home%3Aredirect_app_action&from=1&q=${q}&sst=1&n=40&buying=buyitnow&m=api4h5&abtest=6&wlsort=6&page=${page}`
    // 价格从高到低
    
    return new Promise((resove, reject) => {
        request(url + data, function (error, response, body) {
            body = JSON.parse(body)
            resove(body)
            if(error){
                reject(error)
            }
        }); 
    })
  }