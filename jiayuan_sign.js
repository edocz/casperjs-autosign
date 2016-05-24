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

casper.start('http://www.jiayuan.com/', function() {
    this.fillSelectors('form[id="hder_login_form"]', {
        '#jycm_zh_input': username,
        '#jycm_pass_input': password
    }, false);
}).waitForSelector('.jycm_top_btn_dl', function() {
    console.log("已进入首页!!!");
}).thenClick('.jycm_top_btn_dl', function() {
    console.log('点击登录!!!');
}).thenOpen('http://www.jiayuan.com/club/', function(){
    console.log("进入签到页面!!!");
}).waitForSelector('.qd_redBtn', function() {
    console.log("已进入签到页面!!!");
}).thenClick('.qd_redBtn', function() {
    console.log("点击领取金豆!!!");
});

casper.run();
