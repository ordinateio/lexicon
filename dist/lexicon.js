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
/**
 * Manages translations of the user interface.
 *
 * @see extend
 * @see setPlaceholders
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
        this._translations = __assign(__assign({}, this._translations), translations);
    };
    /**
     * Sets placeholders to a string.
     *
     * @param string Source string.
     * @param placeholders An object containing placeholders.
     */
    Lexicon.setPlaceholders = function (string, placeholders) {
        var keys = Object.keys(placeholders);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            string = string.replace("{" + key + "}", placeholders[key]);
        }
        return string;
    };
    /**
     * Returns a localized string.
     *
     * @param key Key to access translations.
     * @param mixed Required language or object containing placeholders.
     */
    Lexicon.get = function (key, mixed) {
        if (!this._translations)
            throw new Error('Translations is not defined.');
        var locale = (typeof mixed === 'string') ? mixed : this.locale;
        var placeholders = (typeof mixed === 'object') ? mixed : {};
        if (key in this._translations && locale in this._translations[key]) {
            key = this.setPlaceholders(this._translations[key][locale], placeholders);
        }
        return key;
    };
    return Lexicon;
}());
exports.default = Lexicon;
