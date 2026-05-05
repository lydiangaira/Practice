function fizzBuzz(){
    for(let i=1; i<=30; i++){
        const isDivisibleBy3 = i % 3 ===0
        const isDivisibleBy5 = i % 5 ===0
        if (isDivisibleBy3 && isDivisibleBy5){
            console.log("FizzBuzz");
        } else if(isDivisibleBy3){
            console.log("Fizz");
        } else if(isDivisibleBy5){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();