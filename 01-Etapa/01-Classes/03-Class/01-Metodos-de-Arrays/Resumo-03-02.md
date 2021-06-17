# Resumo - Etapa 01 - Aula 03-02

## Arrays e seus métodos

### 1. Arrays.

- ``Arrays``: são utilizados para armazenar uma lista de valores, que geralmente tem alguma relação entre si;

- ``Arrays`` são '**zero based**', ou seja, a contagem dos elementos deste, se iniciam por 'zero'.

Exemplo: Notação de um ``array``

~~~javascript
let heroes = ['Batman', 'Catwoman', 'Iron man'];

heroes[0] = 'Batman';
heroes[1] = 'Catwoman';
heroes[2] = 'Iron man';
~~~

- ``Arrays`` também tem a propriedade ``length``. Veja abaixo:

~~~javascript
console.log(heroes.length);

(Retorno: 3);
~~~


- Sobrescrevendo um valor do array.
    - No caso, desejamos alterar o herói, ``'Iron man'``, por ``'Spider man'``. Para isso, vamos fazer isso:

~~~javascript
heroes[2] = 'Spider Man';
~~~


### 2. Métodos de array

#### 2.1 Método ``join()``

- ``join()``: Retorna uma nova string com os items concatenados e separados por uma virgula;

Exemplo:
~~~javascript
let heroes = ['Batman', 'Catwoman', 'Iron man'];

console.log(heroes.join());
(Tipo do Retorno: 'string')
(Retorno: 'Batman,Catwoman,Iron man')

console.log(heroes.join('-'));
(Tipo do Retorno: 'string')
(Retorno: 'Batman-Catwoman-Iron man')
~~~

#### 2.2 Método ``indexOf()``

- ``indexOf()``: Obtém o index da primeira ocorrencia passada como argumento;

Exemplo:
~~~javascript
const ages = [12, 43, 21, 12];

console.log(ages.indexOf(43));
(Tipo do Retorno: 'number')
(Retorno: 1 - Posição de 43 no array 'ages')

console.log(ages.indexOf(54));
(Tipo do Retorno: 'number')
(Retorno: -1 - Ou seja, não foi encontrado o 54 no array)
~~~

#### 2.2 Método ``concat()``

- ``concat()``: Concatena, une dois arrays e não modifica os arrays originais;

Exemplo:
~~~javascript
let heroes = ['Batman', 'Catwoman', 'Iron man'];
let newHeroes = ['Wonder Woman', 'Catwoman', 'Flash'];

console.log(heroes.concat(newHeroes));
(Tipo do Retorno: 'object')
(Retorno: ['Batman', 'Catwoman', 'Iron man', 'Wonder Woman', 'Catwoman', 'Flash'])
~~~