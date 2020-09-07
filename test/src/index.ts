import Lexicon, {Dictionary, Placeholders} from "../../src/lexicon";

let en = document.querySelector('.content .en');
let ru = document.querySelector('.content .ru');
let get_en = document.querySelector('.content .get-en');
let get_ru = document.querySelector('.content .get-ru');
let placeholders_en = document.querySelector('.content .placeholders-en');
let placeholders_ru = document.querySelector('.content .placeholders-ru');
let placeholders_text: string;

let dictionary: Dictionary = {
    'lorem': {
        en: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.',
        ru: 'Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что рамки и место обучения кадров влечет за собой процесс внедрения и модернизации новых предложений.',
    },
};

Lexicon.extend(dictionary);

/* Used language: en */
en.innerHTML = `
<h1>Used language: ${Lexicon.lang}</h1>
<p>${Lexicon.get('lorem')}</p>`;


/* Used language: ru */
Lexicon.lang = 'ru';
ru.innerHTML = `
<h1>Used language: ${Lexicon.lang}</h1>
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
