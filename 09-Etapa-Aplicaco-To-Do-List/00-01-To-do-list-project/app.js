const formAddTodo = document.querySelector('.form-add-todo');
const todosContainer = document.querySelector('.todos-container');
const inputSearchTodo = document.querySelector('.form-search input');

const addTodo = (inputValue) => {
  if (inputValue.length) {
    todosContainer.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${inputValue}">
        <span>${inputValue}</span>
        <i class="far fa-trash-alt" data-trash="${inputValue}"></i>
      </li>
    `;

    event.target.reset();
  }
};

formAddTodo.addEventListener('submit', (event) => {
  event.preventDefault();

  // add - é a classe do input
  // trim() - método que retira os espaços em branco antes e depois
  const inputValue = event.target.add.value.trim();
  addTodo(inputValue);
});

const removeTodo = (clickedElement) => {
  const trashDataValue = clickedElement.dataset.trash;
  const todo = document.querySelector(`[data-todo="${trashDataValue}"]`);

  if (trashDataValue) {
    todo.remove();
  }
};

todosContainer.addEventListener('click', (event) => {
  const clickedElement = event.target;
  removeTodo(clickedElement);
});

const filterTodos = (todoList, inputValue, returnMatchedTodos) => {
  return todoList.filter((listItem) => {
    const matchedTodos = listItem.innerText.toLowerCase().includes(inputValue);
    return returnMatchedTodos ? matchedTodos : !matchedTodos;
  });
};

const manipulateTodos = (todoList, classToRemove, classToAdd) => {
  todoList.forEach((todo) => {
    todo.classList.remove(classToRemove);
    todo.classList.add(classToAdd);
  });
};

const hideTodos = (todoList, inputValue) => {
  const todosToHide = filterTodos(todoList, inputValue, false);
  manipulateTodos(todosToHide, 'd-flex', 'hidden');
};

const showTodos = (todoList, inputValue) => {
  const todosToShow = filterTodos(todoList, inputValue, true);
  manipulateTodos(todosToShow, 'hidden', 'd-flex');
};

inputSearchTodo.addEventListener('input', (event) => {
  event.preventDefault();

  const inputValue = event.target.value.trim().toLowerCase();
  const allTodos = Array.from(todosContainer.children);

  hideTodos(allTodos, inputValue);
  showTodos(allTodos, inputValue);
});
