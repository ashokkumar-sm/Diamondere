const { Given, When, Then } = require('@wdio/cucumber-framework');
const BrowserUtil = require('../../CommonUtils/BrowserUtil');
const ElementUtil = require('../../CommonUtils/ElementUtil');
const dmd = require('../Configs/dmd_' + global.testEnv + '.js');


Given(/^I browse Diamondere website$/, () => {
    browser.url(dmd.config.url);
    BrowserUtil.maximize();
    BrowserUtil.wait(3)
});

