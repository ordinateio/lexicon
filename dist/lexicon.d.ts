interface Translations {
    [key: string]: {
        [locale: string]: string;
    };
}
interface Placeholders {
    [key: string]: string;
}
declare class Lexicon {
    private static _translations;
    private static _locale;
    static get locale(): string;
    static set locale(locale: string);
    static extend(translations: Translations): void;
    static setPlaceholders(string: string, placeholders: Placeholders): string;
    static get(key: string): string;
    static get(key: string, locale: string): string;
    static get(key: string, placeholders: Placeholders): string;
}
export default Lexicon;
export { Translations, Placeholders, };
