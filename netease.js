var username = "username";
var password = "password";

var casper = require('casper').create({
    verbose: true, 
    logLevel: 'debug',
    waitTimeout: 20000,
    pageSettings: {
         loadImages:  false,        
         loadPlugins: true,         
         userAgent: 'Mozilla/5.0 (Windows NT 6.1; rv:17.0) Gecko/20100101 Firefox/17.0'
    }
});

casper.start('http://music.163.com', function() {
    console.log('网易!!!');
}).waitForSelector('a[data-action="login"]', function() {
    console.log("等待登录按钮!!!");
}).thenClick('a[data-action="login"]', function() {
    console.log("点击登录!!!");
}).waitForSelector('a[data-type="netease"]', function() {
    console.log("选择登录方式!!!");
}).thenClick('a[data-type="netease"]', function() {
    console.log('点击网易邮箱方式登录!!!');
}).waitForSelector('input[class="js-input u-txt"]', function() {
    this.sendKeys('input[placeholder="请输入帐号"]', username);
    this.sendKeys('input[placeholder="请输入密码"]', password);
    this.click('a[class="js-primary u-btn2 u-btn2-2"]');
}).waitForSelector('a[class="name f-thide f-fl f-tdn"]', function() {
    console.log("已进入个人主页!!!");
    this.page.switchToChildFrame(0);
    this.click('a[data-action="checkin"]');
    console.log('点击签到!!!');
})

casper.run();