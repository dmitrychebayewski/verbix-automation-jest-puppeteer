const { expect } = require('chai');
const timeout = 10000;
// eslint-disable-next-line no-undef
describe(
    'Verbix search verb test',
    () => {
        let pageObject;
        let page;

        // eslint-disable-next-line no-undef
        beforeAll(async () => {
            // eslint-disable-next-line no-undef
            jest.setTimeout(timeout);
            page = await global.__BROWSER__.newPage();
            pageObject = require('../pageobjects/verbixPageObject.js')(page);
            await pageObject.open();
        }, timeout);

        // eslint-disable-next-line no-undef
        afterEach(async () => {
            await pageObject.waitFor();
        });

        // eslint-disable-next-line no-undef
        afterAll(async () => {
            await pageObject.close();
        });
        // eslint-disable-next-line no-undef
        it('Verbix homepage is loaded', async () => {
            await pageObject.waitForLoaded();
        });

        // eslint-disable-next-line no-undef
        it('Is able to conjugate the verb "leren"', async () => {
            const expected = 'leren';
            await pageObject.setVerb(expected);
            await pageObject.conjugate();
            try {
                const pageHeader = await pageObject.getHeader();
                expect(pageHeader).to.have.string(expected)
            } catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
);
