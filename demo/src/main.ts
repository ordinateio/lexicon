import "./main.scss";

import {Lexicon} from "../../src/Lexicon";

const en = document.querySelector(".content-item--en") as HTMLElement | null;
if (!en) throw new Error("Element '.content-item--en' is null.");

const de = document.querySelector(".content-item--de") as HTMLElement | null;
if (!de) throw new Error("Element '.content-item--de' is null.");

const ru = document.querySelector(".content-item--ru") as HTMLElement | null;
if (!ru) throw new Error("Element '.content-item--ru' is null.");


const placeholders_en = document.querySelector(".content-item--placeholders-en") as HTMLElement | null;
if (!placeholders_en) throw new Error("Element '.content-item--placeholders-en' is null.");

const placeholders_de = document.querySelector(".content-item--placeholders-de") as HTMLElement | null;
if (!placeholders_de) throw new Error("Element '.content-item--placeholders-de' is null.");

const placeholders_ru = document.querySelector(".content-item--placeholders-ru") as HTMLElement | null;
if (!placeholders_ru) throw new Error("Element '.content-item--placeholders-ru' is null.");

const missing_key = document.querySelector(".content-item--missing-key") as HTMLElement | null;
if (!missing_key) throw new Error("Element '.content-item--missing-key' is null.");

let placeholders_text: string;

Lexicon.extend({
    lorem: {
        en: "However, we should not forget that the constant quantitative growth and scope of our activity contributes to the preparation and implementation of the positions taken by the participants in relation to the tasks set. It should not be forgotten, however, that the scope and place of personnel training entails the process of introducing and modernizing new proposals.",
        ru: "Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности способствует подготовки и реализации позиций, занимаемых участниками в отношении поставленных задач. Не следует, однако забывать, что рамки и место обучения кадров влечет за собой процесс внедрения и модернизации новых предложений.",
    }
});

Lexicon.extend({
    lorem: {
        de: "Wir sollten jedoch nicht vergessen, dass das konstante quantitative Wachstum und der Umfang unserer Aktivitäten zur Vorbereitung und Umsetzung der Positionen beitragen, die die Teilnehmer in Bezug auf die gestellten Aufgaben einnehmen. Es darf jedoch nicht vergessen werden, dass Umfang und Ort der Schulung des Personals den Prozess der Einführung und Modernisierung neuer Vorschläge umfassen."
    }
});


/* Used language: en */
en.innerHTML = `
<h1>Used language: ${Lexicon.locale}</h1>
<p>${Lexicon.get("lorem")}</p>`;


/* Used language: de */
Lexicon.locale = "de";
de.innerHTML = `
<h1>Used language: ${Lexicon.locale}</h1>
<p>${Lexicon.get("lorem")}</p>`;


/* Used language: ru */
Lexicon.locale = "ru";
ru.innerHTML = `
<h1>Used language: ${Lexicon.locale}</h1>
<p>${Lexicon.get("lorem")}</p>`;


/* Placeholders: en */
placeholders_text = Lexicon.format(
    "However, {pl_1} {pl_2} ...",
    {
        "pl_1": "we should not forget that the constant quantitative growth and scope of our activity contributes",
        "pl_2": "to the preparation and implementation",
    },
);

placeholders_en.innerHTML = `
<h1>Placeholders: en</h1>
<p>${placeholders_text}</p>`;


/* Placeholders: de */
placeholders_text = Lexicon.format(
    "Wir sollten {pl_1} {pl_2} ...",
    {
        "pl_1": "jedoch nicht vergessen, dass das konstante quantitative Wachstum und der Umfang",
        "pl_2": "unserer Aktivitäten zur Vorbereitung und Umsetzung der Positionen beitragen",
    },
);

placeholders_de.innerHTML = `
<h1>Placeholders: de</h1>
<p>${placeholders_text}</p>`;


/* Placeholders: ru */
placeholders_text = Lexicon.format(
    "Не следует, {pl_1} {pl_2} ...",
    {
        "pl_1": "однако забывать, что постоянный количественный рост и сфера нашей активности",
        "pl_2": "способствует подготовке и реализации позиций",
    },
);

placeholders_ru.innerHTML = `
<h1>Placeholders: ru</h1>
<p>${placeholders_text}</p>`;


/* Non existing key. */
missing_key.innerHTML = `
<h1>Missing key</h1>
<p>${Lexicon.get("missing_key")}</p>`;