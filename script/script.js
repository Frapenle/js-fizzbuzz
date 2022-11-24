
const containerElement = document.querySelector("section");

// add for  loop to count from 1 to 100
for (let i = 1; i <= 100; i++) {
    // let fiz = document.querySelector("p.fizz");
    
    // if i is divisible by 3 or 5 console.log "FizzBuzz"
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        containerElement.innerHTML += `<div class="fizzbuzz">${i} <p class="fizz">Fizz</p><p class="buzz">Buzz</p></div>`;
    } 
    // if i is divisible by 5 console.log "Buzz"
    else if ( i % 5 === 0) {
        console.log("Buzz");
        containerElement.innerHTML += `<div class="buzz">${i} <p class="buzz">Buzz</p></div>`;
    } 
    // if i is divisible by 3 console.log "Fizz"
    else if (i % 3 === 0) {
        console.log("Fizz");
        containerElement.innerHTML += `<div class="fizz">${i} <p class="fizz">Fizz</p></div>`;
    } 
    // in tutti gli altri casi console.log i
    else {
        console.log(i);
        containerElement.innerHTML += `<div class="basic">${i}</div>`;
    }
}