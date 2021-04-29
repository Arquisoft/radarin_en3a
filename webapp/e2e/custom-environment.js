var NodeEnvironemnt = require('jest-environment-node');
var puppeteer = require('puppeteer');
class CustomEnvironment extends NodeEnvironemnt {
    constructor(config, context){
        super(config, context);
    }
    async setup(){
        await super.setup();
        this.global.browser = await puppeteer.launch({
            ignoreHTTPSErrors: true,
            headless: false,
            slowMo: 100,
            args: ['--window-size=960,540']
        });
        this.global.page = await this.global.browser.newPage();
    }
    async teardown(){
        await this.global.browser.close();
        await super.teardown();
    }
}
module.exports = CustomEnvironment;