//const letters/*=['a','b','c'] */;//produces error
const letter=['a','b','c'];
console.log(letter);
// letter=['d'];
// console.log(letter); reinitialization is not possible
letter[1]=['A','B'];
letter[2]=['D','E'];
console.log(letter);
// for(let i=0;i<letter[1].length;i++)
// {
//     console.log(letter[i]);
// }