// Q1
var firstValue = 10;
let secondValue = 20;
const thirdValue = 30;
// Q2
var oldVariable = 100;
var oldVariable = 200; 
let newVariable = 100;
const fixedVariable = 100

// Q3\

var numberOne = 5;
let numberTwo = 10;
const numberThree = 15;
numberOne = 20;
numberTwo = 25;
console.log(numberOne, numberTwo, numberThree);

// Q4

let declaredValue;
let initializedValue = 50;
console.log(declaredValue);
console.log(initializedValue);
// Q5

let emptyValue;
console.log(emptyValue);

// Q6

console.log(hoistedValue);
var hoistedValue = 25;
// Q7

let missingValue;
let emptyObjectValue = null;
console.log(missingValue);
console.log(emptyObjectValue);
// Q8: 

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});
// Q9

console.log(5 == "5");
console.log(5 === "5");

// Q10
let preCount = 5;
console.log(++preCount);
let postCount = 5;
console.log(postCount++);
console.log(postCount);
// Q11

let numericAmount = 10;
let textAmount = "5";
console.log(numericAmount + textAmount);
console.log(numericAmount - textAmount);
console.log(numericAmount * textAmount);
console.log(numericAmount / textAmount);
// Q12
console.log(true && true);
console.log(true || false);
console.log(!true);
// Q13

console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));

// Q14

let studentAge = 20;
let ageResult = studentAge >= 18 ? "Adult" : "Minor";
console.log(ageResult);
// Q15

let implicitResult = "10" - 2;
console.log(implicitResult);
let explicitResult = Number("10") + 2;
console.log(explicitResult);
// Q16

console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));
// Q17

let invalidNumber = Number("hello");
console.log(invalidNumber);
// Q18

let temperatureValue = 30;
if (temperatureValue > 25) {
    console.log("Hot");
} else {
    console.log("Cool");
}
let dayNumber = 2;

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Other day");
}
// Q19

let currentAge = 20;

if (currentAge >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
// Q20

let examMark = 75;
if (examMark >= 40) {

    if (examMark >= 60) {
        console.log("Pass with good marks");
    } else {
        console.log("Pass");
    }

} else {
    console.log("Fail");
}
// Q21
let checkedNumber = 17;
let numberResult =
    checkedNumber % 2 === 0 ? "Even" : "Odd";

console.log(numberResult);
// Q22
let whileCounter = 1;
while (whileCounter <= 3) {
    console.log(whileCounter);
    whileCounter++;
}
let doWhileCounter = 1;
do {
    console.log(doWhileCounter);
    doWhileCounter++;
} while (doWhileCounter <= 3);
// Q23
for (let loopNumber = 1; loopNumber <= 5; loopNumber++) {
    console.log(loopNumber);
}
// Q24
let fruitList = ["Apple", "Banana", "Mango"];
for (let fruit of fruitList) {
    console.log(fruit);
}

for (let fruitIndex in fruitList) {
    console.log(fruitIndex);
}
// Q25
let totalSum = 0;
for (let sumNumber = 1; sumNumber <= 100; sumNumber++) {
    totalSum = totalSum + sumNumber;
}
console.log(totalSum);
// Q26
let sliceArray = [10, 20, 30, 40, 50];
let slicedValues = sliceArray.slice(1, 4);
console.log(slicedValues);
console.log(sliceArray);
let spliceArray = [10, 20, 30, 40, 50];
let removedValues = spliceArray.splice(1, 2);
console.log(removedValues);
console.log(spliceArray);
// Q27
let numberArray = [1, 2, 3];
numberArray.push(4);
numberArray.pop();
numberArray.unshift(0);
numberArray.shift();
console.log(numberArray);
// Q28
function declaredFunction() {
    return "Function Declaration";
}
let expressedFunction = function () {
    return "Function Expression";
};
console.log(declaredFunction());
console.log(expressedFunction());
// Q29

let addNumbers = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};
console.log(addNumbers(10, 20));

// Q30: 
function welcomeUser() {
    return "Hello";
}
let welcomeMessage = welcomeUser();
console.log(welcomeMessage);
