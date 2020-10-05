import Lexicon, {Translations, Placeholders} from "../../src/lexicon";

let en = document.querySelector('.content .en');
if (!en) throw new Error('Element ".en" is "undefined".');

let ru = document.querySelector('.content .ru');
if (!ru) throw new Error('Element ".ru" is "undefined".');

let get_en = document.querySelector('.content .get-en');
if (!get_en) throw new Error('Element ".get_en" is "undefined".');

let get_ru = document.querySelector('.content .get-ru');
if (!get_ru) throw new Error('Element ".get_ru" is "undefined".');

let placeholders_en = document.querySelector('.content .placeholders-en');
if (!placeholders_en) throw new Error('Element ".placeholders_en" is "undefined".');

let placeholders_ru = document.querySelector('.content .placeholders-ru');
if (!placeholders_ru) throw new Error('Element ".placeholders_ru" is "undefined".');

let placeholders_text: string;

let translations: Translations = {
    'lorem': {
        en: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.',
        ru: 'Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что рамки и место обучения кадров влечет за собой процесс внедрения и модернизации новых предложений.',
    },
};

Lexicon.extend(translations);

/* Used language: en */
en.innerHTML = `
<h1>Used language: ${Lexicon.locale}</h1>
<p>${Lexicon.get('lorem')}</p>`;


/* Used language: ru */
Lexicon.locale = 'ru';
ru.innerHTML = `
<h1>Used language: ${Lexicon.locale}</h1>
<p>${Lexicon.get('lorem')}</p>`;


/* Should be: en */
get_en.innerHTML = `
<h1>Should be: en</h1>
<p>${Lexicon.get('lorem', 'en')}</p>`;


/* Should be: ru */
get_ru.innerHTML = `
<h1>Should be: ru</h1>
<p>${Lexicon.get('lorem', 'ru')}</p>`;


/* Placeholders: en */
placeholders_text = Lexicon.setPlaceholders(
    'On the {other_hand} dislike...',
    {
        'other_hand': 'other hand, we denounce with righteous indignation and',
    });
placeholders_en.innerHTML = `
<h1>Placeholders: en</h1>
<p>${placeholders_text}</p>`;


/* Placeholders: ru */
let placeholders: Placeholders = {
    'do_not_forget': 'однако забывать, что постоянный количественный рост и сфера нашей',
}
placeholders_text = Lexicon.setPlaceholders('Не следует, {do_not_forget} активности...', placeholders);
placeholders_ru.innerHTML = `
<h1>Placeholders: ru</h1>
<p>${placeholders_text}</p>`;
