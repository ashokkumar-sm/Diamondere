const fs = require('fs');
const path = require('path')
const argv = require("yargs").argv;
const { removeSync } = require('fs-extra');
///const wdioParallel = require('wdio-cucumber-parallel-execution');
const wdioParallel  = require("fix-esm").require("wdio-cucumber-parallel-execution");
const browserUtil = require('./CommonUtils/BrowserUtil');
const DateUtil = require('./CommonUtils/DateUtil');
const Log = require('./CommonUtils/Log');

// The below module is used for cucumber html report generation
const reporter = require('cucumber-html-reporter');
const currentTime = DateUtil.getDateISOString().replace(/:/g, "-");
const jsonTmpDirectory = './reports/json/tmp/';
const junitReportDirectory = './reports/junit/';
//const cucumberJson = require('cucumber-html-reporter').CucumberJSJSON;
const cucumberJson = require('wdio-cucumberjs-json-reporter').default;


// For receiving --log parameters.
logLevelSettings = argv.log || "DEBUG" //if --log is supplied, set loglevel; else, default to DEBUG
Log.setLogLevel(logLevelSettings);

// For receiving --env parameters.
testEnv = argv.env || "staging" //if --env is supplied, set env; else, default to CTE
Log.audit('Current Test Environment: ' + testEnv);

//For receiving --headless parameter
// if --headless parameter is supplied, set the browser args
// https://webdriver.io/docs/docker/
chromeArgs = [];
if (argv.headless) {
    Log.audit('Browser mode: Headless')
    chromeArgs = ['--headless', '--disable-gpu', 'window-size=1600,900', '--no-sandbox', '--disable-infobars', '--disable-dev-shm-usage', '--disable-features=UserAgentClientHint'];

}
else { Log.audit('Browser mode: On Screen') }


// Store the directory path in a global, which allows us to access this path inside our tests
global.downloadDir = path.join(__dirname, 'tempDownloads');

// If parallel execution is set to true, then create the Split the feature files
// And store then in a tmp spec directory (created inside `the source spec directory)
if (argv.parallel === 'true') {
    tmpSpecDirectory = `${sourceSpecDirectory}/tmp`;
    wdioParallel.performSetup({
        sourceSpecDirectory: sourceSpecDirectory,
        tmpSpecDirectory: tmpSpecDirectory,
        cleanTmpSpecDirectory: true
    });
    featureFilePath = `${tmpSpecDirectory}/*.feature`;
}


exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    runner: 'local',

    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // of the configuration file being run.
    //
    // The specs are defined as an array of spec files (optionally using wildcards
    // that will be expanded). The test for each spec file will be run in a separate
    // worker process. In order to have a group of spec files run in the same worker
    // process simply enclose them in an array within the specs array.
    //
    // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
    // then the current working directory is where your `package.json` resides, so `wdio`
    // will be called from there.
    //
    specs: [
        './Diamondere/Features/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://saucelabs.com/platform/platform-configurator
    //
    capabilities: [{

        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 10,
        browserName: 'chrome',
        "browserVersion": "stable",
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            "args": chromeArgs,
            prefs: {
                'directory_upgrade': true,
                'prompt_for_download': false,
                'download.default_directory': downloadDir
            }

        }

        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
    },
    ],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/appium-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 0,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['chromedriver'],

    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'cucumber',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: [//for cucumberjson
        ['cucumberjs-json', {
            jsonFolder: jsonTmpDirectory,
            language: 'en',
        }],],

    //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        // <string[]> (file/dir) require files before executing features
        require: ['./Diamondere/StepDefs/*.js'],
        // <boolean> show full backtrace for errors
        backtrace: false,
        // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        requireModule: [],
        // <boolean> invoke formatters without executing steps
        dryRun: false,
        // <boolean> abort the run on first failure
        failFast: false,
        // <boolean> hide step definition snippets for pending steps
        snippets: true,
        // <boolean> hide source uris
        source: true,
        // <boolean> fail if there are any undefined or pending steps
        strict: false,
        // <string> (expression) only execute the features or scenarios with tags matching the expression
        tagExpression: '',
        // <number> timeout for step definitions
        timeout: 180000,
        // <boolean> Enable this config to treat undefined definitions as warnings.
        ignoreUndefinedDefinitions: false
    },

    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },

    onPrepare: () => {
        // Remove the `tmp/` folder that holds the json report files
        removeSync(jsonTmpDirectory);
        if (!fs.existsSync(jsonTmpDirectory)) {
            fs.mkdirSync(jsonTmpDirectory);
        }

        // Remove the `reports/junit` folder that hold the junit reports
        // junit folder is recreated by wdio reporter automatically, so there is no need to recreate it here
        removeSync(junitReportDirectory);

        // Remove the downaload dir then create if it doesn't exist
        removeSync(downloadDir);
        if (!fs.existsSync(downloadDir)) {
            fs.mkdirSync(downloadDir);
        }
    },

    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {string} cid      capability id (e.g 0-0)
     * @param  {object} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {object} specs    specs to be run in the worker process
     * @param  {object} args     object that will be merged with the main configuration once worker is initialized
     * @param  {object} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just after a worker process has exited.
     * @param  {string} cid      capability id (e.g 0-0)
     * @param  {number} exitCode 0 - success, 1 - fail
     * @param  {object} specs    specs to be run in the worker process
     * @param  {number} retries  number of retries used
     */
    // onWorkerEnd: function (cid, exitCode, specs, retries) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {string} cid worker id (e.g. 0-0)
     */
    // beforeSession: function (config, capabilities, specs, cid) {
    // },

    beforeSession: function () {
        // global.testEnv = testEnv; //making the testEnv global
    },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {object}         browser      instance of created browser/device session
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {string} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },

    beforeFeature: function (uri, feature) {
        Log.audit("======================================================================")
        Log.audit("FEATURE to be executed is: " + feature.name);

        ////////////////////////////////////////////////////////////////////////////////////////////////////////
        // SETUP & TEARDOWN HACK
        // SetupAndTeardown.removeBeforeSteps(feature,scenario);
        ////////////////////////////////////////////////////////////////////////////////////////////////////////
    },
    /**
     * Runs before a Cucumber scenario
     */
    beforeScenario: function (world, context) {
        Log.audit("-----------------------------------------------------------------------")
        Log.audit("SCENARIO to be executed is: " + world.pickle.name);
    },

    // afterStep: function (step, scenario, result, context) {
    // },

    afterStep: async function (step, scenario, result, context) {
        //take and attached screenshots in cucumber json
        if (!result.passed) {
            cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
        }
    },


    afterScenario: async function (world, result, context) {
        var executionDuration = DateUtil.formatDuration(world.result.duration.nanos)
        Log.audit("SCENARIO: " + world.pickle.name + ", STATUS: " + world.result.status + ", EXECUTION DURATION: " + executionDuration);
        Log.audit("-----------------------------------------------------------------------")

        await browserUtil.reset();
    },

    /**
     * Cucumber Hooks
     *
     */
    // beforeFeature: function (uri, feature) {
    // },
    // beforeScenario: function (world, context) {
    // },

    onComplete: () => {
        if (argv.suite) {
            reportName = `reports/html/${argv.suite}-${currentTime}.html`;
        } else {
            reportName = `reports/html/${currentTime}.html`;
        }
    
            //for cucumber-html-report
            try {
                let consolidatedJsonArray = wdioParallel.getConsolidatedData({
                    parallelExecutionReportDirectory: jsonTmpDirectory
                });
                let jsonFile = `${jsonTmpDirectory}report.json`;
                fs.writeFileSync(jsonFile, JSON.stringify(consolidatedJsonArray));
                content = JSON.parse(fs.readFileSync(jsonFile));
    
                for (var j = 0; j < content.length; j++) {
                    for (var i = 0; i < content[j].elements.length; i++) {
                        nextEle = i + 1;
                        if (nextEle < content[j].elements.length) {
                            if (content[j].elements[i].name === content[j].elements[i + 1].name) {
                                array1 = content[j].elements;
                                array1.splice(i, 1);
                                i = i - 1;
                            }
                        }
                    }
                }
    
                fs.writeFileSync(jsonFile, JSON.stringify(content));
    
            const options = {
                theme: 'bootstrap',
                jsonFile: jsonFile,
                output: reportName,
                reportSuiteAsScenarios: false,
                scenarioTimestamp: true,
                launchReport: true,
                ignoreBadJsonFile: true,
                screenshotsDirectory: 'reports/html/screenshots/',
                storeScreenshots: false,
                brandTitle: "UX Automation Tests",
                metadata: {
                    "App Version": "Version xxxxxx",
                    "Test Environment": testEnv,
                    "Parallel": "Scenarios",
                    "Executed": "Remote"
                }
            };
            reporter.generate(options);
        } catch (err) {
            Log.error(err);
        }
    }



    /**
    * Gets executed when a refresh happens.
    * @param {string} oldSessionId session ID of the old session
    * @param {string} newSessionId session ID of the new session
    */
    // onReload: function(oldSessionId, newSessionId) {
    // }
}
