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

casper.start('http://vdisk.weibo.com/', function() {
    console.log("进入首页!!!")
}).waitForSelector('a[node-type="loginBtn"]', function() {
    console.log("等待登录按钮!!!")
}).thenClick('a[node-type="loginBtn"]', function() {
    console.log("点击登录按钮")
}).waitForSelector('a[node-type="login_tab"]', function() {
    console.log("等待登录界面!!!")
}).thenClick('a[node-type="login_tab"]', function() {
    console.log("切换到登录界面!!!")
}).waitForSelector('a[node-type="submitBtn"]', function() {
    console.log("等待登录按钮!!!");
    this.fillSelectors('.B_login.form_login_register', {
        'input[name="username"]':    username,
        'input[name="password"]':    password
    }, false);
}).thenClick('a[node-type="submitBtn"]', function() {
    console.log("点击登录!!!");
}).waitForSelector('#checkin_btn', function() {
    console.log("已进入个人主页!!!");
}).thenClick('#checkin_btn', function() {
    console.log('点击签到!!!');
});

casper.run();


// this.fillSelectors('div[node-type="login_frame"]', {
//         'username': username,
//         'password': password
//     }, false);