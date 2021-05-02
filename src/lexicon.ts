export interface LexiconTranslations {
    [phrase: string]: {
        [locale: string]: string;
    }
}

export interface LexiconPlaceholders {
    [key: string]: string;
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
    private static _translations: LexiconTranslations = {};

    /**
     * Default translations.
     */
    static get translations(): LexiconTranslations {
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
    static extend(translations: LexiconTranslations): void {
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
    static get(phrase: string, ...placeholders: LexiconPlaceholders[]): string {
        if (!this.translations) throw new Error('\'LexiconTranslations\' is not defined.');

        if (phrase in this.translations && this.locale in this.translations[phrase]) {
            phrase = this.format(this.translations[phrase][this.locale], ...placeholders);
        }

        return phrase;
    }

    /**
     * Sets the specified placeholders to the original string.
     *
     * @param string Original string.
     * @param placeholders Objects containing placeholders.
     */
    static format(string: string, ...placeholders: LexiconPlaceholders[]): string {
        for (const item of [...placeholders]) {
            for (const [key, value] of Object.entries(item)) {
                string = string.replace('{' + key + '}', value);
            }
        }

        return string;
    }
}
