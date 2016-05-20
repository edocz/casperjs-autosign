var username = "username";
var password = "password";

var casper = require('casper').create({
    verbose: true, 
    logLevel: 'debug',
    pageSettings: {
         loadImages:  false,        
         loadPlugins: true,         
         userAgent: 'Mozilla/5.0 (Windows NT 6.1; rv:17.0) Gecko/20100101 Firefox/17.0'
    }
});

casper.start('http://v2ex.com/signin', function() {
    this.fillSelectors('form[action="/signin"]', {
        'input[type="text"]':  username,
        'input[type="password"]': password
    }, false);
}).waitForSelector('.super', function() {
    console.log("进入登录戒面!!!")
}).thenClick('.super', function() {
    console.log("点击登录!!!");
}).thenOpen('http://v2ex.com/mission/daily', function(){
    console.log("登录操作执行完毕!!!");
}).waitForSelector('.super', function() {
    console.log("已进入签到页面!!!");
}).thenClick('.super', function() {
    console.log("已签到!!!");
});

casper.run();
