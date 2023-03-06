# Object Filter
Takes an allowed set of keys and filters out all other key/values pairs.

## Usage
```
const { Objectfilter } = require('./main')

let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
let allowed = ['a', 'c']
let filtered = Objectfilter(obj, allowed) // expects { a: 1, c: 3 }


```