    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const clearCompletedBtn = document.getElementById("clearCompletedBtn");
    const taskList = document.getElementById("taskList");

    // TAREA DE PRÁCTICA
    const clearAllBtn = document.getElementById("clearAllBtn");

    
    
    let tasks = [];

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            tasks.push({ text: taskText, completed: false });
            taskInput.value = "";
            displayTasks();
        }
    }

    function displayTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = `task-${index}`;
            checkbox.checked = task.completed;
            checkbox.addEventListener("change", () => toggleTask(index));
            
            const label = document.createElement("label");
            label.htmlFor = `task-${index}`;
            label.textContent = task.text;
            
            li.appendChild(checkbox);
            li.appendChild(label);
            taskList.appendChild(li);
        });
    }

    function toggleTask(index) {
        tasks[index].completed = !tasks[index].completed;
        displayTasks();
    }

    function clearCompletedTasks() {
        tasks = tasks.filter(task => !task.completed);
        displayTasks();
    }
// TAREA DE PRÁCTICA    
    function clearAllTasks(){
        tasks.splice(0, tasks.length);
        displayTasks();
    }

    addTaskBtn.addEventListener("click", addTask);
    clearCompletedBtn.addEventListener("click", clearCompletedTasks);
    // TAREA DE PRÁCTICA
    clearAllBtn.addEventListener("click", clearAllTasks);

    displayTasks();
