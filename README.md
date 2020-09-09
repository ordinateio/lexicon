# modstrap-lexicon

Manages translations of the user interface.

## Example

### Installation

```shell script
npm i https://github.com/callisto2410/modstrap-lexicon.git#v1.0.10
```

### Usage

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
