const present = new Date();

// Retorna um objeto
console.log(`O objeto "Date()" é do tipo: ${typeof present}`);

// Retorna o momento presente
console.log(present);

// Retorna o ano
console.log(`getFullYear (ano): ${present.getFullYear()}`);

// Retorna o mês - zero based
console.log(`getMonth (mês do ano): ${present.getMonth()}`);

// Retorna o dia do mês
console.log(`getDate (dia do mês): ${present.getDate()}`);

// Retorna o dia da semana
console.log(`getDay (dia da semana): ${present.getDay()}`);

// Retorna a hora presente
console.log(`getHours (hora presente): ${present.getHours()}`);

// Retorna o minuto presente
console.log(`getMinutes (minuto presente): ${present.getMinutes()}`);

// Retorna o segundo presente
console.log(`getSeconds (segundo presente): ${present.getSeconds()}`);

// Retorna quantos milisegundos se passaram desde 01/01/1970
console.log(`timestamp: ${present.getTime()}`);

// Retorna a data atual como string
console.log(`Data atual em String: ${present.toDateString()}`);

// Retorna a hora atual como string
console.log(`hora atual em String: ${present.toTimeString()}`);

// Retorna a data e hora atual
console.log(`toLocaleString: ${present.toLocaleString()}`);
