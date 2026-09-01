// Task 1

var name = "Krishna";
let age = 22;
const college = "SKCET";

console.log(name);
console.log(age);
console.log(college);

name = "KRISH";
console.log(name);

age = 23;
console.log(age);

var name = "KRISHs";
console.log(name);


// Task 2

let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");
let city = prompt("Enter your city:");

console.log("Name:", userName);
console.log("Age:", userAge);
console.log("City:", city);


// Task 3

let student = prompt("Enter your name:");
alert("Welcome " + student + "!");


// Task 4

let year = prompt("Enter your birth year:");
let myAge = 2026 - year;
console.log("Birth Year:", year);
console.log("Age:", myAge);


// Task 5

let text = "Hello";
let number = 100;
let decimal = 25.5;
let yes = true;
let no = false;
let empty;
let nothing = null;

console.log(typeof text);
console.log(typeof number);
console.log(typeof decimal);
console.log(typeof yes);
console.log(typeof no);
console.log(typeof empty);
console.log(typeof nothing);


// Task 6

let person = {
    name: "Krishna",
    age: 22,
    city: "Coimbatore",
    qualification: "B.E",
    isStudent: true
};

console.log("Complete Object:", person);
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Qualification:", person.qualification);
console.log("Is Student:", person.isStudent);


// Task 7

let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];

console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);
console.log("Last Fruit:", fruits[fruits.length - 1]);
console.log("Total Fruits:", fruits.length);


// Task 8

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);


// Task 9

let shirt = 999;
let pant = 1499;
let shoes = 1999;
let total = shirt + pant + shoes;

console.log("Total Price:", total);


// Task 10

let tamil = 80;
let english = 75;
let maths = 90;
let totalMark = tamil + english + maths;

let average = totalMark / 3;
console.log("Total Marks:", totalMark);
console.log("Average Marks:", average);


// Task 11

let aa = 10;
let bb = aa++;

console.log(aa);
console.log(bb);


// Task 12

let c = 10;
let d = ++c;

console.log(c);
console.log(d);


// Task 13

let a1 = 20;
let b1 = a1--;

console.log(a1);
console.log(b1);


// Task 14

let z = 20;
let zz = --z;

console.log(z);
console.log(zz);


// Task 15

let a15 = 5;
let b15 = a15++;
let c15 = ++a15;
let d15 = b15--;

console.log("a:", a15);
console.log("b:", b15);
console.log("c:", c15);
console.log("d:", d15);


// Task 16

let num1 = 10;
num1 += 5;
console.log(num1);

let num2 = 10;
num2 -= 5;
console.log(num2);

let num3 = 10;
num3 *= 5;
console.log(num3);

let num4 = 10;
num4 /= 5;
console.log(num4);

let num5 = 10;
num5 %= 3;
console.log(num5);

let num6 = 10;
num6 **= 2;
console.log("**= :", num6);


// Task 17

let name1 = "Krishna";
let age1 = 22;
let city1 = "Coimbatore";
let college1 = "SKCET";
let subjects = [
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL"
];

let profile = {
    name: name1,
    age: age1,
    city: city1,
    subjects: subjects,
    isStudent: true
};

console.log("Student Name:", profile.name);
console.log("Student Age:", profile.age);
console.log("City:", profile.city);
console.log("First Subject:", profile.subjects[0]);
console.log("Last Subject:", profile.subjects[profile.subjects.length - 1]);
console.log("Total Subjects:", profile.subjects.length);
console.log("Complete Object:", profile);