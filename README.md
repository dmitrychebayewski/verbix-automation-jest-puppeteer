# verbix-jest-puppetier
A Jest/Puppetier test automation demo written in Javascript with page object model

##Purpose
Writing a tiny framework for fun, study purposes and web scrapping.
It is written in Javascript, using Jest and Puppetier and Page Object model.
Cool new  things to know about Jest, is its being totally asynchronous and its text evaluation.
One can find these aspects in the code.

The POC is short scenario, which is going to a well-known [verbix.com](https://www.verbix.com/languages/dutch.html) page,
and then conjugating the Dutch verb "Leren" (to learn).


## Software Stack
This project uses Node.js, Javascript, Jest and Puppetier.

## Web Driver Setup
This project uses the cool Puppetier feature, which is: manage the download 
of the recent Chromium browser instance. Puppetier launches and is interacting with this Chromium,
but you can use the Core Puppetier and avoid the Chromium download. 

## IDE
This project was created in WebStorm, 
but it has been verified to work with Microsoft Visual Studio Code as well.

## Code Formatting Rules
TypeScript code in this project is automatically formatted using  [Eslint](https://eslint.org/).
In order to accept the project default formatting, your IDE must be configured to use the formatting style.

## Analysing Tests
One can find the definition of tests written in "describe - it" notation 
at: __tests__/testConjugateDutchVerb.js

## Running Tests
This project uses [yarn](https://classic.yarnpkg.com/en/docs/migrating-from-npm/).
Run tests using the following command: 
```
$yarn test
```
## Jest Execution Reports
This project is using [jest-html-reporter](https://github.com/Hargne/jest-html-reporter).
After the test execution, the html report is available at:
 ${project.build.directory}/target/generated-report/test-report.html
 
## Docker (optional)
This project is able to be executed in Docker container.
The image is based on [Docker Puppeteer](https://hub.docker.com/r/buildkite/puppeteer)
To build the image and run tests, run the following commands:
```
$docker build -t com.minskrotterdam/verbix .
$docker run com.minskrotterdam/verbix
```
## Extracting Jest execution report from Docker container
Use the following command to extract the test execution reports:
```
$docker container cp {CONTAINER_NAME}:/usr/src/app/target ./target 
``` 
## Writing the test execution report to ReportPortal (optional)
Install the report portal 