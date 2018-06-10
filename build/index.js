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
const vamtiger_is_remote_url_1 = require("vamtiger-is-remote-url");
const vamtiger_get_stylesheet_paths_1 = require("vamtiger-get-stylesheet-paths");
function getLocalStylesheetPaths(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const html = params.html;
        const allLocalStylesheetPaths = yield Promise.all(vamtiger_get_stylesheet_paths_1.default({ html }).map(url => getLocalStylesheetPath({ url })));
        const localStylesheetPaths = allLocalStylesheetPaths
            .filter(localStylesheetPath => localStylesheetPath ? true : false);
        return localStylesheetPaths;
    });
}
exports.default = getLocalStylesheetPaths;
function getLocalStylesheetPath(params) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = params.url;
        const remoteUrl = yield vamtiger_is_remote_url_1.default({ url });
        const localUrl = !remoteUrl && url || undefined;
        return localUrl;
    });
}
//# sourceMappingURL=index.js.map