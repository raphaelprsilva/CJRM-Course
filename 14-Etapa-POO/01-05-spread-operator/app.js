'use strict';

// ATTENTION: duplicando arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const newArray = arr1.concat(arr2);
// const newArray = [...arr1, ...arr2, 7];

// console.log(newArray);

// ATTENTION: duplicando objetos
// const obj1 = { prop1: 1, prop2: 2 };
// const obj2 = { prop3: 3, prop4: 4 };

// const newObj = Object.assign({}, obj1, obj2);
// const newObj = { ...obj1, ...obj2 };

// console.log(newObj);

// ATTENTION: spread e strings
// const getReversedString = (string) => {
//   return [...string].reverse().join('');
// };

// console.log(getReversedString('123'));

const numbers = [7, 3, 5, 3.1, 9, 100, 0];

const min = Math.min(...numbers);
const max = Math.max(...numbers);

console.log('min:', min);
console.log('max:', max);
