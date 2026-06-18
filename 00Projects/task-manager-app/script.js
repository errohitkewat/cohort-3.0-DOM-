let body = document.body
let analysis = document.querySelector(".analysis")
let formSection = document.querySelector(".form-section")
let form = document.querySelector("form")
let addTask = document.querySelector(".add-task")
let taskTitle = document.querySelector("#taskTitle")
let categoryInput = document.querySelector("#category");
let tasksContainer = document.querySelector(".tasks-container")
let totalTasks = document.querySelector(".total-tasks");
let completeBtn = document.querySelector(".complete-btn")
let lightTheme = document.querySelector("#light")
let darkTheme = document.querySelector("#dark")
let taskCard = document.querySelector(".task-card")
let deleteBtn = document.querySelector(".delete-btn");
let completedTask = document.querySelector(".completed-tasks");
let pendingTask = document.querySelector(".pending-tasks")

let completedTasks = 0;
let pendingTasks = 0;


let tasks = [];

let isEditingTask = null;





// This is the function in which  the cod of task card is available this function created a task card inside tasks container using innerHtml and pasing the dynamic data through the tasks array after every task render the updateAnalysis function is calling beacause updateAnalysis() updates the total, pending and completed tasks 
let renderTask = () => {
    tasksContainer.innerHTML = "";

    tasks.forEach((task, index) => { 
        tasksContainer.innerHTML += `<div class="task-card" data-id="${task.id}" data-status="${task.status}" data-category="${task.category}">
                    <div class="task-info">
                        <h3>${task.title}</h3>
                        <div class="span-container">
                            <span class="category">${task.category}</span>

                            <span class="status ${task.status}">
                                ${task.status}
                            </span>
                        </div>
                    </div>

                    <div class="task-actions">
                        <button onClick = "editTask(${index})" class="edit-btn">Edit</button>
                        <button class="complete-btn"> Complete </button>
                        <button onClick = "deleteTask(${index})" class="delete-btn">Delete</button>
                    </div>
                </div>`;
    })

    updateAnalysis();
}






// This code is submitting  form and creating a task object that contains id(date.now()), title, category and status pushes to the tasks array and then calling the render function after rendering the form is reset 
form.addEventListener("submit", (e) => { 
    e.preventDefault();

    if (taskTitle.value.trim() === "" || categoryInput.value === "") return;

    if (isEditingTask !== null) {
        tasks[isEditingTask] = {
            id: tasks[isEditingTask].id,
            title: taskTitle.value,
            category: categoryInput.value,
            status: tasks[isEditingTask].status
        }
    }
    else {
        let newTask = {
            id: Date.now(),
            title: taskTitle.value,
            category: categoryInput.value,
            status: "pending"
        };
        tasks.push(newTask);
    }
    
    renderTask();

    form.reset();
    isEditingTask = null;
    addTask.textContent = "Create Task"
})
 


// Edit button clicked the form iputs are filled with this code 
let editTask = (index) => { 
    addTask.textContent = "Update Task"
    isEditingTask = index;

    let task = tasks[isEditingTask];

    taskTitle.value = task.title;
    categoryInput.value = task.category;
}



// Complete button Functionallity 
tasksContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("complete-btn")) {
        let card = e.target.closest(".task-card");
        let id = card.dataset.id;
        
        let task = tasks.find(task => task.id == id);  
        task.status = "completed";
        renderTask();
    }
})





////// Task deletion functionality 
let deleteTask = (index) => { 
    tasks.splice(index, 1);
    renderTask();
}





// Updating the total tasks, pending tasks, and completed tasks after very operation 
let updateAnalysis = () => {
    totalTasks.textContent = tasks.length;

    let completed = tasks.filter(task => task.status === "completed").length;
    let pending = tasks.filter( task => task.status === "pending" ).length;

    completedTask.textContent = completed;
    pendingTask.textContent = pending;
}





// Light and dark theme toggel functionality 
lightTheme.addEventListener("click", () => {
    body.classList.add("dark");

    lightTheme.style.display = "none";
    darkTheme.style.display = "block";
});


darkTheme.addEventListener("click", () => {
    body.classList.remove("dark");

    darkTheme.style.display = "none";
    lightTheme.style.display = "block";
});

