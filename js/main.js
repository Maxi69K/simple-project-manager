// Simple Project Manager
const form = document.getElementById('form');
const input = document.getElementById('input');
const taskList = document.getElementById('task-list');

form.onsubmit = e => {
    e.preventDefault();
    addTask();
};

function addTask(task) {
    let taskValue = input.value;
    task ? taskValue = task.text : task;
    taskValue ? displayTask() : taskValue;

    function displayTask() {
        const newTask = document.createElement('li');
        newTask.innerHTML = taskValue;
        newTask.onclick = () => {
            newTask.classList.toggle('completed');
            newTask.classList.contains('completed') ? ((newTask.innerHTML = `<span>${taskValue} &#10004;</span><span onclick='deleteTask()'>&#10060</span>`), (newTask.classList.toggle('delete-task'))) : (newTask.innerHTML = `${taskValue}`, newTask.classList.toggle('delete-task'));
        };
        taskList.appendChild(newTask);
        input.value = '';
    }
}

function deleteTask() {
    document.querySelectorAll('li').forEach((element) => {
        element.classList.contains('delete-task') ? element.remove() : element;
    });
}