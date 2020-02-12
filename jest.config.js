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
        // ["@reportportal/reportportal-agent-jest",
        // {
        //     "token": "00000000-0000-0000-0000-000000000000",
        //     "endpoint": "https://your.reportportal.server/api/v1",
        //     "project": "YourReportPortalProjectName",
        //     "launch": "YourLauncherName",
        //     "description": "YourDescription",
        //     "attributes": [
        //         {
        //             "key": "YourKey",
        //             "value": "YourValue"
        //         },
        //         {
        //             "value": "YourValue"
        //         },
        //     ]
        // }]
    ]
};
