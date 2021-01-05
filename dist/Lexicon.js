"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lexicon = void 0;
/**
 * Manages translations of the user interface.
 *
 * @see extend
 * @see format
 * @see get
 */
class Lexicon {
    /**
     * Default translations.
     */
    static get translations() {
        return this._translations;
    }
    /**
     * Default language.
     */
    static get locale() {
        var _a;
        (_a = this._locale) !== null && _a !== void 0 ? _a : (this._locale = 'en');
        return this._locale;
    }
    /**
     * Default language.
     *
     * @param locale Language abbreviation for example: en, ru, etc.
     */
    static set locale(locale) {
        this._locale = locale;
    }
    /**
     * Extends the default translations with new phrases.
     *
     * @param translations New translations.
     */
    static extend(translations) {
        for (const [key, value] of Object.entries(translations)) {
            if (value) {
                this.translations[key] = { ...this.translations[key], ...translations[key] };
                continue;
            }
            this.translations[key] = { ...translations[key] };
        }
    }
    /**
     * Sets wildcard strings to the original string.
     *
     * @param string Original string.
     * @param wildcards Wildcard strings or an object containing placeholders.
     */
    static format(string, ...wildcards) {
        for (const item of [...wildcards]) {
            if (typeof item === 'object') {
                for (const [key, value] of Object.entries(item)) {
                    string = string.replace(`{${key}}`, value);
                }
                continue;
            }
            string = string.replace('%s', item);
        }
        return string;
    }
    /**
     * Returns a localized string.
     *
     * @param phrase The key phrase to access translations.
     * @param wildcards Wildcard strings or an object containing placeholders.
     */
    static get(phrase, ...wildcards) {
        if (!this.translations)
            throw new Error('LexiconTranslations is not defined.');
        if (phrase in this.translations && this.locale in this.translations[phrase]) {
            phrase = this.format(this.translations[phrase][this.locale], ...wildcards);
        }
        return phrase;
    }
}
exports.Lexicon = Lexicon;
/**
 * Default translations.
 *
 * @private
 */
Lexicon._translations = {};
exports.default = Lexicon;
