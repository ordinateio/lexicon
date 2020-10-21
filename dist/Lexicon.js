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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Manages translations of the user interface.
 *
 * @see extend
 * @see format
 * @see get
 */
var Lexicon = /** @class */ (function () {
    function Lexicon() {
    }
    Object.defineProperty(Lexicon, "locale", {
        /**
         * Default language.
         */
        get: function () {
            var _a;
            (_a = this._locale) !== null && _a !== void 0 ? _a : (this._locale = 'en');
            return this._locale;
        },
        /**
         * Default language.
         *
         * @param locale Language abbreviation for example: en, ru, etc.
         */
        set: function (locale) {
            this._locale = locale;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Extends the default translations with new phrases.
     *
     * @param translations New translations.
     */
    Lexicon.extend = function (translations) {
        this.translations = __assign(__assign({}, this.translations), translations);
    };
    /**
     * Sets wildcard strings to the original string.
     *
     * @param string Original string.
     * @param wildcards Wildcard strings or an object containing placeholders.
     */
    Lexicon.format = function (string) {
        var wildcards = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            wildcards[_i - 1] = arguments[_i];
        }
        for (var _a = 0, _b = __spreadArrays(wildcards); _a < _b.length; _a++) {
            var item = _b[_a];
            if (typeof item === 'object') {
                for (var _c = 0, _d = Object.entries(item); _c < _d.length; _c++) {
                    var _e = _d[_c], key = _e[0], value = _e[1];
                    string = string.replace("{" + key + "}", value);
                }
                continue;
            }
            string = string.replace('%s', item);
        }
        return string;
    };
    /**
     * Returns a localized string.
     *
     * @param phrase The key phrase to access translations.
     * @param wildcards Wildcard strings or an object containing placeholders.
     */
    Lexicon.get = function (phrase) {
        var wildcards = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            wildcards[_i - 1] = arguments[_i];
        }
        if (!this.translations)
            throw new Error('Translations is not defined.');
        if (phrase in this.translations && this.locale in this.translations[phrase]) {
            phrase = this.format.apply(this, __spreadArrays([this.translations[phrase][this.locale]], wildcards));
        }
        return phrase;
    };
    return Lexicon;
}());
exports.default = Lexicon;
