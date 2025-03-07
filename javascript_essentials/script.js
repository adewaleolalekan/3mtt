document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");

    document.getElementById("runVariables").addEventListener("click", () => {
        let x = 10;
        const y = 20;
        var z = x + y;
        output.innerText = `Variable Example: ${z}`;
    });

    document.getElementById("runDataTypes").addEventListener("click", () => {
        let num = 25;
        let str = "Hello";
        let bool = true;
        output.innerText = `Data Types: Number(${num}), String(${str}), Boolean(${bool})`;
    });

    document.getElementById("runOperators").addEventListener("click", () => {
        let a = 5, b = 3;
        let sum = a + b;
        let isGreater = a > b;
        output.innerText = `Sum: ${sum}, Comparison: ${isGreater}`;
    });

    document.getElementById("runFunctions").addEventListener("click", () => {
        function greet(name) {
            return `Hello, ${name}!`;
        }
        output.innerText = greet("Student");
    });

    document.getElementById("runLoops").addEventListener("click", () => {
        let numbers = "";
        for (let i = 1; i <= 5; i++) {
            numbers += i + " ";
        }
        output.innerText = `Loop Output: ${numbers}`;
    });

    document.getElementById("runConditionals").addEventListener("click", () => {
        let num = 10;
        let message = num > 5 ? "Number is greater than 5" : "Number is 5 or less";
        output.innerText = message;
    });

    document.getElementById("runArrays").addEventListener("click", () => {
        let fruits = ["Apple", "Banana", "Cherry"];
        output.innerText = `Array Elements: ${fruits.join(", ")}`;
    });

    document.getElementById("runObjects").addEventListener("click", () => {
        let person = { name: "John", age: 25 };
        output.innerText = `Person: ${person.name}, Age: ${person.age}`;
    });

    document.getElementById("runArrowFunctions").addEventListener("click", () => {
        const add = (a, b) => a + b;
        output.innerText = `Arrow Function Result: ${add(5, 7)}`;
    });

    document.getElementById("runDestructuring").addEventListener("click", () => {
        let [a, b] = [10, 20];
        let { name, age } = { name: "Alice", age: 30 };
        output.innerText = `Array: ${a}, ${b} | Object: ${name}, ${age}`;
    });

    document.getElementById("runTemplateLiterals").addEventListener("click", () => {
        let name = "Bob";
        let message = `Hello, ${name}!`;
        output.innerText = message;
    });

    document.getElementById("runDomManipulation").addEventListener("click", () => {
        let newElement = document.createElement("p");
        newElement.innerText = "This is a dynamically added paragraph!";
        document.body.appendChild(newElement);
    });

    document.getElementById("runEventHandling").addEventListener("click", () => {
        alert("Button Clicked! Event Handling Works!");
    });
});
