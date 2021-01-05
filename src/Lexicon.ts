export interface LexiconTranslations {
    [phrase: string]: {
        [locale: string]: string;
    };
}

export interface LexiconPlaceholders {
    [key: string]: string;
}

export type LexiconWildcard = LexiconPlaceholders | string;

/**
 * Manages translations of the user interface.
 *
 * @see extend
 * @see format
 * @see get
 */
export class Lexicon {
    /**
     * Default translations.
     *
     * @private
     */
    private static _translations: LexiconTranslations = {};

    /**
     * Default translations.
     */
    public static get translations(): LexiconTranslations {
        return this._translations;
    }

    /**
     * Used language.
     *
     * @private
     */
    private static _locale: string;

    /**
     * Default language.
     */
    public static get locale(): string {
        this._locale ??= 'en';

        return this._locale;
    }

    /**
     * Default language.
     *
     * @param locale Language abbreviation for example: en, ru, etc.
     */
    public static set locale(locale: string) {
        this._locale = locale;
    }

    /**
     * Extends the default translations with new phrases.
     *
     * @param translations New translations.
     */
    public static extend(translations: LexiconTranslations): void {
        for (const [key, value] of Object.entries(translations)) {
            if (value) {
                this.translations[key] = {...this.translations[key], ...translations[key]};
                continue;
            }

            this.translations[key] = {...translations[key]};
        }
    }

    /**
     * Sets wildcard strings to the original string.
     *
     * @param string Original string.
     * @param wildcards Wildcard strings or an object containing placeholders.
     */
    public static format(string: string, ...wildcards: LexiconWildcard[]): string {
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
    public static get(phrase: string, ...wildcards: LexiconWildcard[]): string {
        if (!this.translations) throw new Error('LexiconTranslations is not defined.');

        if (phrase in this.translations && this.locale in this.translations[phrase]) {
            phrase = this.format(this.translations[phrase][this.locale], ...wildcards);
        }

        return phrase;
    }
}

export default Lexicon;
