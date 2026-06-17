let body = document.body
let main = document.querySelector("main")
let nav = document.querySelector("nav")
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



form.addEventListener("submit", (e) => { 
    e.preventDefault();

    if (taskTitle.value.trim() === "" || categoryInput.value === "") return;

    if (isEditingTask !== null) {
        tasks[isEditingTask] = {
            id,
            title: taskTitle.value,
            category: categoryInput.value,
            status,
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
    totalTasks.textContent = tasks.length;
})
 



let editTask = (index) => { 
    isEditingTask = index;

    let task = tasks[isEditingTask];

    taskTitle.value = task.title;
    categoryInput.value = task.category;

}



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






let updateAnalysis = () => {
    totalTasks.textContent = tasks.length;
    let completed =
        tasks.filter(
            task => task.status === "completed"
        ).length;

    let pending =
        tasks.filter(
            task => task.status === "pending"
        ).length;

    completedTask.textContent = completed;
    pendingTask.textContent = pending;
}













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

