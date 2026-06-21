// let prompt = require("prompt-sync")();

// 1.
// const checkOddOrEven = () => { 
//     let num = Number(prompt("Enter a number: "));
//     console.log((num % 2 === 0) ? "Even" : "Odd");
// }
// checkOddOrEven();



// 2.
// let greet = () => {
//     let pName = prompt("Enter your name : ");
//     let pAge = prompt("Enter your age : ");

//     console.log("Hello Everyone My name is", pName, "and i am", pAge, "years old");
// }
// greet();






// 3. 
// let calculateArea = () => {
//     let width = Number(prompt("Enter width of rectangle: "));
//     let height = Number(prompt("Enter height of rectangle: "));
//     let area = (width * height);

//     console.log(area);
// }
// calculateArea();






// 4. 
// let outer = () => { 
//     let count = 0;

//     return function () { 
//         return count += 1;
//     }
// }

// let count = outer();
// let result = count();
// result = count();
// result = count();

// console.log(result);






// 5. 
// let findLargest = (arrOfNumbers) => { 
//     let max = arrOfNumbers[0];

//     for (let i = 1; i <= arrOfNumbers.length; i++) { 
//         let temp = arrOfNumbers[i];

//         if (temp > max) { 
//             max = temp;
//         }
//     }

//     console.log(max);
// }
// findLargest([9, 5, 6, 3, 4, 8, 1, 2]);







// 6. 
// let products = [
//     {
//         name: "Mouse",
//         price: 500,
//         category: "Electronics"
//     },
//     {
//         name: "Milk",
//         price: 100,
//         category: "Food"
//     },
//     {
//         name: "Book",
//         price: 250,
//         category: "Education"
//     }
// ]

// let productNames = products.map((product) => product.name)
// console.log(productNames);

// let electronics = products.filter((product) => product.category === "Electronics");
// console.log(electronics);

// let totalOfProducts = products.reduce((acc, product) => acc + product.price, 0);
// console.log(totalOfProducts)






// 7.
// let search = () => { 
//     console.log("Searched....");
// }

// let debounce = (fn, delay) => { 
//     let timer;

//     return function (){ 
//         clearTimeout(timer);

//         timer = setTimeout(() => { 
//             fn();
//         }, delay)
//     }
// }

// let debounceSearch = debounce(search, 1000);
// debounceSearch()
// debounceSearch()
// debounceSearch()
// debounceSearch()









// 8. 
// let f1 = () => { 
//     return new Promise((resolve, reject) => { 
//             resolve();
//             setTimeout(() => {
//                 console.log("F1 Executed....")
//             }, 1000)
//     })
// }

// let f2 = () => { 
//     return new Promise((resolve, reject) => { 
//             resolve();
//             setTimeout(() => {
//                 console.log("F2 Executed....")
//             }, 2000)
//     })
// }

// let f3 = () => { 
//     return new Promise((resolve, reject) => { 
//             resolve();
//             setTimeout(() => {
//                 console.log("F3 Executed....")
//             }, 3000)
//     })
// }


// let finalFn = async () => { 
//     await f1();
//     await f2();
//     await f3();
// }

// finalFn();







// 9. 
// let getData = async () => { 
//     try {
//         let response = await fetch('https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10');
//         let data = await response.json();
//         let result = data.data.data;

//         let users = result.map((user) => ({ 
//                 id: user.id,
//                 name: user.name.first + " " + user.name.last,
//         }))
//         return users;

//     } catch (error) {
//         console.log(error);
//         return []
//     }
// }

// let showData = async () => { 
//     let users = await getData();
//     console.log(users); 
// }
// showData();









// 10. 
// let eventEmitter = {
//     events: {},

//     on: (eventName, cb) => { 
//         if (eventName in eventEmitter.events) {
//             eventEmitter.events[eventName].push(cb);
//         }
//         else { 
//             eventEmitter.events[eventName] = [cb];
//         }
//     },
//     emit: (eventName) => { 
//         eventEmitter.events[eventName].forEach((fn) => { 
//             fn();
//         } )
//     },
//     off: (eventName, cb) => { 
//         eventEmitter.events[eventName].splice(eventEmitter.events[eventName].findIndex(elem => elem === cb), 1);
//     }
// }

// function fn1() { 
//     console.log("Welcome i am function1 from login Event");
// }
// function fn2() { 
//     console.log("Welcome i am function2 from Login Event");
// }
// function fn3() { 
//     console.log("Welcome i am function3 from logout event");
// }
// function fn4() { 
//     console.log("Welcome i am function4 from message event ");
// }

// eventEmitter.on("login", fn1);
// eventEmitter.on("login", fn2);
// eventEmitter.on("logout", fn3);
// eventEmitter.on("message", fn4);

// eventEmitter.off("login", fn2);

// eventEmitter.emit("login")
// eventEmitter.emit("logout")
// eventEmitter.emit("message")

// eventEmitter.off("login", fn2);

// console.log(eventEmitter);









// 11.
let memoize = (fn) => { 
    let cache = {}
    
    return function newFn(n) {
        if (String(n) in cache) {
            return cache[String(n)];
        }
        else {
            let result = fn(n)
            cache[String(n)] = result;
            return result;
        }
    }

}

let fn = (n) => { 
    console.log("Calculating.....")
    return n * n;
}

let response = memoize(fn);

let result = response(5)
response(5)
response(5)
response(5)
response(5)
console.log(result);

