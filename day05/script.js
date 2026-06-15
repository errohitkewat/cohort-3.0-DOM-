// Event Delegation //

// let main = document.querySelector("main");

// main.addEventListener("click", (e) => { 
//     console.log(e.target);
// })




let main = document.querySelector("main")
let startbtn = document.querySelector(".start")
let timer = document.querySelector("#timer")
let scoree = document.querySelector("#score")
let gameOver = document.querySelector(".game-over")
let reStartBtn = document.querySelector(".restart")


let angryBird = document.createElement("div")
angryBird.classList.add("angry-bird");
angryBird.innerHTML = `<img src="./angrybird.png" alt="Angry Bird Image"></img>`;
    


let interval;
let time = 0;
let score = 0;



let randomBird = () => {
    main.append(angryBird);

    let mainH = main.clientHeight - angryBird.offsetHeight;
    let mainW = main.clientWidth - angryBird.offsetWidth;

    let rY = Math.random() * mainH;
    let rX = Math.random() * mainW;

    angryBird.style.top = `${rY}px`;
    angryBird.style.left = `${rX}px`;
}


startbtn.addEventListener("click", (e) => { 
    clearInterval(interval);
    interval = setInterval(() => {
        randomBird();
        time += 1;
        timer.textContent = time;
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            gameOver.style.display = "flex";
        }, 1000);
    },5000)

})


angryBird.addEventListener("click", () => { 
    score += 1;
    scoree.textContent = score;
})

