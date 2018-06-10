import {expect} from 'chai';
import getLocalStylesheetLinks from '../..';
import html from './mock-data';

describe("vamtiger-get-local-stylesheet-paths: should get", function () {
    it("local stylesheet paths", async function () {
        const expected = [
            'local/stylesheet/link/index.css'
        ];
        const localStylesheetLinks = await getLocalStylesheetLinks({ html });

        expect(localStylesheetLinks).to.be.ok;
        expect(localStylesheetLinks.length).to.equal(1);
        expect(localStylesheetLinks.every(currentStyleSheetLinks => expected.some(expectedStylesheetLink => currentStyleSheetLinks === expectedStylesheetLink))).to.be.true;
    })
})