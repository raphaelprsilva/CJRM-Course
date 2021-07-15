const past = new Date('May 1 2021 7:47:00');
const present = new Date();

console.log(present.getTime(), past.getTime());

const difference = present.getTime() - past.getTime();
console.log(
  'Difrença de milisegundos (01/05/2021 até 15/07/2021): ' + difference
);

const seconds = Math.round(difference / 1000);
console.log('Difrença de segundos (01/05/2021 até 15/07/2021): ' + seconds);

const minutes = Math.round(seconds / 60);
console.log('Difrença de minutos (01/05/2021 até 15/07/2021): ' + minutes);

const hours = Math.round(minutes / 60);
console.log('Difrença de horas (01/05/2021 até 15/07/2021): ' + hours);

const days = Math.round(hours / 24);
console.log('Difrença de dias (01/05/2021 até 15/07/2021): ' + days);

// Converter timestamp em data
const timestamp = 1675938474990;

console.log(new Date(1675938474990));
