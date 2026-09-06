// TASK 1

function a() {
    var b = "krish";
    let c = 22;
    const d = "salem";
    const e = "SKCET";

    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);

    b = "Krishna";
    c = 23;

    console.log(b);
    console.log(c);


    var b = "Arun";
    console.log(b);

   
}

a();


// TASK 2 

function b() {
    console.log("Hello");

    alert("Hello");

    let c = confirm("Are you a student?");
    console.log(c);

    let d = prompt("Enter your name");
    console.log(d);

    document.writeln("Hello JavaScript");
}

b();


// TASK 3

function c() {
    let d = prompt("Enter your name");
    let e = prompt("Enter your age");
    let f = prompt("Enter your city");
    let g = prompt("Enter your qualification");

    console.log("Name:", d);
    console.log("Age:", e);
    console.log("City:", f);
    console.log("Qualification:", g);
}

c();


// TASK 4

function d() {
    let e = "JavaScript";
    let f = 100;
    let g = 99.5;
    let h = true;
    let i = false;
    let j;
    let k = null;

    console.log(e, typeof e);
    console.log(f, typeof f);
    console.log(g, typeof g);
    console.log(h, typeof h);
    console.log(i, typeof i);
    console.log(j, typeof j);
    console.log(k, typeof k);
}

d();


// TASK 5

function e() {
    let f = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

    console.log(f[0]);
    console.log(f[1]);
    console.log(f[f.length - 1]);
    console.log(f.length);
}

e();


// TASK 6 

function f() {
    let g = {
        name: "Naveen",
        age: 22,
        role: "Developer",
        skills: ["Java", "HTML", "CSS", "JavaScript"],
        isWorking: true,
        qualification: ["B.E", "M.E"]
    };

    console.log(g.name);
    console.log(g.age);
    console.log(g.role);
    console.log(g.skills[0]);
    console.log(g.qualification[g.qualification.length - 1]);
    console.log(g.isWorking);
}

f();


// TASK 7 

function g() {
    let h = 20;
    let i = 5;

    console.log("Addition =", h + i);
    console.log("Subtraction =", h - i);
    console.log("Multiplication =", h * i);
    console.log("Division =", h / i);
    console.log("Modulus =", h % i);
    console.log("Exponentiation =", h ** i);
}

g();


// TASK 8 

function h() {
    let i = 999;
    let j = 1499;
    let k = 1999;
    let l = 799;

    let m = i + j + k + l;

    console.log("Total Price =", m);
}

h();


// TASK 9 

function i() {

    
    let j = 10;
    let k = j++;

    console.log(j);
    console.log(k);


    let l = 10;
    let m = ++l;

    console.log(l);
    console.log(m);


    let n = 10;
    let o = n--;

    console.log(n);
    console.log(o);


    let p = 10;
    let q = --p;

    console.log(p);
    console.log(q);
}

i();


// TASK 10 

function j() {
    let k = 10;

    k += 5;
    console.log(k);

    k -= 3;
    console.log(k);

    k *= 2;
    console.log(k);

    k /= 4;
    console.log(k);

    k %= 3;
    console.log(k);

    k **= 2;
    console.log(k);
}

j();


// TASK 11 

function k() {
    console.log(10 > 5);
    console.log(10 < 5);
    console.log(10 >= 10);
    console.log(10 <= 9);

    console.log(5 == "5");
    console.log(5 === "5");

    console.log(10 != "10");
    console.log(10 !== "10");
}

k();


// TASK 12

function l() {
    console.log(true && true);
    console.log(true && false);
    console.log(false && true);
    console.log(false && false);
}

l();


// TASK 13 

function m() {
    console.log(true || true);
    console.log(true || false);
    console.log(false || true);
    console.log(false || false);
}

m();


// TASK 14 

function n() {
    console.log(!true);
    console.log(!false);
    console.log(!(5 > 10));
    console.log(!(10 > 5));
}

n();


// TASK 15 

function o() {
    console.log(5 == "5" && !(5 === 5) || 6 > 7);

    console.log(10 > 5 && 8 < 12 || 4 === "4");

    console.log(7 === 7 && 10 != "10" || 5 >= 5);

    console.log(15 < 10 || 20 > 15 && 5 == "5");
}

o();


// TASK 16 

function p() {
    let q = 20;

    let r = q >= 18 ? "Eligible to vote" : "Not eligible";

    console.log(r);
}

p();


// TASK 17 

