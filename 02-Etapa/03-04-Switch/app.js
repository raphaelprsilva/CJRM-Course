/* ----------------------------------------------
    Switch
-----------------------------------------------*/

/* ----------------------------------------------
    Exemplo 01
-----------------------------------------------*/

/*
  Útil para verificar uma variável ou constante, caso ela tenha n casos possíveis;
*/

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

