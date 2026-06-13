// Events => there are multiple types of events 
    // Mouse Events => dblclick
    // Pointer Events => click
    // keyboard Events => keypress
    // Input Events =>
    // Submit Events =>


// const btn = document.querySelector("button")
// btn.addEventListener("dblclick", (events) => { 
//     console.log(events);
// })


// window.addEventListener("keypress", (event) => { 
//     console.log(event);
// })


// btn.addEventListener("mouseover", (events) => { 
//     console.log(events);
// })




// Event Propogation ~~ Eevent Traversal => event propagation and traversing means a event moves from top to bottom and bottom to top both are happend simulataneusly but by default we only got event bubbling because event capturing has by default false for capturing we have to make it true ' 
    // event capturing
    // event bubbling


// let body = document.body;
// let div = document.querySelector("div");
// let button = document.querySelector("button");

// // event capturing 
// button.addEventListener("click", (event) => { 
//     console.log("button triggered")
// })

// div.addEventListener("click", (event) => { 
//     console.log("div triggered")
// })

// body.addEventListener("click", (event) => { 
//     console.log("body triggered")
// })


// // event bubbling 
// button.addEventListener("click", (event) => { 
//     console.log("button triggered")
// }, {capturing: true})

// div.addEventListener("click", (event) => { 
//     console.log("div triggered")
// }, {capturing: true})

// body.addEventListener("click", (event) => { 
//     console.log("body triggered")
// }, { capturing: true })









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
        image: "https://images.unsplash.com/photo-1570731102433-34470efb6acf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmwlMjBpYW1nZXxlbnwwfDJ8MHx8fDA%3D",
    },
    {
        id: 4,
        name: "Adarsh Verma",
        email: "adarsh@gmail.com",
        image: "https://images.unsplash.com/photo-1678650625611-a3ecb4aeab79?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbnMlMjBpbWFnZXxlbnwwfDJ8MHx8fDA%3D",
    }
]


let rendreUser = (user) => {
    usersContainer.innerHTML += `<div class="userCard">
                <div class="profile">
                    <img src="${user.image}" alt="">
                </div>
                <div class="details">
                    <h2>${user.name} </h2>
                    <p>${user.email} </p>
                    <p> --/--/---- </p>
                    <div class="actions">
                        <button id="edit">Edit</button>
                        <button onClick = () id="del">Delete</button>
                    </div>
                </div>
            </div>`
}

users.forEach(user => rendreUser(user));




form.addEventListener("submit", (events) => {
    events.preventDefault();

    if (nameInput.value.trim() === "" && emailInput.value.trim() && imageInput.value.trim() === "", urlInput.value.trim() === "") return;

    let newUser = {
        id: users.length + 1,
        name: nameInput.value,
        email: emailInput.value,
        image: urlInput.value
    }

    users.push(newUser);

    rendreUser(newUser)

    form.reset();
});


