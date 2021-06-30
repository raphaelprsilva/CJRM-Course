const formAddTodo = document.querySelector('.form-add-todo');
const todosContainer = document.querySelector('.todos-container');
const inputSearchTodo = document.querySelector('.form-search input');

// console.log(Array.from(todosContainer.children)[0].innerText);
// console.log(todosContainer.children[0].innerText);

formAddTodo.addEventListener('submit', event => {
  event.preventDefault();

  // add - é a classe do input
  // trim() - método que retira os espaços em branco antes e depois
  const inputValue = event.target.add.value.trim();

  if (inputValue.length) {
    todosContainer.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${ inputValue }</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;

    event.target.reset();
  }
});

todosContainer.addEventListener('click', event => {
  const clickedElement = event.target;
  if (Array.from(clickedElement.classList).includes('delete')) {
    clickedElement.parentElement.remove();
  }
});

inputSearchTodo.addEventListener('input', event => {
  event.preventDefault();

  const inputValue = event.target.value.trim().toLowerCase();

  console.log(inputValue);

  Array.from(todosContainer.children)
    .filter((listItem) => !listItem.innerText.toLowerCase().includes(inputValue))
    .forEach((todo) => {
      todo.classList.remove('d-flex');
      todo.classList.add('hidden');
    });

  Array.from(todosContainer.children)
  .filter((listItem) => listItem.innerText.toLowerCase().includes(inputValue))
  .forEach((todo) => {
    todo.classList.remove('hidden');
    todo.classList.add('d-flex');
  });
})
