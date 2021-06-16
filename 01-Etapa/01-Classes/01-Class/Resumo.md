# Resumo - Etapa 01 - Aula 01

## O que são variáveis? 🤔

São basicamente, "locais" especificados para armazenar valores. Esses valores, podem ser, de vários tipos. *(Veremos isso adiante)*

### Utilizando o ``let``.


- ``let age = 31;`` (**lê-se**: "age" recebe 31)
- ``let currentYear = 2021;`` (**lê-se**: "currentYear" recebe o valor 2021)

#### Exibindo no console:

~~~javascript
console.log('age:', age, ' ', 'currentYear:', currentYear);
~~~

Serão exibidos no console, os valores de ``age`` e ``currentYear``;

- Quando estamos utilizando a declaração de uma variável, com o ``let``, é possível reatribuir o valor da variável. Veja abaixo:

**Exemplo**:
~~~javascript
age = 25;
console.log('"Nova" age atualizada:', age);
~~~

### Utilizando o ``const``.

Utilizamos a seguinte sintaxe, para declarar uma variável com o ``const``.

~~~javascript
const points = 100;
~~~

Caso eu tente reatribuir o valor de ``points``, para outro valor, no caso ``40``, algo estranho acontece.

~~~javascript
points = 40;
~~~

Ao tentar reatribuir um valor para uma constante
e tentar exibir essa mudança no console, o browser
mostrará um erro, pois é uma 'CONSTANTE', e eu não
posso alterá-la.

## Só para não esquecer

- ``const`` e ``let`` são features recentes do JS;
- Antes era possível, apenas fazer isso com ``var``


## Convenções

- Comentar em estilo ``camelCase``;
- Dê nomes significativos às variáveis, para fácil compreensão;
- Não utilize palavas reservadas do JS;


**Oberservação:** É sempre interessante e recomendado, utlizar **nomes de variáveis** correspondentes aquilo que elas querem dizer. Isso se faz necessário, pois, outra pessoa desenvolvedora, provavelmente irá ler seu código em algum momento, e isso facilitará a compreensão do mesmo.

