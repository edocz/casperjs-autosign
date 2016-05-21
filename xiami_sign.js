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

casper.start('https://login.xiami.com/member/login', function() {
    this.fillSelectors('form[action="https://login.xiami.com/member/login"]', {
        '#email': username,
        '#password': password
    }, false);
}).waitForSelector('#submit', function() {
    console.log("等待登录按钮!!!");
}).thenClick('#submit', function() {
    console.log("点击登录!!!");
}).waitForSelector('.tosign', function() {
    console.log("已进入个人主页!!!");
}).thenClick('.tosign', function() {
    console.log('点击签到!!!');
});

casper.run();
