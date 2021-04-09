# Lexicon

Manages translations of the user interface.

## Installation
```sh
npm install --save-dev @ordinateio/lexicon
```

## Usage

```javascript
import {Lexicon} from "@ordinateio/lexicon";

Lexicon.extend({
    "key": {
         en: "On the other hand ...",
         ru: "Не следует, однако...",
    }
});

console.log(Lexicon.get("key"));
```
