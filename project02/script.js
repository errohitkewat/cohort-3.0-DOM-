let taskInput = document.querySelector("input");
let addBtn = document.querySelector(".add");
let todoContainer = document.querySelector(".list-container");

let editingTask = null; 


addBtn.addEventListener("click", () => {
    let value = taskInput.value;
    if (value.trim() === "") return;

    if (editingTask) {
        editingTask.innerText = value
        editingTask = null;
        taskInput.value = "";
        return
    }
    else { 
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
    
        edit.addEventListener("click", () => { 
            editingTask = h2;
            taskInput.value = h2.innerText;
        })
    
        let del = document.createElement("button")
        del.classList.add("del")
        del.addEventListener("click", () => { 
            todo.remove();
        })
        
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
        taskInput.value = "";
    }


    // todoContainer.innerHTML += `<div class="todo">
    //                         <div class="left">
    //                             <h2>${value}</h2>
    //                         </div>
    //                         <div class="right">
    //                             <button class="edit"><i class="ri-pencil-line"></i></button>
    //                             <button class="del"><i class="ri-close-fill"></i></button>
    //                         </div>
    //                     </div>`;

})
