import {Lexicon} from '../src';

const en = 'However, we should not forget that the constant quantitative growth and ...';
const ru = 'Не следует, однако забывать, что постоянный количественный рост и сфера ...';
const de = 'Wir sollten jedoch nicht vergessen, dass das konstante quantitative Wachstum ...';

describe('Translations ...', () => {
    const lexicon = new Lexicon({
        locale: 'de',
        translations: {
            test: {
                en: en,
                de: de,
            }
        }
    });

    test('The language is set to "de".', () => {
        const value = lexicon.locale;

        expect(value).toBe('de');
    });

    test('Translations for "en" are available.', () => {
        const value = 'en' in lexicon.translations['test'];

        expect(value).toBe(true);
    });

    test('Translations for "de" are available.', () => {
        const value = 'de' in lexicon.translations['test'];

        expect(value).toBe(true);
    });

    test('Translations for "ru" are available.', () => {
        lexicon.translations = {
            test: {
                ru: ru,
            }
        };
        const value = 'ru' in lexicon.translations['test'];

        expect(value).toBe(true);
    });
});

describe('Matching translations ...', () => {
    const lexicon = new Lexicon();
    lexicon.extend({
        test: {
            en: en,
            ru: ru,
            de: de,
        }
    });

    test('Language "en".', () => {
        lexicon.locale = 'en';
        const value = lexicon.get('test');

        expect(value).toContain(en);
    });

    test('Language "ru".', () => {
        lexicon.locale = 'ru';
        const value = lexicon.get('test');

        expect(value).toContain(ru);
    });

    test('Language "de".', () => {
        lexicon.locale = 'de';
        const value = lexicon.get('test');

        expect(value).toContain(de);
    });
});

describe('Formatting ...', () => {
    const lexicon = new Lexicon();
    lexicon.extend({
        test: {
            en: en,
            ru: ru,
            de: de,
        }
    });

    test('Language "en".', () => {
        const value = lexicon.format(
            'However, {p1} {p2} ...',
            {
                'p1': 'we should not forget that the constant',
                'p2': 'quantitative growth and',
            },
        );

        expect(value).toBe(en);
    });

    test('Language "ru".', () => {
        const value = lexicon.format(
            'Не следует, {p1} {p2} ...',
            {
                'p1': 'однако забывать, что постоянный',
                'p2': 'количественный рост и сфера',
            },
        );

        expect(value).toBe(ru);
    });

    test('Language "de".', () => {
        const value = lexicon.format(
            'Wir sollten {p1} {p2} ...',
            {
                'p1': 'jedoch nicht vergessen, dass das',
                'p2': 'konstante quantitative Wachstum',
            },
        );

        expect(value).toBe(de);
    });
});

describe('Rest ...', () => {
    const lexicon = new Lexicon();
    lexicon.extend({
        test: {
            en: en,
            ru: ru,
            de: de,
        }
    });

    test('Missing key.', () => {
        expect(lexicon.get('missing_key')).toBe('missing_key');
    });
});
