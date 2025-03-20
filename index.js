// Função para carregar as tarefas do LocalStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Limpar a lista antes de renderizar
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${task}</span>
        <button onclick="removeTask(${index})">X</button>
      `;
      taskList.appendChild(li);
    });
  }
  
  // Função para adicionar uma tarefa
  function addTask() {
    const input = document.getElementById('task-input');
    const newTask = input.value.trim();
    if (newTask) {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      input.value = '';
      loadTasks();
    }
  }
  
  // Função para remover uma tarefa
  function removeTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
  }
  
  // Carregar as tarefas quando a página for carregada
  window.onload = loadTasks;
  

//   arrumar para o front depois pq acho que tem coisa que não vai funcionar