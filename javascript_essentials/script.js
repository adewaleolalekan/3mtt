// Lesson 1: Variables, Data Types, and Operators
const lesson1Btn = document.getElementById("lesson1Btn");
lesson1Btn.addEventListener("click", () => {
    let name = "JavaScript";
    let number = 42;
    let isFun = true;
    document.getElementById("lesson1Output").innerText = `String: ${name}, Number: ${number}, Boolean: ${isFun}`;
});

// Lesson 2: Functions, Loops, and Conditional Statements
const lesson2Btn = document.getElementById("lesson2Btn");
lesson2Btn.addEventListener("click", () => {
    function addNumbers(a, b) {
        return a + b;
    }
    let sum = addNumbers(5, 10);
    let output = "";
    for (let i = 1; i <= 5; i++) {
        output += `Loop ${i} - Sum: ${sum}\n`;
    }
    document.getElementById("lesson2Output").innerText = output;
});

// Lesson 3: Arrays and Objects
const lesson3Btn = document.getElementById("lesson3Btn");
lesson3Btn.addEventListener("click", () => {
    let fruits = ["Apple", "Banana", "Cherry"];
    let person = { name: "John", age: 30 };
    document.getElementById("lesson3Output").innerText = `Fruits: ${fruits.join(", ")}, Name: ${person.name}, Age: ${person.age}`;
});

// Lesson 4: ES6+ Features
const lesson4Btn = document.getElementById("lesson4Btn");
lesson4Btn.addEventListener("click", () => {
    const arrowFunction = (name) => `Hello, ${name}!`;
    let message = arrowFunction("ES6");
    document.getElementById("lesson4Output").innerText = message;
});

// Lesson 5: DOM Manipulation Basics
const lesson5Btn = document.getElementById("lesson5Btn");
lesson5Btn.addEventListener("click", () => {
    document.body.style.backgroundColor = "#e0f7fa";
});

// Lesson 6: Event Handling
const lesson6Btn = document.getElementById("lesson6Btn");
lesson6Btn.addEventListener("click", () => {
    document.getElementById("lesson6Output").innerText = "Button Clicked! Event Handling Works!";
});
