// TASK 1 

function studentResult(name, department, mark1, mark2, mark3, mark4, mark5) {

    let total = mark1 + mark2 + mark3 + mark4 + mark5;

    let average = total / 5;

    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Total:", total);
    console.log("Average:", average);

    if (average >= 90) {
        console.log("Grade: A");
        console.log("Result: Pass");
    }
    else if (average >= 75) {
        console.log("Grade: B");
        console.log("Result: Pass");
    }
    else if (average >= 60) {
        console.log("Grade: C");
        console.log("Result: Pass");
    }
    else if (average >= 50) {
        console.log("Grade: D");
        console.log("Result: Pass");
    }
    else {
        console.log("Grade: Fail");
        console.log("Result: Fail");
    }
}

studentResult("Krishna", "Computer Science", 85, 90, 78, 88, 92);


// TASK 2 

let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {

    let basicSalary = employee.salary;
    let bonus = 0;

    if (employee.experience >= 5) {
        bonus = basicSalary * 15 / 100;
    }
    else if (employee.experience >= 2) {
        bonus = basicSalary * 10 / 100;
    }

    let finalSalary = basicSalary + bonus;

    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee);


// TASK 3 

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];



let productsAbove2000 = products.filter(function(product) {
    return product.price > 2000;
});

console.log("Products above 2000:");
console.log(productsAbove2000);



let electronics = products.filter(function(product) {
    return product.category == "electronics";
});

console.log("Electronics:");
console.log(electronics);



let cheapProduct = products.find(function(product) {
    return product.price < 1000;
});

console.log("Product below 1000:");
console.log(cheapProduct);



let totalPrice = 0;

for (let i = 0; i < products.length; i++) {
    totalPrice = totalPrice + products[i].price;
}

console.log("Total Price:", totalPrice);



let expensive = products.some(function(product) {
    return product.price > 50000;
});

console.log("Any product above 50000:", expensive);



let above500 = products.every(function(product) {
    return product.price > 500;
});

console.log("Every product above 500:", above500);


// TASK 4 

let employees = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 45000
    },
    {
        id: 103,
        name: "Priya",
        role: "Java Developer",
        salary: 60000
    },
    {
        id: 104,
        name: "Dinesh",
        role: "Tester",
        salary: 35000
    },
    {
        id: 105,
        name: "Karthi",
        role: "Full Stack Developer",
        salary: 70000
    },
    {
        id: 106,
        name: "Meena",
        role: "UI Developer",
        salary: 50000
    }
];

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
}

let employeesAbove40000 = employees.filter(function(employee) {
    return employee.salary > 40000;
});

console.log(employeesAbove40000);


let employee103 = employees.find(function(employee) {
    return employee.id == 103;
});

console.log(employee103);

let salaryTotal = 0;

for (let i = 0; i < employees.length; i++) {
    salaryTotal = salaryTotal + employees[i].salary;
}

console.log("Total Salary:", salaryTotal);

let highestSalary = employees[0].salary;

for (let i = 1; i < employees.length; i++) {

    if (employees[i].salary > highestSalary) {
        highestSalary = employees[i].salary;
    }
}

console.log("Highest Salary:", highestSalary);


employees.sort(function(a, b) {
    return b.salary - a.salary;
});

console.log(employees);


let employeeNames = employees.map(function(employee) {
    return employee.name;
});

console.log(employeeNames);


// TASK 5

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {

    let total = 0;

    for (let i = 0; i < cart.length; i++) {

        let itemTotal = cart[i].price * cart[i].quantity;

        console.log(cart[i].name, "Total:", itemTotal);

        total = total + itemTotal;
    }

    console.log("Cart Total:", total);

    let discount = 0;

    if (total > 50000) {
        discount = total * 10 / 100;
    }

    console.log("Discount:", discount);

    let finalAmount = total - discount;

    console.log("Final Amount:", finalAmount);
}

calculateCart(cart);



// TASK 6 
let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];



for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}



let above80 = students.filter(function(student) {
    return student.mark > 80;
});

console.log("Above 80:", above80);



