var fs = require('fs');
var path = require('path')
// 导出txt方法
module.exports.fsText = (content)=>{
    fs.writeFile('./static/'+new Date()+'.txt' ,content, { 'flag': 'a' }, function(err) {
        if (err) {
            throw err;
        }
        console.log('Saved.');
    });
    
}