# Resumo - Etapa 02 - Aula 03-04

## Switch Statement (``switch``)

- Podemos comparar a ``switch`` com o ``if-else``, pois a abordagem é semelhante;
- Também é útil para verificar uma variável ou constante, caso ela tenha **n** casos possíveis;

Exemplo 1:

~~~javascript
const grade = 'F';

switch(grade) {
  case 'A':
    console.log('Você tirou um A');
    break;
  case 'B':
    console.log('Você tirou um B');
    break;
  case 'C':
    console.log('Você tirou um C');
    break;
  case 'D':
    console.log('Você tirou um D');
    break;
  case 'E':
    console.log('Você tirou um E');
    break;
  default:
    console.log('Nota inválida');
}
~~~
