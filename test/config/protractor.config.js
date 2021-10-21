const path = require('path');
const yargs = require('yargs').argv;

exports.config = {
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    specs: [path.resolve('./test/features/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--no-sandbox', '--window-size']
        }
    },
    disableChecks: true,
    directConnect: true,
    cucumberOpts: {
        require: [path.resolve('../step_definitions/*.js')],
        // ignoreUncaughtExceptions: true,
        // format: [`json: ${path.resolve('./test/reports/report.json')}`],
        tags: yargs.tags || '@smoke'
    }
}