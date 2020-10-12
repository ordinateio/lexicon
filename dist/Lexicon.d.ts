interface Translations {
    [key: string]: {
        [locale: string]: string;
    };
}
interface Placeholders {
    [key: string]: string;
}
declare type Wildcard = string | Placeholders;
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
    static extend(translations: Translations): void;
    /**
     * Sets placeholders to a string.
     *
     * @param string Source string.
     * @param wildcard An object containing placeholders or string.
     */
    static format(string: string, ...wildcard: Wildcard[]): string;
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
}
export default Lexicon;
export { Translations, Placeholders, };
