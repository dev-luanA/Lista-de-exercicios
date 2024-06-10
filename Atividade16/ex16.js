document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('newTask');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    loadTasks();

    addTaskButton.addEventListener('click', addTask);

    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const task = {
                id: Date.now(),
                text: taskText,
                completed: false
            };
            createTaskElement(task);
            saveTask(task);
            newTaskInput.value = '';
        }
    }

    function createTaskElement(task) {
        const li = document.createElement('li');
        li.dataset.id = task.id;
        li.className = task.completed ? 'completed' : '';

        const taskText = document.createElement('span');
        taskText.textContent = task.text;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'task-buttons';

        const completeButton = document.createElement('button');
        completeButton.innerHTML = '✔'; // Coloque o ícone aqui
        completeButton.addEventListener('click', () => toggleComplete(task.id));

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '🗑'; // Coloque o ícone aqui
        deleteButton.addEventListener('click', () => deleteTask(task.id));

        buttonsDiv.appendChild(completeButton);
        buttonsDiv.appendChild(deleteButton);

        li.appendChild(taskText);
        li.appendChild(buttonsDiv);
        taskList.appendChild(li);
    }

    function toggleComplete(taskId) {
        const tasks = getTasks();
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            saveTasks(tasks);
            const taskElement = document.querySelector(`li[data-id='${taskId}']`);
            taskElement.classList.toggle('completed');
        }
    }

    function deleteTask(taskId) {
        let tasks = getTasks();
        tasks = tasks.filter(t => t.id !== taskId);
        saveTasks(tasks);
        const taskElement = document.querySelector(`li[data-id='${taskId}']`);
        taskElement.remove();
    }

    function saveTask(task) {
        const tasks = getTasks();
        tasks.push(task);
        saveTasks(tasks);
    }

    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function getTasks() {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    }

    function loadTasks() {
        const tasks = getTasks();
        tasks.forEach(task => createTaskElement(task));
    }
});
