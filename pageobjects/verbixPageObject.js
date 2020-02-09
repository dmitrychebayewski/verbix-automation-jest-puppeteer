const URL = 'https://www.verbix.com/languages/dutch.html';
const VERB_INPUT_SELECTOR = 'input.input';
const SUBMIT_BTN_SELECTOR = 'input.button.is-primary';
const VERB_HEADER_SELECTOR = '.verbtableheader h1';
const typingSpeed = 50;

class VerbixPageObject {
    constructor(page) {
        this.page = page;
    }

    getPage() {
        return this.page;
    }

    async getText(selector) {
        const handle = await this.getPage().$(selector);
        return handle.evaluate(el => el.innerText);
    }

    async open() {
        await this.getPage().goto(URL);
    }

    async waitFor() {
        await this.getPage().waitFor(1000);
    }

    async waitForLoaded() {
        await this.getPage().waitForSelector(VERB_INPUT_SELECTOR);
        await this.getPage().waitForSelector(SUBMIT_BTN_SELECTOR);
    }

    async setVerb(verb) {
        await this.getPage().type(VERB_INPUT_SELECTOR, verb, {delay: typingSpeed});
    }

    async conjugate() {
        await this.getPage().click(SUBMIT_BTN_SELECTOR);
    }

    async getHeader() {
        return this.getText(VERB_HEADER_SELECTOR);
    }

    async close() {
        await this.getPage().close();
    }
}

module.exports = page => new VerbixPageObject(page);
