// TASK 1

function a() {
    for (let b = 1; b <= 10; b++) {
        console.log(b);
    }
}

a();


// TASK 2

function b() {
    for (let c = 10; c >= 1; c--) {
        console.log(c);
    }
}

b();


// TASK 3

function c() {
    for (let d = 1; d <= 20; d++) {
        if (d % 2 == 0) {
            console.log(d);
        }
    }
}

c();


// TASK 4 

function d() {
    for (let e = 1; e <= 20; e++) {
        if (e % 2 != 0) {
            console.log(e);
        }
    }
}

d();


// TASK 5

function e() {
    let f = Number(prompt("Enter a number"));

    for (let g = 1; g <= 10; g++) {
        console.log(f + " x " + g + " = " + f * g);
    }
}

e();


// TASK 6 

function f() {
    let g = 10;

    while (g >= 1) {
        console.log(g);
        g--;
    }
}

f();


// TASK 7

function g() {
    let h = 1;
    let i = 0;

    while (h <= 10) {
        i = i + h;
        h++;
    }

    console.log(i);
}

g();


// TASK 8

function h() {
    let i = 1;

    do {
        console.log(i);
        i++;
    } while (i <= 5);
}

h();


// TASK 9

function i() {
    let j = 10;

    do {
        console.log(j);
        j++;
    } while (j <= 5);
}

i();

// TASK 10 

function j() {
    let k = "javascript";

    for (let l of k) {
        console.log(l);
    }
}

j();


// TASK 11 

function k() {
    let l = ["apple", "orange", "banana", "mango", "grapes"];

    for (let m of l) {
        console.log(m);
    }
}

k();


// TASK 12 

function l() {
    let m = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

    for (let n of m) {
        console.log("Student: " + n);
    }
}

l();


// TASK 13 

function m() {
    let n = {
        name: "Arun",
        age: 25,
        role: "Developer",
        city: "Chennai"
    };

    for (let o in n) {
        console.log(o, n[o]);
    }
}

m();


// TASK 14 

function n() {
    let o = {
        productName: "Laptop",
        price: 50000,
        brand: "Dell",
        category: "Electronics",
        stock: 10
    };

    for (let p in o) {
        console.log(p, o[p]);
    }
}

n();


// TASK 15 

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();


// TASK 16 

function greet(a) {
    console.log("Hello " + a);
}

greet("Naveen");
greet("Arun");
greet("Priya");


// TASK 17 

function student(a, b, c) {
    console.log("Name:", a);
    console.log("Age:", b);
    console.log("Department:", c);
}

student("Arun", 22, "CSE");
student("Priya", 21, "ECE");
student("Kumar", 23, "IT");


// TASK 18 

function add(a, b) {
    return a + b;
}

let a = add(10, 20);
console.log(a);


// TASK 19 

function salary(a) {
    return a;
}

let b = salary(50000);
console.log(b);


// TASK 20 

function bonus(a, b) {
    return a + b;
}

let c = bonus(50000, 5000);
console.log(c);


// TASK 21

function employee(a, b = "Developer") {
    console.log("Name:", a);
    console.log("Role:", b);
}

employee("Arun");
employee("Priya", "Designer");


// TASK 22

function square(a) {
    return a * a;
}

console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(6));


// TASK 23 

let calculate = function(a, b) {
    return a + b;
};

console.log(calculate(10, 20));


// TASK 24

let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(10, 5));


// TASK 25

function test() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);

}

test();


// TASK 26 

console.log(d);

var d = 10;



// TASK 27

 console.log(e);
 let e = 20;

// TASK 28

 console.log(f);
 const f = 30;


// TASK 29 

(function() {
    console.log("Welcome to JavaScript");
})();


(function(a, b) {
    console.log("Product:", a);
    console.log("Discount:", b);
})("Laptop", "20%");


// TASK 30

function welcome() {
    console.log("Welcome");
}

function execute(a) {
    a();
}

execute(welcome);


// TASK 31

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let result = cashback();

for (let a of result) {
    console.log(a);
}


// TASK 32 

let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Kumar",
        age: 26,
        department: "IT",
        role: "Tester",
        salary: 45000
    }
];


// 1.
console.log("EMPLOYEE DETAILS");

for (let a of employees) {
    console.log(a);
}


// 2
console.log("EMPLOYEE KEYS AND VALUES");

for (let a of employees) {
    for (let b in a) {
        console.log(b, a[b]);
    }
}


// 3

function display(a) {
    console.log("Name:", a.name);
    console.log("Age:", a.age);
    console.log("Department:", a.department);
    console.log("Role:", a.role);
    console.log("Salary:", a.salary);
}


// 4

console.log("DISPLAY EMPLOYEES");

for (let a of employees) {
    display(a);
}


// 5

function getSalary(a) {
    return a.salary;
}

let a = getSalary(employees[0]);

console.log("Salary:", a);


// 6

console.log("SALARY CHECK");

for (let a of employees) {
    if (a.salary >= 40000) {
        console.log(a.name + " has salary 40000 or above");
    } else {
        console.log(a.name + " has salary below 40000");
    }
}


// 7

let add = (a, b) => {
    return a + b;
};

console.log("Calculation:", add(10, 20));


// 8

function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let b = benefits();

console.log("EMPLOYEE BENEFITS");

for (let a of b) {
    console.log(a);
}