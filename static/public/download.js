function download(filename,content,contentType) {
    if (!contentType) contentType = 'application/octet-stream';
    var a = document.createElement('a');
    var blob = new Blob([content], { 'type': contentType });
    a.href = window.URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}
window.onload = function(){

    $('body #clickServer').on('click',function(){
        axiosGetTbList()
    })


    function axiosGetTbList(){
        let merchandise = $('#name').val()
        let limet = $('#limet').val()
        let url = '/taobao/list?merchandise='+merchandise+'&limet=' + limet

        $.get(url,{},function(res){
            if(res.ok){
                alert('爬取成功')
                let data = res.data
                let bodyText =  forDataItem(data)
                download(new Date(),bodyText)
            }
        })
    }

    function forDataItem(keyDataFor){
        let body
        // 循环最外层
        for(let i = 0;i<keyDataFor.length;i++){
            itemFor(keyDataFor[i])
        }
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
        return body
    }
}
