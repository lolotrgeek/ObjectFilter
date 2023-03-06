const { Objectfilter } = require('./main')
//an example of how to use the ObjectFilter function 
let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
let allowed = ['a', 'c']
let filtered = Objectfilter(obj, allowed)

// expects { a: 1, c: 3 }
console.log(filtered)