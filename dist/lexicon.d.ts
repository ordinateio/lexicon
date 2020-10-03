interface Translations {
    [key: string]: {
        [lang: string]: string;
    };
}
interface Placeholders {
    [key: string]: string;
}
declare class Lexicon {
    private static _translations;
    private static _lang;
    static get lang(): string;
    static set lang(lang: string);
    static extend(translations: Translations): void;
    static setPlaceholders(string: string, placeholders: Placeholders): string;
    static get(key: string): string;
    static get(key: string, lang: string): string;
    static get(key: string, placeholders: Placeholders): string;
}
export default Lexicon;
export { Translations, Placeholders };
