# Resumo - Etapa 01 - Aula 02-03

## O que são ``strings``? 🤔

### 1. São basicamente, um tipo de dado, que representa um "texto". *(Veja os exemplos abaixo)*.

 - ``console.log('Hello my friends.');``

    (será exibido na tela, o texto, ``"Hello my friends."``);

### 2. Podemos armazenar ``strings`` em variáveis

~~~javascript
const email = 'meuemail@eu.com';
console.log(email);
~~~

### 3. Concatenação de Strings

~~~javascript
const firstName = 'Michael';
const lastName = 'Jackson';
const fullName = firstName + ' ' + lastName;
~~~

### 4. Posso acessar caracteres

~~~javascript
console.log(fullName[2]);
~~~

### 5. Posso obter o comprimento da string

~~~javascript
console.log(fullName.length);
~~~