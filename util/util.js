1
var fs = require('fs');
var path = require('path')

// 导出txt方法
module.exports.fsText = async  (content)=>{
    let name =  new Date().getTime() +'.txt'
        return new Promise((resove,reject)=>{
            fs.writeFile('./static/' +name ,content, { 'flag': 'a' }, function(err) {
                if (err) {
                    throw err;
                }
                resove(name)
                console.log('Saved.');
            });
        })

    
    
}