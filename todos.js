const loadData = () => {
  let url = 'https://jsonplaceholder.typicode.com/todos';
  fetch(url)
    .then(res => res.json())
    .then(data => loadTodos(data))
};

const loadTodos = (todos) => {
  let todoContainer = document.getElementById('todo-container');
  todoContainer.innerHTML = "";

  todos.forEach(todo => {
    let div = document.createElement('div')
    div.classList.add('todo-box');
    div.innerHTML = `
      <p>${todo.title}</p>
      <h1>${todo.completed}</h1>
    `

    todoContainer.appendChild(div);
  });
};