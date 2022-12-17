// this is comment

// sentence = "how are you today?"

//operators
// buah = 20
// persen = 0.2
// fee = buah * persen

// console.log(fee);

// hargaBuah = Number(prompt("berapa harga buahnya ?"));
// fee = Number(prompt("berapa persen feenya ? %")) / 100;
// fee = hargaBuah * fee;
// total = hargaBuah + fee;

// console.log(" Total tip = ", fee);
// console.log("Harga = ", total);

//user input -> prompt

/* data type (number, string) 
interge -> 1, 20, 4.5
string -> 'ini string', "ini juga string"
array -> []
object -> {}
boolean -> false, true
*/

/* Math Operations
multiply *
divide /
exponents ** 2 ** 5 = 2x2x2x2
modulo/remainder %
add +
substract -
*/

/* Math Methods
math floor -> 100.25 = 100. dibulatkan kebawah
math ceil -> 100.25 = 101. dibulatkan keatas
random -> give you random number
*/

//Baby weather app (conditional)
// if ran -> 'Grab your umbrella'
// else -> 'wear your sunglasses'

// let weather = prompt('How is the weather ?')

// if (weather == 'rain'){
//     console.log('Grab your umbrella')
// } else {
//     console.log('Wear your Sunglasses')
// }

//conditional operators
// ==, ===, >, <, <=, >=, !=, !==

//functions
// this is a function calles 'sayMyName and it has 0 arguments
// dose: it logs out your name to the console

// function sayMyName(name){
//     console.log(name);
// }

// sayMyName('ibnu')

// this is a function called "greeting"
// it has 1 argumetn called 'name
// does: it logs out your nam to the concole

function greeting(name){
    // greet = 'hi ' + name + ', Nice to meet you!'
    //template literals ``
    greet = `hi ${name}, Nice to meet you`
    console.log(greet)
}

greeting('rooney')

function sum(a, b){
    return a * b
}

function calculateFoodTotal(food, tip){
    const tipPercentage = tip / 100
    const tipAmount = food * tipPercentage
    const total = sum(food, tipAmount)
    
    return total
}

console.log(calculateFoodTotal(100,20))

//ES6 
// arrow functions =>
// arrow function with expilicit return
const sumArrow = (a,b) => {
    return a +b
}

// arrow function with implicit return
// IMPORTANT : for implicit return, remove curly braces
const sumArrow2 = (a,b) => a+b

console.log(sumArrow2(50, 10))