let priya = students.find(function(student) {
    return student.name == "Priya";
});

console.log("Priya:", priya);



let markTotal = 0;

for (let i = 0; i < students.length; i++) {
    markTotal = markTotal + students[i].mark;
}

let averageMark = markTotal / students.length;

console.log("Average Mark:", averageMark);



let failedStudent = students.some(function(student) {
    return student.mark < 50;
});

console.log("Anyone failed:", failedStudent);



let allPassed = students.every(function(student) {
    return student.mark > 40;
});

console.log("Everyone above 40:", allPassed);


students.sort(function(a, b) {
    return b.mark - a.mark;
});

console.log("Sorted Students:", students);


// TASK 7 

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];


let doubleNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log("Double:", doubleNumbers);


let evenNumbers = numbers.filter(function(number) {
    return number % 2 == 0;
});

console.log("Even:", evenNumbers);


let greaterNumbers = numbers.filter(function(number) {
    return number > 15;
});

console.log("Greater than 15:", greaterNumbers);

let firstNumber = numbers.find(function(number) {
    return number > 20;
});

console.log("First greater than 20:", firstNumber);

let numberTotal = 0;

for (let i = 0; i < numbers.length; i++) {
    numberTotal = numberTotal + numbers[i];
}

console.log("Total:", numberTotal);

let greaterThan40 = numbers.some(function(number) {
    return number > 40;
});

console.log("Any greater than 40:", greaterThan40);

let positiveNumbers = numbers.every(function(number) {
    return number > 0;
});

console.log("Every number positive:", positiveNumbers);



numbers.sort(function(a, b) {
    return b - a;
});

console.log("Highest to Lowest:", numbers);



// TASK 8

let sentence = prompt("Enter a sentence:");

console.log("Total Characters:", sentence.length);

console.log("Uppercase:", sentence.toUpperCase());

console.log("Lowercase:", sentence.toLowerCase());

console.log(
    "Contains JavaScript:",
    sentence.includes("JavaScript")
);

console.log("First Character:", sentence[0]);

console.log(
    "Last Character:",
    sentence[sentence.length - 1]
);

let words = sentence.split(" ");

console.log("Number of Words:", words.length);

console.log(
    "Replace JavaScript:",
    sentence.replace("JavaScript", "Python")
);

console.log("Array:", words);


// FINAL MINI PROJECT 

let dashboard = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];

console.log("All Employees:");

for (let i = 0; i < dashboard.length; i++) {
    console.log(dashboard[i]);
}

let searchEmployee = dashboard.find(function(employee) {
    return employee.name == "Priya";
});

console.log("Search:", searchEmployee);


let itEmployees = dashboard.filter(function(employee) {
    return employee.department == "IT";
});

console.log("IT Employees:", itEmployees);


let highSalary = dashboard.filter(function(employee) {
    return employee.salary > 50000;
});

console.log("Above 50000:", highSalary);

let companySalary = 0;

for (let i = 0; i < dashboard.length; i++) {
    companySalary = companySalary + dashboard[i].salary;
}

console.log("Total Salary:", companySalary);



let highestEmployeeSalary = dashboard[0].salary;

for (let i = 1; i < dashboard.length; i++) {

    if (dashboard[i].salary > highestEmployeeSalary) {
        highestEmployeeSalary = dashboard[i].salary;
    }
}

console.log("Highest Salary:", highestEmployeeSalary);



let experiencedEmployees = dashboard.filter(function(employee) {
    return employee.experience > 3;
});

console.log("More than 3 years:", experiencedEmployees);



dashboard.sort(function(a, b) {
    return a.salary - b.salary;
});

console.log("Low to High:", dashboard);


dashboard.sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("High to Low:", dashboard);



let totalEmployees = dashboard.length;

let averageSalary = companySalary / totalEmployees;

console.log("----- Statistics -----");

console.log("Total Employees:", totalEmployees);

console.log("Total Salary: ₹" + companySalary);

console.log("Highest Salary: ₹" + highestEmployeeSalary);

console.log("Average Salary: ₹" + Math.round(averageSalary));