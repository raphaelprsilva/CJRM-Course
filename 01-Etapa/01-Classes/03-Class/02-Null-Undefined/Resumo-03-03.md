# Resumo - Etapa 01 - Aula 03-03

## ``null`` e ``undefined``

### 1. ``undefined``.

- Se eu declarar uma variável, e não especificar **explicitamente**, qual o tipo de valor que desejado, para armazenamento, será retornado ``undefined``;

**Exemplo 1**:

~~~javascript
let emptiness;

console.log(emptiness);

(Retorno: undefined);
~~~

- Se eu tentar fazer uma operação qualquer, com uma variável que é ``undefined``, eu terei como retorno, um ``NaN``;

**Exemplo 2**:

~~~javascript
let emptiness;

let sum = emptiness + 3;

console.log(sum);

(Retorno: NaN);
~~~

### 1. ``null``.

- Geralmente, o ``null`` é atribuído intencionalmente à uma variável qualquer;
- Quando usar o ``null``? Quando eu quiser indicar intencionamente, que não há nenhum tipo de valor na variável;

**Exemplo 1**:

~~~javascript
let newEmptiness;

console.log(newEmptiness);

(Retorno: null);
~~~

- Quando eu tento fazer uma operação, como por exemplo, uma soma, de um número com uma variável ``null``, nós obtemos o valor numérico, pois a variável é interpretada como 'zero'. Assim, é feita a soma;

**Exemplo 2**:

~~~javascript
let newEmptiness;

let sum = newEmptiness + 3;

console.log(sum);

(Retorno: 3);
~~~