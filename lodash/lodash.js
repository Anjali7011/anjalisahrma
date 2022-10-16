const anjali= require ('lodash')
function lodash(){
let month1=["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
console.log(anjali.chunk(month1,3))

let oddnumbers=[1,3,5,7,9,11,13,15,17,19]
console.log(anjali.tail(oddnumbers,9))

let numbers=[2,4,6,2,8]
console.log(anjali.union(numbers))

let keyvalues=[["horror","the shining"],["drama","titanic"],["thriller","shutter island"],["fantasy","pans labyrinth"]]
console.log(anjali.fromPairs(keyvalues))
return "done"
}
module.exports.lodash=lodash