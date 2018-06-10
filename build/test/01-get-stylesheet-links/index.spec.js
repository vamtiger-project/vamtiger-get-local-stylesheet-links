"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const __1 = require("../..");
const mock_data_1 = require("./mock-data");
describe("vamtiger-get-local-stylesheet-paths: should get", function () {
    it("local stylesheet paths", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const expected = [
                'local/stylesheet/link/index.css'
            ];
            const localStylesheetLinks = yield __1.default({ html: mock_data_1.default });
            chai_1.expect(localStylesheetLinks).to.be.ok;
            chai_1.expect(localStylesheetLinks.length).to.equal(1);
            chai_1.expect(localStylesheetLinks.every(currentStyleSheetLinks => expected.some(expectedStylesheetLink => currentStyleSheetLinks === expectedStylesheetLink))).to.be.true;
        });
    });
});
//# sourceMappingURL=index.spec.js.map