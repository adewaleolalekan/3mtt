window.onload = function () {
    document.getElementById("runVariables").addEventListener("click", () => {
        let x = 10, y = 20, z = x + y;
        document.getElementById("output").innerText = `Variable Example: ${z}`;
    });

    document.getElementById("runDataTypes").addEventListener("click", () => {
        let num = 25, str = "Hello", bool = true;
        document.getElementById("output").innerText = `Number: ${num}, String: ${str}, Boolean: ${bool}`;
    });

    document.getElementById("runOperators").addEventListener("click", () => {
        let a = 5, b = 3;
        document.getElementById("output").innerText = `Sum: ${a + b}, Greater than: ${a > b}`;
    });

    document.getElementById("runFunctions").addEventListener("click", () => {
        function greet(name) { return `Hello, ${name}!`; }
        document.getElementById("output").innerText = greet("Student");
    });

    document.getElementById("runLoops").addEventListener("click", () => {
        let numbers = "";
        for (let i = 1; i <= 5; i++) numbers += i + " ";
        document.getElementById("output").innerText = `Loop Example: ${numbers}`;
    });

    document.getElementById("runConditionals").addEventListener("click", () => {
        let num = 10;
        document.getElementById("output").innerText = num > 5 ? "Number is greater than 5" : "Number is 5 or less";
    });

    document.getElementById("runArrays").addEventListener("click", () => {
        let fruits = ["Apple", "Banana", "Cherry"];
        document.getElementById("output").innerText = "Array Elements: " + fruits.join(", ");
    });

    document.getElementById("runObjects").addEventListener("click", () => {
        let person = { name: "John", age: 25 };
        document.getElementById("output").innerText = `Person: ${person.name}, Age: ${person.age}`;
    });

    document.getElementById("runArrowFunctions").addEventListener("click", () => {
        const add = (a, b) => a + b;
        document.getElementById("output").innerText = `Arrow Function Result: ${add(5, 7)}`;
    });

    document.getElementById("runDestructuring").addEventListener("click", () => {
        let [a, b] = [10, 20];
        let { name, age } = { name: "Alice", age: 30 };
        document.getElementById("output").innerText = `Array: ${a}, ${b} | Object: ${name}, ${age}`;
    });

    document.getElementById("runTemplateLiterals").addEventListener("click", () => {
        let name = "Bob";
        document.getElementById("output").innerText = `Hello, ${name}!`;
    });

    document.getElementById("runDomManipulation").addEventListener("click", () => {
        let newElement = document.createElement("p");
        newElement.innerText = "This is a dynamically added paragraph!";
        document.body.appendChild(newElement);
    });

    document.getElementById("runEventHandling").addEventListener("click", () => {
        alert("Button Clicked! Event Handling Works!");
    });
};
