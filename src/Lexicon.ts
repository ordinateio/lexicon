interface Translations {
    [key: string]: {
        [locale: string]: string;
    };
}

interface Placeholders {
    [key: string]: string;
}

type Wildcard = string | Placeholders;

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
     *
     * @private
     */
    private static translations: Translations;

    /**
     * Used language.
     *
     * @private
     */
    private static _locale: string;

    /**
     * Default language.
     */
    static get locale(): string {
        this._locale ??= 'en';

        return this._locale;
    }

    /**
     * Default language.
     *
     * @param locale Language abbreviation for example: en, ru, etc.
     */
    static set locale(locale: string) {
        this._locale = locale;
    }

    /**
     * Extends the default translations with new phrases.
     *
     * @param translations New translations.
     */
    static extend(translations: Translations): void {
        this.translations = {...this.translations, ...translations};
    }

    /**
     * Sets placeholders to a string.
     *
     * @param string Source string.
     * @param wildcard A string or object containing placeholders.
     * @param wildcards Strings or objects containing placeholders.
     */
    static format(string: string, wildcard: Wildcard, ...wildcards: Wildcard[]): string {
        for (const item of [wildcard, ...wildcards]) {
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
     * @param key Key to access translations.
     */
    static get(key: string): string;

    /**
     * Returns a localized string.
     *
     * @param key Key to access translations.
     * @param locale Required language.
     */
    static get(key: string, locale: string): string;

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
        if (!this.translations) throw new Error('Translations is not defined.');

        const locale: string = (typeof mixed === 'string') ? mixed : this.locale;
        const placeholders: Placeholders = (typeof mixed === 'object') ? mixed : {};

        if (key in this.translations && locale in this.translations[key]) {
            key = this.format(this.translations[key][locale], placeholders);
        }

        return key;
    }
}

export default Lexicon;
export {
    Translations,
    Placeholders,
}
