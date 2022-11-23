// add for  loop to count from 1 to 100
for (i = 1; i <= 100; i++) {

    // if i is divisible by 3 or 5 console.log "FizzBuzz"
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    // if i is divisible by 5 console.log "Buzz"
    else if ( i % 5 === 0) {
        console.log("Buzz");
    } 
    // if i is divisible by 3 console.log "Fizz"
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    // in tutti gli altri casi console.log i
    else {
        console.log(i);
    }
}