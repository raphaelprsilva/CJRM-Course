# Resumo - Etapa 05 - Aula 04-03

## 1. Mais eventos do DOM

### 1.1 Copy Event

- Além do ``click`` event, nós temos também o ``copy`` event;
- Ao copiar algum item, é possível selecionar alguma ação;

**Exemplo**:

~~~javascript
const paragraph = document.querySelector('.copy-me');

// Ao copiar algo no parágrafo, é exibido no console, a mensagem 'texto copiado'
paragraph.addEventListener('copy', () => {
  console.log('texto copiado');
});
~~~

### 1.2 ``mousemove`` Event

- Podemos utilizar o evento ``mousemove`` para capturar, quando o mouse passa por determinado local;
- O ``mousemove`` event, possuí duas propriedade bem interessantes:
    - ``offSetX``;
    - ``offSetY``;

**Exemplo**:

~~~javascript
const div = document.querySelector('.box');

div.addEventListener('mousemove', (event) => {
  div.textContent = `X: ${event.offsetX} | Y: ${event.offsetY}`;
})
~~~

### 1.2 ``wheel`` Event

- Podemos utilizar o evento ``whell`` para capturar, quando a tela é rolada para cima, ou para baixo;

**Exemplo**:

~~~javascript
document.addEventListener('wheel', event => {
  console.log(event.pageX, event.pageY);
})
~~~
