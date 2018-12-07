
//每5秒就发出一次hello
var id = setInterval(function(){
    toast("我是js来远程控制的哟~ 10秒后跳转到子弹短信");
}, 5000);
//1分钟后取消循环
setTimeout(function(){
    clearInterval(id);
    launchApp("子弹短信");
    // 等待五秒后点击
    sleep(50000);
    toast("暂停五秒后的弹窗");

    
}, 10 * 1000);