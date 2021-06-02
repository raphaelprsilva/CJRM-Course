/* -----------------------------------------
    undefined
-------------------------------------------*/
// emptiness é undefined
// Nós não dissemos qual tipo de valor emptiness possuí
let emptiness;

// Quando tentamos fazer uma operação com uma variavel que é undefined, ela retornará 'NaN'
console.log(emptiness, emptiness + 3, `O valor é ${emptiness}`);

/* -----------------------------------------
    null
-------------------------------------------*/
// Geralmente é atribuído intencionalmente
// Quando usar o 'null'? Quando eu quiser indicar
// intencionamente, que não há nenhum tipo de valor na
// variável

let newEmptiness = null;

// Quando tentamos fazer uma operação com uma variavel que é undefined, ela retornará 'NaN'
console.log(newEmptiness, newEmptiness + 3, `O valor é ${newEmptiness}`);