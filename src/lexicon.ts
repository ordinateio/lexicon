interface Translations {
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
 * @see extend
 * @see setPlaceholders
 * @see get
 */
class Lexicon {
    /**
     * Default translations.
     *
     * @private
     */
    private static _translations: Translations;

    /**
     * Used language.
     *
     * @private
     */
    private static _lang: string;

    /**
     * Default language.
     */
    static get lang(): string {
        if (this._lang === undefined) {
            this._lang = document.querySelector('html')?.getAttribute('lang') ?? 'en';
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
     * Extends the default translations with new phrases.
     *
     * @param translations New translations.
     */
    static extend(translations: Translations): void {
        this._translations = {...this._translations, ...translations};
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
     * @param key Key to access translations.
     */
    static get(key: string): string;

    /**
     * Returns a localized string.
     *
     * @param key Key to access translations.
     * @param lang Required language.
     */
    static get(key: string, lang: string): string;

    /**
     * Returns a localized string.
     *
     * @param key Key to access translations.
     * @param placeholders An object containing placeholders.
     */
    static get(key: string, placeholders: Placeholders): string;

    /**
     * Returns a localized string.
     *
     * @param key Key to access translations.
     * @param mixed Required language or object containing placeholders.
     */
    static get(key: string, mixed?: string | Placeholders): string {
        if (!this._translations) throw new Error('Translations is not defined.');

        const lang = (typeof mixed === 'string') ? mixed : this.lang;
        const placeholders = (typeof mixed === 'object') ? mixed : {};

        if (key in this._translations && lang in this._translations[key]) {
            key = this.setPlaceholders(this._translations[key][lang], placeholders);
        }

        return key;
    }
}

export default Lexicon;
export {
    Lexicon,
    Translations,
    Placeholders,
}
