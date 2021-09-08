const myArray = [
  { a: 1, b: 2 },
  { c: 3, d: 4 },
  { e: 5, f: 6 },
];

// Setando na localStorage, um array no fomato JSON
localStorage.setItem('myArray', JSON.stringify(myArray))

// Getting, obtendo na localStorage, o array convertido para objeto JS
const JSONFromLocalStorage = localStorage.getItem('myArray');
const myConvertedArray = JSON.parse(JSONFromLocalStorage);

console.log(myConvertedArray);