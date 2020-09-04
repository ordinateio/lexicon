/**
 * Manages translations of the user interface.
 *
 * @see Lexicon.extend
 * @see Lexicon.getLang
 * @see Lexicon.setLang
 * @see Lexicon.setPlaceholders
 * @see Lexicon.get
 */
export default class Lexicon {
    /**
     * Default lexicon.
     *
     * @private
     */
    private static lexicon: { [p: string]: { [p: string]: string } } = {};

    /**
     * Used language.
     *
     * @private
     */
    private static lang: string = null;

    /**
     * Extends the default lexicon with new phrases.
     *
     * @param lexicon New lexicon.
     */
    static extend(lexicon: { [p: string]: { [p: string]: string } } = {}): void {
        this.lexicon = {...this.lexicon, ...lexicon};
    }

    /**
     * Returns the default language.
     */
    static getLang(): string {
        if (this.lang === null) {
            this.lang = document.querySelector('html').getAttribute('lang') ?? 'en';
        }

        return this.lang;
    }

    /**
     * Sets the default language.
     *
     * @param lang Language abbreviation for example: en, ru, etc.
     */
    static setLang(lang: string = 'en'): void {
        this.lang = lang;
    }

    /**
     * Sets placeholders to a string.
     *
     * @param string Source string.
     * @param placeholders An object containing placeholders.
     */
    static setPlaceholders(string: string, placeholders: { [p: string]: string } = {}): string {
        for (let placeholder in placeholders) {
            string = string.replace(`{${placeholder}}`, placeholders[placeholder]);
        }

        return string;
    }

    /**
     * Returns a localized string.
     *
     * @param string
     * @param placeholders
     */
    static get(string: string, placeholders: { [p: string]: string } = {}): string {
        let lang = this.getLang();

        if (string in this.lexicon && lang in this.lexicon[string]) {
            string = this.setPlaceholders(this.lexicon[string][lang], placeholders);
        }

        return string;
    }
}
