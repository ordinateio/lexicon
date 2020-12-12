interface LexiconTranslations {
    [phrase: string]: {
        [locale: string]: string;
    };
}
interface LexiconPlaceholders {
    [key: string]: string;
}
declare type LexiconWildcard = LexiconPlaceholders | string;
/**
 * Manages translations of the user interface.
 *
 * @see extend
 * @see format
 * @see get
 */
declare class Lexicon {
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
     * Sets wildcard strings to the original string.
     *
     * @param string Original string.
     * @param wildcards Wildcard strings or an object containing placeholders.
     */
    static format(string: string, ...wildcards: LexiconWildcard[]): string;
    /**
     * Returns a localized string.
     *
     * @param phrase The key phrase to access translations.
     * @param wildcards Wildcard strings or an object containing placeholders.
     */
    static get(phrase: string, ...wildcards: LexiconWildcard[]): string;
}
export default Lexicon;
export { LexiconTranslations, LexiconPlaceholders, LexiconWildcard, };
