"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Lexicon = (function () {
    function Lexicon() {
    }
    Object.defineProperty(Lexicon, "lang", {
        get: function () {
            var _a, _b, _c;
            (_a = this._lang) !== null && _a !== void 0 ? _a : (this._lang = (_c = (_b = document.querySelector('html')) === null || _b === void 0 ? void 0 : _b.getAttribute('lang')) !== null && _c !== void 0 ? _c : 'en');
            return this._lang;
        },
        set: function (lang) {
            this._lang = lang;
        },
        enumerable: false,
        configurable: true
    });
    Lexicon.extend = function (translations) {
        this._translations = __assign(__assign({}, this._translations), translations);
    };
    Lexicon.setPlaceholders = function (string, placeholders) {
        var keys = Object.keys(placeholders);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            string = string.replace("{" + key + "}", placeholders[key]);
        }
        return string;
    };
    Lexicon.get = function (key, mixed) {
        if (!this._translations)
            throw new Error('Translations is not defined.');
        var lang = (typeof mixed === 'string') ? mixed : this.lang;
        var placeholders = (typeof mixed === 'object') ? mixed : {};
        if (key in this._translations && lang in this._translations[key]) {
            key = this.setPlaceholders(this._translations[key][lang], placeholders);
        }
        return key;
    };
    return Lexicon;
}());
exports.default = Lexicon;
