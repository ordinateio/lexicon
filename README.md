# Lexicon

Manages translations of the user interface.

## Installation

```sh
npm install --save-dev @ordinateio/lexicon
```

## Usage

```javascript
import {Lexicon} from "@ordinateio/lexicon";

const lexicon = new Lexicon({
    locale: 'ru',
    translations: {
        test: {
            en: "On the other hand ...",
            ru: "Не следует, однако...",
        }
    }
});

console.log(lexicon.get("test"));
```
