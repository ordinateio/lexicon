export interface LexiconTranslations {
    [phrase: string]: {
        [locale: string]: string;
    }
}

export interface LexiconPlaceholders {
    [key: string]: string;
}

export interface LexiconProperties {
    locale?: string;
}

/**
 * Manages translations of the user interface.
 *
 * @see extend
 * @see format
 * @see get
 *
 * Lexicon:
 * [Github]{@link https://github.com/ordinateio/lexicon}
 */
export class Lexicon {
    /**
     * Default translations.
     *
     * @private
     */
    private _translations: LexiconTranslations = {};

    /**
     * Default translations.
     */
    get translations(): LexiconTranslations {
        return this._translations;
    }

    /**
     * Default language.
     *
     * @private
     */
    private _locale: string = 'en';

    /**
     * Default language.
     */
    get locale(): string {
        return this._locale;
    }

    /**
     * Default language.
     *
     * @param locale Language abbreviation for example: en, ru, etc.
     */
    set locale(locale: string) {
        this._locale = locale;
    }

    /**
     * Lexicon constructor.
     *
     * @param properties
     */
    constructor(properties: LexiconProperties = {}) {
        properties.locale && (this._locale = properties.locale);
    }

    /**
     * Extends the default translations with new phrases.
     *
     * @param translations New translations.
     */
    extend(translations: LexiconTranslations): void {
        for (const [key, value] of Object.entries(translations)) {
            if (!value) continue;

            this.translations[key] = {
                ...this.translations[key],
                ...translations[key]
            };
        }
    }

    /**
     * Returns a localized string.
     *
     * @param phrase The key phrase to access translations.
     * @param placeholders Objects containing placeholders.
     */
    get(phrase: string, ...placeholders: LexiconPlaceholders[]): string {
        if (!this.translations) throw new Error('"LexiconTranslations" is not defined.');

        let value = phrase;
        if (phrase in this.translations && this.locale in this.translations[phrase]) {
            value = this.format(this.translations[phrase][this.locale], ...placeholders);
        }

        return value;
    }

    /**
     * Sets the specified placeholders to the original string.
     *
     * @param string Original string.
     * @param placeholders Objects containing placeholders.
     */
    format(string: string, ...placeholders: LexiconPlaceholders[]): string {
        for (const item of [...placeholders]) {
            for (const [key, value] of Object.entries(item)) {
                string = string.replace('{' + key + '}', value);
            }
        }

        return string;
    }
}
