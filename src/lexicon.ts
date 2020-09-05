/**
 * Manages translations of the user interface.
 *
 * @see Lexicon.extend
 * @see Lexicon.setPlaceholders
 * @see Lexicon.get
 */
export default class Lexicon {
    /**
     * Default lexicon.
     *
     * @private
     */
    private static _lexicon: { [p: string]: { [p: string]: string } } = {};

    /**
     * Used language.
     *
     * @private
     */
    private static _lang: string = null;

    /**
     * Default language.
     */
    static get lang(): string {
        if (this._lang === null) {
            this._lang = document.querySelector('html').getAttribute('lang') ?? 'en';
        }

        return this._lang;
    }

    /**
     * Default language.
     *
     * @param lang Language abbreviation for example: en, ru, etc.
     */
    static set lang(lang: string) {
        this._lang = lang;
    }

    /**
     * Extends the default lexicon with new phrases.
     *
     * @param lexicon New lexicon.
     */
    static extend(lexicon: { [p: string]: { [p: string]: string } }): void {
        this._lexicon = {...this._lexicon, ...lexicon};
    }

    /**
     * Sets placeholders to a string.
     *
     * @param string Source string.
     * @param placeholders An object containing placeholders.
     */
    static setPlaceholders(string: string, placeholders: { [p: string]: string } = {}): string {
        for (let placeholder in placeholders) {
            string = string.replace(`{${placeholder}}`, placeholders[placeholder]);
        }

        return string;
    }

    /**
     * Returns a localized string.
     *
     * @param key Key to access the dictionary.
     * @param lang Required language.
     */
    static get(key: string, lang?: string): string;

    /**
     * Returns a localized string.
     *
     * @param key Key to access the dictionary.
     * @param placeholders An object containing placeholders.
     */
    static get(key: string, placeholders?: { [p: string]: string }): string;

    /**
     * Returns a localized string.
     *
     * @param key Key to access the dictionary.
     * @param options Required language or object containing placeholders.
     */
    static get(key: string, options?: string | { [p: string]: string }): string {
        let lang = (typeof options === 'string') ? options : this._lang;
        let placeholders = (typeof options === 'object') ? options : {};

        if (key in this._lexicon && lang in this._lexicon[key]) {
            key = this.setPlaceholders(this._lexicon[key][lang], placeholders);
        }

        return key;
    }
}
