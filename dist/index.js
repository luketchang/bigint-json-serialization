"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.stringify = void 0;
function stringify(object) {
    return JSON.stringify(object, (_, value) => typeof value === "bigint" ? value.toString() + "n" : value);
}
exports.stringify = stringify;
function parse(value) {
    if (typeof value === "string" && /^\d+n$/.test(value)) {
        return BigInt(value.substr(0, value.length - 1));
    }
    return value;
}
exports.parse = parse;
//# sourceMappingURL=index.js.map