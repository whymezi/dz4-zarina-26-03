var names = [
    {object: null}, 
    {object: 123}, 
    {object: undefined},
    {object: null},
    {object: 34}, 
    {object: 65},
    {object: undefined},
    {object: null},
    {object: null},
    {object: 43},
    {object: null},
]
console.log(names);
var result = names.filter(i => i.object === null)
console.log(result);
var result2 = names.filter(i => i.object === undefined)
console.log(result2);
var result3 = names.filter(i => i.object >= 1)
console.log(result3);

console.log(result);
console.log(result3);
console.log(result2);