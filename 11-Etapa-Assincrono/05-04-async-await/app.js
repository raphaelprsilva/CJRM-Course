const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();
  return todos;
};

const logTodos = async () => {
  const todos = await getTodos();
  console.log(todos);
}

logTodos()
