# Resumo - Etapa 06 - Aula 01-04

## RegEx - Regular Expressions

- São padrões utilizados para verificar padrões de match que o usuário inputa num form, por exemplo;

- Qual tipo de padrão eu quero dar match?

- Eu consigo definir expressões regulares para verificar os padrões que eu desejo;

- Vamos utilizar o site: www.regex101.com;
  - Modifique a linguagem para: ECMAScript (JS);
  - Uma ``regEx`` começa e termina com ``/``;
  - Eu preciso inserir ``^`` no início, e ``$`` no final da expressão que eu desejo;
    - ``^javascript$`` -> Dessa maneira, o match com a palavra 'javascript' só irá acontecer, se 'javascript' for o final do valor do input, e se 'javascript' for o início do valor do input;

- ``^[a-zA-Z]$`` -> Aceita qualquer caractere que esteja entre 'a' e 'z', seja minúsculo, seja maiúsculo;

- ``^[a-zA-Z]{6,10}$`` -> Dá match, caso eu tenha de 6 a 10 caracteres digitados, e que estes caracteres estejam entre 'a' e 'z', minúsculo ou maiúsculo;

- ``^.{6,10}$`` -> o 'ponto .' representa qualquer caractere, então eu posso
    digitar qualquer caractere especial entre 6 e 10 caracteres de comprimento;
