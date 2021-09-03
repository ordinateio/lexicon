import {Lexicon} from '../src';

let en = 'However, we should not forget that the constant quantitative growth and ...';
let ru = 'Не следует, однако забывать, что постоянный количественный рост и сфера ...';
let de = 'Wir sollten jedoch nicht vergessen, dass das konstante quantitative Wachstum ...';

describe('Translations ...', () => {
    let lexicon = new Lexicon({
        locale: 'de',
        translations: {
            test: {
                en: en,
                de: de,
            }
        }
    });

    test('The language is set to "de".', () => {
        expect(lexicon.locale).toBe('de');
    });

    test('Translations for "en" are available.', () => {
        expect('en' in lexicon.translations['test']).toBe(true);
    });

    test('Translations for "de" are available.', () => {
        expect('de' in lexicon.translations['test']).toBe(true);
    });

    test('Translations for "ru" are available.', () => {
        lexicon.translations = {
            test: {
                ...lexicon.translations['test'],
                ru: ru,
            }
        };

        expect('ru' in lexicon.translations['test']).toBe(true);
    });
});

describe('Matching translations ...', () => {
    let lexicon = new Lexicon();
    lexicon.extend({
        test: {
            en: en,
            ru: ru,
            de: de,
        }
    });

    test('Language "en".', () => {
        lexicon.locale = 'en';

        expect(lexicon.get('test')).toContain(en);
    });

    test('Language "ru".', () => {
        lexicon.locale = 'ru';

        expect(lexicon.get('test')).toContain(ru);
    });

    test('Language "de".', () => {
        lexicon.locale = 'de';

        expect(lexicon.get('test')).toContain(de);
    });
});

describe('Formatting ...', () => {
    let lexicon = new Lexicon();
    lexicon.extend({
        test: {
            en: en,
            ru: ru,
            de: de,
        }
    });

    test('Language "en".', () => {
        let value = lexicon.format(
            'However, {p1} {p2} ...',
            {
                'p1': 'we should not forget that the constant',
                'p2': 'quantitative growth and',
            },
        );

        expect(value).toBe(en);
    });

    test('Language "ru".', () => {
        let value = lexicon.format(
            'Не следует, {p1} {p2} ...',
            {
                'p1': 'однако забывать, что постоянный',
                'p2': 'количественный рост и сфера',
            },
        );

        expect(value).toBe(ru);
    });

    test('Language "de".', () => {
        let value = lexicon.format(
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
    let lexicon = new Lexicon();
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
