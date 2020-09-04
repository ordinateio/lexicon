import Lexicon from "../../src/lexicon";

Lexicon.extend({
    'lorem': {
        en: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.',
        ru: 'Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что рамки и место обучения кадров влечет за собой процесс внедрения и модернизации новых предложений. Равным образом рамки и место обучения кадров способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач. Задача организации, в особенности же реализация намеченных плановых заданий требуют определения и уточнения новых предложений. Равным образом новая модель организационной деятельности позволяет выполнять важные задания по разработке новых предложений. Разнообразный и богатый опыт укрепление и развитие структуры в значительной степени обуславливает создание существенных финансовых и административных условий.',
    }
});

/* Language: en */
let en = document.querySelector('.content .en');
let en_lang = Lexicon.lang;
let en_lorem = Lexicon.get('lorem');
en.innerHTML = `
<h1>Language: ${en_lang}</h1>
<p>${en_lorem}</p>`;


/* Language: ru */
Lexicon.lang ='ru';

let ru = document.querySelector('.content .ru');
let ru_lang = Lexicon.lang;
let ru_lorem = Lexicon.get('lorem');
ru.innerHTML = `
<h1>Language: ${ru_lang}</h1>
<p>${ru_lorem}</p>`;


/* Placeholders */
let placeholders = document.querySelector('.content .placeholders');
let string = Lexicon.setPlaceholders(
    'The {wise} {always} to this {principle}...',
    {
        'wise': 'wise man therefore',
        'always': 'always holds in these matters',
        'principle': 'principle of selection',
    });
placeholders.innerHTML = `
<h1>Placeholders</h1>
<p>${string}</p>`;


