module.exports = {
    globalSetup: './setup.js',
    globalTeardown: './teardown.js',
    testEnvironment: './puppeteer_environment.js',
    reporters: [
        'default',
        ['./node_modules/jest-html-reporter', {
            pageTitle: 'Test Report',
            outputPath: './target/generated-report/test-report.html',
        }]
    ]
};
