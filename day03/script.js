let h1 = document.querySelector("#h1");
// console.log(h1.getAttribute("class"));

// h1.setAttribute("width", "200");
// console.log(h1)

// console.log(h1.getAttribute("width"));

// h1.removeAttribute("id");  // class attribute removed

// console.log(h1.hasAttribute("width")) // false

// let btn = document.querySelector("button");
// console.log(btn.getAttribute("data-user-id"))

// btn.dataset.userId = 201;
// console.log(btn.getAttribute("data-user-id"));





// let input = document.querySelector("input");
// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   console.log("I am from input.value =>", input.value);
//   console.log("I am from getAttribute =>", input.getAttribute("value"));
// });





// // Creating, inserting and removing elements from DOM.
// let main = document.querySelector("main");
// let lastSection = document.createElement("section");
// main.appendChild(lastSection);

// main.removeChild(lastSection);


// let footer = document.createElement("footer");
// document.body.appendChild(footer);



let main = document.querySelector("main");

// let box1 = document.querySelector(".box1")
// let box2 = document.querySelector(".box2")
// let box3 = document.querySelector(".box3")

// box2.style.backgroundColor = "lightseagreen"
// box3.style.backgroundColor = "crimson"


// main.insertBefore(box2, box1);




// Inserting Boxes Dynamically 
let box1 = document.createElement("div");
let box2 = document.createElement("div");
let box3 = document.createElement("div");

box1.classList.add("box")
box2.classList.add("box")
box3.classList.add("box")

box1.innerText = "Box1"
box2.innerText = "Box2"
box3.innerText = "Box3"

box2.style.backgroundColor = "lightseagreen"
box3.style.backgroundColor = "crimson"

main.append(box1, box2, box3);

main.prepend(box2, box1);
main.prepend(box3, box2);

box1.before(box3);
box2.before(box1);


box3.after(box1);
box3.after(box2);


box1.replaceWith(box3);
box2.replaceWith(box3);

main.replaceChild(box1, box3);
main.replaceChildren(box1, box2, box3);



