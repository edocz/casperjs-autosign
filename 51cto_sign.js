var username = "username";
var password = "password";

var casper = require('casper').create({
    verbose: true, 
    logLevel: 'debug',
    waitTimeout: 10000,
    pageSettings: {
         loadImages:  false,        
         loadPlugins: true,         
         userAgent: 'Mozilla/5.0 (Windows NT 6.1; rv:17.0) Gecko/20100101 Firefox/17.0'
    }
});

casper.start('http://home.51cto.com/index', function() {
    this.fillSelectors('form[action="/index"]', {
        '#loginform-username': username,
        '#loginform-password': password
    }, true);
}).thenOpen('http://home.51cto.com/home', function() {
    console.log('进入个人主页!!!');
}).waitForSelector('#jsSignGetCredits', function() {
    console.log("已进入个人主页!!!");
}).thenClick('#jsSignGetCredits', function() {
    console.log('点击签到!!!');
}).thenOpen('http://down.51cto.com/credits', function(){
    console.log("进入下载页面!!!");
}).waitForSelector('#jsGetCredit', function() {
    console.log("已进入下载页面!!!");
}).thenClick('#jsGetCredit', function() {
    console.log("点击领取下载豆!!!");
});

casper.run();
