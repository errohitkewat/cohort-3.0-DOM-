
let form = document.querySelector("form")
let nameInput = document.querySelector("#name")
let emailInput = document.querySelector("#email")
let urlInput = document.querySelector("#url");
let usersContainer = document.querySelector(".users-container");


let users = [
    {
        id: 1,
        name: "Rohit Kewat",
        email: "rohit@gmail.com",
        image: "https://images.unsplash.com/photo-1656147344312-b84c14b00e6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGltYWdlfGVufDB8MnwwfHx8MA%3D%3D",
    },
    {
        id: 2,
        name: "Aman Singh",
        email: "aman@gmail.com",
        image: "https://images.unsplash.com/photo-1693287728941-2e0125a67f90?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGltYWdlfGVufDB8MnwwfHx8MA%3D%3D",
    },
    {
        id: 3,
        name: "Anshika Maurya",
        email: "anshika@gmail.com",
        image: "./anshika1.png",
    },
    {
        id: 4,
        name: "Adarsh Verma",
        email: "adarsh@gmail.com",
        image: "https://images.unsplash.com/photo-1678650625611-a3ecb4aeab79?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnMlMjBpbWFnZXxlbnwwfDJ8MHx8fDA%3D",
    }
]


let renderUsers = () => {
    usersContainer.innerHTML = "";
  
    users.forEach((user, index) => {
      usersContainer.innerHTML += `<div class="userCard">
                  <div class="profile">
                      <img src="${user.image}" alt="">
                  </div>
                  <div class="details">
                      <h2>${user.name} </h2>
                      <p>${user.email} </p>
                      <p> --/--/---- </p>
                      <div class="actions">
                          <button onclick = "editUser(${index})" id="edit">Edit</button>
                          <button onclick = "deleteUser(${index})" id="del">Delete</button>
                      </div>
                  </div>
              </div>`;
    });
};
renderUsers();


let editingIndex = null;
 
form.addEventListener("submit", (events) => {
    events.preventDefault();

    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || urlInput.value.trim() === "") return;


    if (editingIndex !== null) {
        users[editingIndex].name = nameInput.value;
        users[editingIndex].email = emailInput.value;
        users[editingIndex].image = urlInput.value;
    }
    else {
        let newUser = {
            id: users.length + 1,
            name: nameInput.value,
            email: emailInput.value,
            image: urlInput.value,
        };
        users.push(newUser);
    }

    renderUsers();

    form.reset();
    editingIndex = null;
});



//// Delete User functionality 
let deleteUser = (index) => { 
    users.splice(index, 1);
    renderUsers();
}


//// Edit User functionality 
let editUser = (index) => {
    let currentUser = users[index];

    nameInput.value = currentUser.name;
    emailInput.value = currentUser.email;
    urlInput.value = currentUser.image;

    editingIndex = index;
}


