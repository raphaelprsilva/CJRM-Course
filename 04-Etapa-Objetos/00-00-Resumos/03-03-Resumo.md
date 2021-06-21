# Resumo - Etapa 04 - Aula 03-03

## 1. O objeto ``Math``

- O objeto ``Math``, traz propriedades e métodos matemáticos que podem ser importantes, em certas circunstâncias. Se dermos um ``console.log(Math)``, receberemos como retorno, tais **propriedades** e **métodos**;

- **Exemplo 1**:

~~~javascript
console.log(Math);
/*
E: 2.718281828459045
LN2: 0.6931471805599453
LN10: 2.302585092994046
LOG2E: 1.4426950408889634
LOG10E: 0.4342944819032518
PI: 3.141592653589793
SQRT1_2: 0.7071067811865476
SQRT2: 1.4142135623730951
abs: ƒ abs()
acos: ƒ acos()
acosh: ƒ acosh()
asin: ƒ asin()
asinh: ƒ asinh()
atan: ƒ atan()
atan2: ƒ atan2()
atanh: ƒ atanh()
cbrt: ƒ cbrt()
ceil: ƒ ceil()
*/
~~~

### 1.1. Método ``round()``

- Arredonda o número para cima ou para baixo;

- **Exemplo 1**:

~~~javascript
const area = 7.7;

// Arredonda o número para cima ou para baixo
// Ex. 7.2 -> Arredonda para 7
// Ex. 7.7 -> Arredonda para 8
// Ex. 7.5 -> Arredonda para 8
console.log(Math.round(area));
~~~

### 1.2. Método ``floor()``

- Sempre Arredonda para **BAIXO**, o número em questão;

- **Exemplo 1**:

~~~javascript
const area = 7.7;

// Arredonda o número para baixo
console.log(Math.round(area)); // 7
~~~

### 1.3. Método ``ceil()``

- Sempre Arredonda para **CIMA**, o número em questão;

- **Exemplo 1**:

~~~javascript
const area = 7.2;

// Arredonda o número para cima
console.log(Math.round(area)); // 8
~~~

### 1.4. Método ``trunc()``

- Trunca o número, ou seja, **remove o decimal do número**;

- **Exemplo 1**:

~~~javascript
const area = 7.2;

console.log(Math.round(area)); // 7
~~~

### 1.5. Gerando números aleatórios - ``Math.random()``

- O método ``random()`` gera números aleatórios entre ``0`` e ``1``;

- **Exemplo 1**:

~~~javascript
const randomNumber = Math.random();

console.log(randomNumber); // qualquer número aleatório entre 0 e 1

// Obtém um número aleatório entre 0 e 100
console.log(Math.round(randomNumber * 100));
~~~