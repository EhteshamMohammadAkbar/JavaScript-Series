// Day 01 Challenge of JavaScripted

const fullName = "Ehtesham";
const learnCity = "Bladia Town Karachi #5";
let myAge = 18;
var myLanguage = "javaScript";

console.table([fullName, learnCity, myAge, myLanguage]);


// Day 02 Challenge of JavaScripted

let stringChangeToNumber = "Ehtesham";
let myFullName = Number(stringChangeToNumber);
console.log(myFullName);
console.log(typeof myFullName);

let numberChangeToBoolean = 1;
let myNumber = Boolean(numberChangeToBoolean);
console.log(myNumber);
console.log(typeof myNumber);


// Day 03 Challenge of JavaScripted

const firstNumber = 3;
const secondNumber = 6;

let add = firstNumber + secondNumber;
let sub = firstNumber - secondNumber;
let div = firstNumber / secondNumber;
let mul = firstNumber * secondNumber;
let per = firstNumber % secondNumber;

console.log(`first number ${add} second number ${sub} third number ${div} forth number ${mul} fiveth number ${per}`);


// Day 04 Challenge of JavaScripted

let num = 18;
let changeToString = String(num);
let changeToboolean = Boolean(num);
let changeToBigTnt = BigInt(num);
let changeToSymbol = Symbol(num);

console.table([num, changeToString, changeToboolean, changeToBigTnt, changeToSymbol])
console.table(typeof [num, changeToString, changeToboolean, changeToBigTnt, changeToSymbol])


// Day 05 Challenge of JavaScripted

let myName = "Ehtesham";
let myAge = 18;
let myCity = "Karachi";

console.log(`My Name Is ${myName} And I'am ${myAge} Years Old And I Live In ${myCity}`);


// Day 06 Challenge of JavaScripted

const score = 60;

if (score >= 90) {
    console.log("Grade: A - Excellent Work");

} else if (score >= 60) {
    console.log("Grade: B - Good Job");

} else if (score >= 40) {
    console.log("Grade: C - Better Performance");

} else {
    console.log("Failed: - Better Luck Next Time");
}


// Day 07 Challenge of JavaScripted

for (let number = 1; number <= 10; number++) {
    const type = number % 2 === 0 ? "even" : "odd";
    console.log(`${number} is ${type}`);
}


// Day 08 Challenge of JavaScripted

for (let row = 1; row <= 6; row++) {
    for (let column = 1; column <= 6; column++) {
        console.log(`${row} x ${column} = ${row * column}`);
    }
}


// Day 09 Challenge of JavaScripted

function greet(name, city = "") {
    if (city) {
        return `Hello, ${name} from ${city}!`;
    }

    return `Hello, ${name}!`;
}

console.log(greet("Ehtesham"));
console.log(greet("Sheikh", "Karachi"));


// Day 10 Challenge of JavaScripted

const addNumbers = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};

console.log(`Sum: ${addNumbers(20, 65)}`);


// Successfully completed JavaScript challenge series (10/10)









