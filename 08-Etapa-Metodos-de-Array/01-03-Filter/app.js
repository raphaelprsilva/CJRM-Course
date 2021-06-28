// const randomNumbers = [36, 99, 37, 63];

// // Desejo gerar um novo array com os números maiores que 37
// const numbersGreaterThan37 = randomNumbers.filter((item) => item > 37);

// console.log({randomNumbers, numbersGreaterThan37});

// --------------------------------------------------

const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
];

const premiumUsers = users.filter(({ premium }) => premium );

console.log(premiumUsers);