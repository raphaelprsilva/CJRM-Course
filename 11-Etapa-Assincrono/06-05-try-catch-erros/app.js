const getTodos = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todosA');

    if (!response.ok) {
      throw new Error('Was not possible to get data.');
    }

    const todos = await response.json();
    return todos;
  } catch (error) {
    console.log(error.message);
  }
};

const logTodos = async () => {
  const todos = await getTodos();
  console.log(todos);
}

logTodos();
