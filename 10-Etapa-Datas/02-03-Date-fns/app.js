const present = new Date();

console.log(present);
console.log(dateFns.format(present, 'MMMM'));
console.log(dateFns.format(present, 'YYYY'));
console.log(dateFns.format(present, 'dddd'));
console.log(dateFns.format(present, 'do'));
console.log(dateFns.format(present, 'DD/MMMM/YYYY'));

const past = new Date('June 30 1993 12:00:00');

console.log(dateFns.distanceInWords(present, past));
