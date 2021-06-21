/*----------------------------------------------------
  copyEvent
----------------------------------------------------*/

const paragraph = document.querySelector('.copy-me');

paragraph.addEventListener('copy', () => {
  
  console.log('texto copiado');
});

/*----------------------------------------------------
  mousemove
----------------------------------------------------*/
const div = document.querySelector('.box');

div.addEventListener('mousemove', (event) => {
  div.textContent = `X: ${event.offsetX} | Y: ${event.offsetY}`;
})

/*----------------------------------------------------
  wheel
----------------------------------------------------*/
document.addEventListener('wheel', event => {
  console.log(event.pageX, event.pageY);
})