function q() {
    let r = true;

    let s = r ? "Login successful" : "Wrong password";

    console.log(s);
}

q();


// TASK 18 

function r() {
    let s = "Naveen";
    let t = 25;
    let u = "Trichy";

    console.log("My name is " + s + ". I am " + t + " years old. I live in " + u + ".");

    console.log(`My name is ${s}. I am ${t} years old. I live in ${u}.`);
}

r();


// TASK 19

function s() {
    let t = String(100);
    let u = String(true);
    let v = String(undefined);
    let w = String(null);
    let x = String([1, 2]);

    console.log(t, typeof t);
    console.log(u, typeof u);
    console.log(v, typeof v);
    console.log(w, typeof w);
    console.log(x, typeof x);
}

s();


// TASK 20 

function t() {
    console.log(Number());
    console.log(Number(""));
    console.log(Number("123"));
    console.log(Number("a1"));
    console.log(Number(true));
    console.log(Number(false));
    console.log(Number(undefined));
    console.log(Number(null));
}

t();


// TASK 21 

function u() {
    console.log(Boolean());
    console.log(Boolean(""));
    console.log(Boolean("hello"));
    console.log(Boolean(123));
    console.log(Boolean(true));
    console.log(Boolean(false));
    console.log(Boolean(undefined));
    console.log(Boolean(null));
    console.log(Boolean([]));
    console.log(Boolean({}));
}

u();


// TASK 22

function v() {
    let w = Number(prompt("Enter your age"));

    if (w >= 18) {
        console.log("You can vote");
    } else {
        console.log("You can't vote");
    }
}

v();


// TASK 23 

function w() {
    let x = Number(prompt("Enter a number"));

    if (x > 0) {
        console.log("Positive");
    } else if (x < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}

w();


// TASK 24

function x() {
    let y = Number(prompt("Enter marks"));

    if (y >= 90 && y <= 100) {
        console.log("A Grade");
    } else if (y >= 80) {
        console.log("B Grade");
    } else if (y >= 70) {
        console.log("C Grade");
    } else if (y >= 60) {
        console.log("D Grade");
    } else {
        console.log("Fail");
    }
}

x();


// TASK 25 

function y() {
    let z = Number(prompt("Enter age"));
    let aa = Number(prompt("Enter height"));
    let ab = Number(prompt("Enter weight"));

    if (z >= 18) {
        if (aa >= 160) {
            if (ab >= 60) {
                console.log("Congratulations! You are selected");
            } else {
                console.log("Weight is not enough");
            }
        } else {
            console.log("Height is not enough");
        }
    } else {
        console.log("Age is not enough");
    }
}

y();


// TASK 26 

function z() {
    let aa = prompt("Enter traffic light color");

    switch (aa) {
        case "red":
            console.log("Stop");
            break;

        case "yellow":
            console.log("Ready");
            break;

        case "green":
            console.log("Go");
            break;

        default:
            console.log("Invalid color");
    }
}

z();


// TASK 27 

function aa() {
    let ab = 1;

    switch (ab) {
        case 1:
            console.log("Monday");
            break;

        case 2:
            console.log("Tuesday");
            break;

        case 3:
            console.log("Wednesday");
            break;

        case 4:
            console.log("Thursday");
            break;

        case 5:
            console.log("Friday");
            break;

        case 6:
            console.log("Saturday");
            break;

        case 7:
            console.log("Sunday");
            break;

        default:
            console.log("Invalid day");
    }
}

aa();


// TASK 28 

function ab() {
    let ac = prompt("Enter your name");
    let ad = Number(prompt("Enter your age"));
    let ae = prompt("Enter your city");

    let af = Number(prompt("Enter Tamil marks"));
    let ag = Number(prompt("Enter English marks"));
    let ah = Number(prompt("Enter Maths marks"));

    let ai = af + ag + ah;
    let aj = ai / 3;

    let ak;

    if (aj >= 90) {
        ak = "A";
    } else if (aj >= 80) {
        ak = "B";
    } else if (aj >= 70) {
        ak = "C";
    } else if (aj >= 60) {
        ak = "D";
    } else {
        ak = "Fail";
    }

    let al = ad >= 18 ? "Eligible" : "Not Eligible";

    console.log(`
Name: ${ac}
Age: ${ad}
City: ${ae}
Total: ${ai}
Average: ${aj}
Grade: ${ak}
Voting: ${al}
`);
}

ab();