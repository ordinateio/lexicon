interface Dictionary {
    [key: string]: {
        [lang: string]: string;
    };
}

interface Placeholders {
    [key: string]: string;
}

/**
 * Manages translations of the user interface.
 *
 * @see Lexicon.extend
 * @see Lexicon.setPlaceholders
 * @see Lexicon.get
 */
class Lexicon {
    /**
     * Default dictionary.
     *
     * @private
     */
    private static _dictionary: Dictionary = {};

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
     * Extends the default dictionary with new phrases.
     *
     * @param dictionary New dictionary.
     */
    static extend(dictionary: Dictionary): void {
        this._dictionary = {...this._dictionary, ...dictionary};
    }

    /**
     * Sets placeholders to a string.
     *
     * @param string Source string.
     * @param placeholders An object containing placeholders.
     */
    static setPlaceholders(string: string, placeholders: Placeholders): string {
        const keys = Object.keys(placeholders);
        for (const key of keys) {
            string = string.replace(`{${key}}`, placeholders[key]);
        }

        return string;
    }

    /**
     * Returns a localized string.
     *
     * @param key Key to access the dictionary.
     */
    static get(key: string): string;

    /**
     * Returns a localized string.
     *
     * @param key Key to access the dictionary.
     * @param lang Required language.
     */
    static get(key: string, lang: string): string;

    /**
     * Returns a localized string.
     *
     * @param key Key to access the dictionary.
     * @param placeholders An object containing placeholders.
     */
    static get(key: string, placeholders: Placeholders): string;

    /**
     * Returns a localized string.
     *
     * @param key Key to access the dictionary.
     * @param options Required language or object containing placeholders.
     */
    static get(key: string, options?: string | Placeholders): string {
        const lang = (typeof options === 'string') ? options : this._lang;
        const placeholders = (typeof options === 'object') ? options : {};

        if (key in this._dictionary && lang in this._dictionary[key]) {
            key = this.setPlaceholders(this._dictionary[key][lang], placeholders);
        }

        return key;
    }
}

export default Lexicon;
export {
    Lexicon,
    Dictionary,
    Placeholders
}
