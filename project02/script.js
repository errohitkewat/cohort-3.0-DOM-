let taskInput = document.querySelector("input");
let addBtn = document.querySelector(".add");
let deleteTask = document.querySelector(".del")
let todoContainer = document.querySelector(".list-container");



addBtn.addEventListener("click", () => {
    let value = taskInput.value;
    if (value.trim() === "") return;


    let todo = document.createElement("div");
    todo.classList.add("todo");
    
    let left = document.createElement("div");
    left.classList.add("left");
    
    let right = document.createElement("div");
    right.classList.add("right");
    
    let h2 = document.createElement("h2");
    h2.innerText = `${value}`;
    
    let edit = document.createElement("button")
    edit.classList.add("edit");
    let del = document.createElement("button")
    del.classList.add("del")
    
    let editIcon = document.createElement("i");
    editIcon.classList.add("ri-pencil-line")
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("ri-close-fill")
    
    todo.append(left, right);
    left.append(h2);
    right.append(edit, del)
    edit.append(editIcon)
    del.append(deleteIcon)

    todoContainer.append(todo);


    // todoContainer.innerHTML += `<div class="todo">
    //                         <div class="left">
    //                             <h2>${value}</h2>
    //                         </div>
    //                         <div class="right">
    //                             <button class="edit"><i class="ri-pencil-line"></i></button>
    //                             <button class="del"><i class="ri-close-fill"></i></button>
    //                         </div>
    //                     </div>`;

    taskInput.value = "";
})




// deleteTask.addEventListener("click", () => { 

// })