import Lexicon from "../../src/Lexicon";

const en = document.querySelector('.content .en');
if (!en) throw new Error('Element ".en" is "undefined".');

const de = document.querySelector('.content .de');
if (!de) throw new Error('Element ".de" is "undefined".');

const ru = document.querySelector('.content .ru');
if (!ru) throw new Error('Element ".ru" is "undefined".');

const placeholders_en = document.querySelector('.content .placeholders-en');
if (!placeholders_en) throw new Error('Element ".placeholders_en" is "undefined".');

const placeholders_de = document.querySelector('.content .placeholders-de');
if (!placeholders_de) throw new Error('Element ".placeholders_de" is "undefined".');

const placeholders_ru = document.querySelector('.content .placeholders-ru');
if (!placeholders_ru) throw new Error('Element ".placeholders_ru" is "undefined".');

let placeholders_text: string;

Lexicon.extend({
    lorem: {
        en: 'However, we should not forget that the constant quantitative growth and scope of our activity contributes to the preparation and implementation of the positions taken by the participants in relation to the tasks set. It should not be forgotten, however, that the scope and place of personnel training entails the process of introducing and modernizing new proposals.',
        ru: 'Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что рамки и место обучения кадров влечет за собой процесс внедрения и модернизации новых предложений.',
    }
});

Lexicon.extend({
    lorem: {
        de: 'Wir sollten jedoch nicht vergessen, dass das konstante quantitative Wachstum und der Umfang unserer Aktivitäten zur Vorbereitung und Umsetzung der Positionen beitragen, die die Teilnehmer in Bezug auf die gestellten Aufgaben einnehmen. Es darf jedoch nicht vergessen werden, dass Umfang und Ort der Schulung des Personals den Prozess der Einführung und Modernisierung neuer Vorschläge umfassen.'
    }
});


/* Used language: en */
en.innerHTML = `
<h1>Used language: ${Lexicon.locale}</h1>
<p>${Lexicon.get('lorem')}</p>`;


/* Used language: de */
Lexicon.locale = 'de';
de.innerHTML = `
<h1>Used language: ${Lexicon.locale}</h1>
<p>${Lexicon.get('lorem')}</p>`;


/* Used language: ru */
Lexicon.locale = 'ru';
ru.innerHTML = `
<h1>Used language: ${Lexicon.locale}</h1>
<p>${Lexicon.get('lorem')}</p>`;


/* Placeholders: en */
placeholders_text = Lexicon.format(
    'However, {should} %s ...',
    {
        'should': 'we should not forget that the constant quantitative growth and scope of our activity contributes',
    },
    'to the preparation and implementation'
);

placeholders_en.innerHTML = `
<h1>Placeholders: en</h1>
<p>${placeholders_text}</p>`;


/* Placeholders: de */
placeholders_text = Lexicon.format(
    'Wir sollten {jedoch} %s ...',
    {
        'jedoch': 'jedoch nicht vergessen, dass das konstante quantitative Wachstum und der Umfang',
    },
    'unserer Aktivitäten zur Vorbereitung und Umsetzung der Positionen beitragen'
);

placeholders_de.innerHTML = `
<h1>Placeholders: de</h1>
<p>${placeholders_text}</p>`;


/* Placeholders: ru */
placeholders_text = Lexicon.format(
    'Не следует, {do_not_forget} %s ...',
    {
        'do_not_forget': 'однако забывать, что постоянный количественный рост и сфера нашей активности',
    },
    'способствует подготовки и реализации позиций'
);

placeholders_ru.innerHTML = `
<h1>Placeholders: ru</h1>
<p>${placeholders_text}</p>`;
