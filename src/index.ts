export interface LexiconTranslations {
    [phrase: string]: {
        [locale: string]: string;
    }
}

export interface LexiconPlaceholders {
    [key: string]: string;
}

export interface LexiconProperties {
    /**
     * Language abbreviation for example: en, ru, etc.
     */
    locale?: string;

    /**
     * Translations.
     */
    translations?: LexiconTranslations;
}

/**
 * Class Lexicon - Manages translations of the user interface.
 *
 * [Github]{@link https://github.com/ordinateio/lexicon}
 */
export class Lexicon {
    /**
     * Translations.
     *
     * @private
     */
    private _translations: LexiconTranslations = {};

    /**
     * Translations.
     */
    public get translations(): LexiconTranslations {
        return this._translations;
    }

    /**
     * Language.
     *
     * @private
     */
    private _locale: string = 'en';

    /**
     * Language.
     */
    public get locale(): string {
        return this._locale;
    }

    /**
     * Language.
     *
     * @param locale Language abbreviation for example: en, ru, etc.
     */
    public set locale(locale: string) {
        this._locale = locale;
    }

    /**
     * Lexicon constructor.
     *
     * @param properties
     */
    public constructor(properties: LexiconProperties = {}) {
        if (properties.locale) this._locale = properties.locale;
        if (properties.translations) this.extend(properties.translations);
    }

    /**
     * Extends the default translations with new phrases.
     *
     * @param translations New translations.
     */
    public extend(translations: LexiconTranslations): void {
        for (const key of Object.keys(translations)) {
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
    public get(phrase: string, ...placeholders: LexiconPlaceholders[]): string {
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
    public format(string: string, ...placeholders: LexiconPlaceholders[]): string {
        for (const item of [...placeholders]) {
            for (const [key, value] of Object.entries(item)) {
                string = string.replace('{' + key + '}', value);
            }
        }

        return string;
    }
}
