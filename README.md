# modstrap-lexicon

Manages translations of the user interface.

## Installation

To install a specific version:
```shell script
npm i https://github.com/callisto2410/modstrap-lexicon.git#v1.0.0
```

To install the current version:
```shell script
npm i https://github.com/callisto2410/modstrap-lexicon.git
```

## Usage

```javascript
import Lexicon from "@modstrap/lexicon";

Lexicon.extend({
    'key': {
         en: 'On the other hand ...',
         ru: 'Не следует, однако...',
    }
});

console.log(lexicon.get('key'));
```
