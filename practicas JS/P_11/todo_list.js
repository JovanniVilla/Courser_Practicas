const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

//console.log(taskInput, addTaskBtn, taskList, clearCompletedBtn);

// Array to hold tasks
let tasks = [];

function displayTasks(){
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}><label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);        
    });
}

function addTask(){
    const taskText = taskInput.value.trim();
    if (taskText !== ""){
        tasks.push({text: taskText, completed: false});
        taskInput.value = "";
        displayTasks();
    }
}



function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
        tasks = tasks.filter(task => !task.completed);
        displayTasks();
    }


function clearAllTasks() {
    tasks = [];
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllBtn.addEventListener("click", clearAllTasks);