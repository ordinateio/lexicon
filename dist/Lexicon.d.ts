export interface LexiconTranslations {
    [phrase: string]: {
        [locale: string]: string;
    };
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
export declare class Lexicon {
    /**
     * Default translations.
     *
     * @private
     */
    private static _translations;
    /**
     * Default translations.
     */
    static get translations(): LexiconTranslations;
    /**
     * Used language.
     *
     * @private
     */
    private static _locale;
    /**
     * Default language.
     */
    static get locale(): string;
    /**
     * Default language.
     *
     * @param locale Language abbreviation for example: en, ru, etc.
     */
    static set locale(locale: string);
    /**
     * Extends the default translations with new phrases.
     *
     * @param translations New translations.
     */
    static extend(translations: LexiconTranslations): void;
    /**
     * Returns a localized string.
     *
     * @param phrase The key phrase to access translations.
     * @param placeholders Objects containing placeholders.
     */
    static get(phrase: string, ...placeholders: LexiconPlaceholders[]): string;
    /**
     * Sets the specified placeholders to the original string.
     *
     * @param string Original string.
     * @param placeholders Objects containing placeholders.
     */
    static format(string: string, ...placeholders: LexiconPlaceholders[]): string;
}
