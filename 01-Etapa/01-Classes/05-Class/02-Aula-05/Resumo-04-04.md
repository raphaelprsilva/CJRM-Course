# Resumo - Etapa 01 - Aula 04-04

## Conversão de Tipos

### 1 - Convertendo ``string`` para ``number``

- Podem existir casos, onde será necessário converter valores explicitamente, como no caso abaixo, onde eu desejo somar uma string e um número;

~~~javascript
let score = '100';

console.log(score + 1); // Resultado: '1001'
~~~

- Mas, sabemos que na prática, isso não irá funcionar e, obteríamos, como resultado, ``1001``, ou seja, ocorreria uma concatenação dos valores;

- Para fazer isso, precisamos **converter explicitamente** o valore armazenado na variável ``score``;

- Então, vamos utilizar uma **função construtora** para tal;

~~~javascript
let score = '100';

score = Number(score); // score = 100

// Verificando o tipo de valor da variável score
console.log(typeof score); // 'number'

console.log(score + 1); // 101
~~~

- Se eu tentar converter uma ``string`` em ``number``;

~~~javascript
let fruit = 'maçã';

// Tentando converter uma string em number
// Qualquer operação que não faça sentido, será convertida para NaN
console.log(Number(fruit)); // NaN

~~~

- Se eu tentar converter um ``number`` em ``string``;

~~~javascript
let score = 100;

// Tentando converter um number em string
console.log(String(score)); // '100' -> Conversão bem sucedida
~~~

- Se eu tentar converter um ``number`` em ``boolean``, algumas oberservações devem ser levadas em consideração;
    - em JS, alguns valores são considerados ``true`` e outros ``false``;
    - Quando tentamos converter os valores abaixo para ``boolean``, o retorno será ``false``, logo chamamos estes valores de ``falsy``;
      - false;
      - 0;
      - aspas duplas (""), aspas simples (''), crase (``);
      - null;
      - undefined;
      - NaN;

Exemplo:

~~~javascript
// Tentando converter os valores acima em 'boolean'
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
~~~

- Já, qualquer outro valor, que não seja ``falsy``, quando convertidos em ``boolean``, retornam ``true``, ou seja, esses valores são chamados de ``truthy``;

Exemplo:

~~~javascript
// Tentando converter os valores acima em 'boolean'
console.log(Boolean(1)); // true
console.log(Boolean('0')); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
~~~