# Resumo - Etapa 07 - Aula 02-02

## Exibindo Pontuação

- Objeto ``window``: é um objeto que existe no escopo global de uma aplicação;
    - No javascript, todos os métodos estão "pendurados" neste objeto. Isso no front-end (browser) da aplicação;
    - No Node JS, onde há um ambiente back-end, existe um outro objeto para tal;

- Se por exemplo, eu estiver no browser, e for no console, e digitar ``window``, eu verei vários métodos atrelados a esse objeto;
  - Se eu digitar, ``window.outerWidth``, no console do browser, eu consigo ver a largura da tela, no exato momento;
  - Eu não preciso utilizar a expressão ``window.outerWidth``, apenas digitando ``outerWidth``, o browser consegue identificar a propriedade do objeto;
  - Quando digitamos, por exemplo, ``console.log('oi)``, veremos um "oi" exibido no console. Implicitamente, a propriedade ``console``, está atrelada ao objeto ``window``. Tanto é, que se digitarmos ``window.console.log('oi')``, o resultado é o mesmo;

- Outro exemplo, é a propriedade ``document``;
    - Quando fazemos, ``document.querySelector('form')``, é a mesma coisa de se fazer ``window.document.querySelector('form')``;

- O ``setTimeout()`` é outro método que está atrelado ao objeto ``window``;
    - Ex: ``setTimeout(() => {}, algumTempo)``;
    - 1º Argumento: uma função, onde eu vou colocar o que eu desejo;
    - 2º Argumento: depois de quanto tempo eu quero que a lógica do primeiro argumento, seja executada (em milisegundos - 2000 = 2 segundos);

- O método ``scrollTo()`` também está atrelado ao objeto ``window``;
    - Com ele, é possível fazer a tela rolar automaticamente, até uma posição predefinida;
    - Ex.: ``scrollTo(0, 100)``;
    - Neste caso, eu estou dizendo: "Role a página para a posição X da tela = 0 px, e para  posição Y da tela = 100 px;
