var page = require('webpage').create();


// page.viewportSize = { width: 1280, height: 800 };

page.clipRect = {
    top: 0,
    left: 0
  };

page.open('https://zao.awesomes.cn/#/topic?id=646f5692-a8a0-4d2f-b85e-325b162dcb83', function() {
    setTimeout(function() {
        page.render('google.png');
        phantom.exit();
    }, 200);
});