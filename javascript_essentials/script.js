// DOM References (minimizing DOM access as per best practices)
const lessonLinks = document.querySelectorAll('.sidebar a');
const lessonSections = document.querySelectorAll('.lesson');
const runButtons = document.querySelectorAll('.run-code');

// Navigation functionality
lessonLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links and sections
        lessonLinks.forEach(l => l.classList.remove('active'));
        lessonSections.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked link and corresponding section
        this.classList.add('active');
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('active');
    });
});

// Run code examples
runButtons.forEach(button => {
    button.addEventListener('click', function() {
        const exampleId = this.getAttribute('data-example');
        runCodeExample(exampleId);
    });
});

// Function to run code examples
function runCodeExample(exampleId) {
    const outputElement = document.getElementById(`${exampleId}-output`);
    
    // Clear previous output
    outputElement.innerHTML = '';
    
    switch(exampleId) {
        case 'variables':
            let name = "JavaScript Learner";
            const PI = 3.14159;
            var oldWay = "Not recommended anymore";
            
            outputElement.innerHTML = `
                <p>name: ${name}</p>
                <p>PI: ${PI}</p>
                <p>oldWay: ${oldWay}</p>
            `;
            break;
            
        case 'datatypes':
            let stringExample = "This is a text";
            let numberExample = 42;
            let booleanExample = true;
            let nullExample = null;
            let undefinedExample;
            let objectExample = { name: "JavaScript", year: 1995 };
            
            outputElement.innerHTML = `
                <p>stringExample (${typeof stringExample}): ${stringExample}</p>
                <p>numberExample (${typeof numberExample}): ${numberExample}</p>
                <p>booleanExample (${typeof booleanExample}): ${booleanExample}</p>
                <p>nullExample (${typeof nullExample}): ${nullExample}</p>
                <p>undefinedExample (${typeof undefinedExample}): ${undefinedExample}</p>
                <p>objectExample (${typeof objectExample}): ${JSON.stringify(objectExample)}</p>
            `;
            break;
            
        case 'operators':
            let sum = 5 + 10;
            let difference = 20 - 5;
            let product = 4 * 3;
            let quotient = 20 / 4;
            
            let isEqual = 5 === 5;
            let isGreater = 10 > 5;
            
            let andResult = true && false;
            let orResult = true || false;
            
            outputElement.innerHTML = `
                <p>Arithmetic:</p>
                <p>5 + 10 = ${sum}</p>
                <p>20 - 5 = ${difference}</p>
                <p>4 * 3 = ${product}</p>
                <p>20 / 4 = ${quotient}</p>
                <p>Comparison:</p>
                <p>5 === 5: ${isEqual}</p>
                <p>10 > 5: ${isGreater}</p>
                <p>Logical:</p>
                <p>true && false: ${andResult}</p>
                <p>true || false: ${orResult}</p>
            `;
            break;
            
        case 'functions':
            function greet(name) {
                return `Hello, ${name}!`;
            }
            
            const square = function(num) {
                return num * num;
            };
            
            outputElement.innerHTML = `
                <p>greet("John"): ${greet("John")}</p>
                <p>square(5): ${square(5)}</p>
            `;
            break;
            
        case 'loops':
            let forResult = "";
            for (let i = 0; i < 5; i++) {
                forResult += i + " ";
            }
            
            let j = 0;
            let whileResult = "";
            while (j < 5) {
                whileResult += j + " ";
                j++;
            }
            
            const fruits = ["Apple", "Banana", "Cherry"];
            let forOfResult = "";
            for (const fruit of fruits) {
                forOfResult += fruit + " ";
            }
            
            outputElement.innerHTML = `
                <p>For loop result: ${forResult}</p>
                <p>While loop result: ${whileResult}</p>
                <p>For...of loop result: ${forOfResult}</p>
            `;
            break;
            
        case 'conditionals':
            let age = 20;
            let ifResult = "";
            if (age >= 18) {
                ifResult = "You are an adult";
            } else {
                ifResult = "You are a minor";
            }
            
            let day = 3;
            let dayName;
            switch (day) {
                case 1:
                    dayName = "Monday";
                    break;
                case 2:
                    dayName = "Tuesday";
                    break;
                case 3:
                    dayName = "Wednesday";
                    break;
                default:
                    dayName = "Unknown day";
            }
            
            outputElement.innerHTML = `
                <p>If statement result (age = ${age}): ${ifResult}</p>
                <p>Switch statement result (day = ${day}): ${dayName}</p>
            `;
            break;
            
        case 'arrays':
            const colors = ["Red", "Green", "Blue"];
            const secondColor = colors[1];
            
            colors.push("Yellow");
            const removed = colors.pop();
            const joined = colors.join(", ");
            
            outputElement.innerHTML = `
                <p>Original array: ["Red", "Green", "Blue"]</p>
                <p>Second color: ${secondColor}</p>
                <p>After push: ${JSON.stringify(colors)}, "Yellow"</p>
                <p>Popped value: ${removed}</p>
                <p>Current array: ${JSON.stringify(colors)}</p>
                <p>Joined array: ${joined}</p>
            `;
            break;
            
        case 'objects':
            const person = {
                name: "John Doe",
                age: 30,
                profession: "Developer",
                greet: function() {
                    return `Hello, my name is ${this.name}`;
                }
            };
            
            const personName = person.name;
            const personAge = person["age"];
            const greeting = person.greet();
            
            outputElement.innerHTML = `
                <p>Person object: ${JSON.stringify({ name: person.name, age: person.age, profession: person.profession })}</p>
                <p>person.name: ${personName}</p>
                <p>person["age"]: ${personAge}</p>
                <p>person.greet(): ${greeting}</p>
            `;
            break;
            
        case 'arrow-functions':
            function add(a, b) {
                return a + b;
            }
            
            const addArrow = (a, b) => a + b;
            
            const greetArrow = name => {
                const greeting = `Hello, ${name}!`;
                return greeting;
            };
            
            outputElement.innerHTML = `
                <p>Regular function add(3, 4): ${add(3, 4)}</p>
                <p>Arrow function addArrow(3, 4): ${addArrow(3, 4)}</p>
                <p>Arrow function with body greetArrow("Alice"): ${greetArrow("Alice")}</p>
            `;
            break;
            
        case 'destructuring':
            const coordinates = [10, 20, 30];
            const [x, y, z] = coordinates;
            
            const user = {
                firstName: "Jane",
                lastName: "Doe",
                email: "jane@example.com"
            };
            const { firstName, email } = user;
            
            outputElement.innerHTML = `
                <p>Original array: ${JSON.stringify(coordinates)}</p>
                <p>Destructured: x = ${x}, y = ${y}, z = ${z}</p>
                <p>Original object: ${JSON.stringify(user)}</p>
                <p>Destructured: firstName = ${firstName}, email = ${email}</p>
            `;
            break;
            
        case 'template-literals':
            const userName = "Jane";
            
            const oldWayString = "Hello, " + userName + "!";
            const newWayString = `Hello, ${userName}!`;
            
            const multiline = `This is a
multiline string
using template literals`;
            
            outputElement.innerHTML = `
                <p>Old way: ${oldWayString}</p>
                <p>Template literal: ${newWayString}</p>
                <p>Multiline string:</p>
                <pre>${multiline}</pre>
            `;
            break;
            
        case 'dom-select':
            const byId = document.getElementById("demo-element");
            const byClass = document.getElementsByClassName("example");
            const byQuery = document.querySelector(".example");
            const byQueryAll = document.querySelectorAll("p.example");
            
            outputElement.innerHTML = `
                <p>getElementById: ${byId ? "Element found with text: " + byId.textContent : "Not found"}</p>
                <p>getElementsByClassName: ${byClass.length} elements found</p>
                <p>querySelector: ${byQuery ? "First element found" : "Not found"}</p>
                <p>querySelectorAll: ${byQueryAll.length} elements found</p>
            `;
            break;
            
        case 'dom-modify':
            document.getElementById("modify-content").textContent = "Modified content";
            document.getElementById("modify-attr").setAttribute("title", "New title");
            
            const styleElement = document.getElementById("modify-style");
            styleElement.style.color = "blue";
            styleElement.style.fontSize = "20px";
            
            outputElement.innerHTML = `
                <p>Content modified</p>
                <p>Attribute "title" changed to "New title"</p>
                <p>Style changed: blue text, 20px font size</p>
            `;
            break;
            
        case 'dom-create':
            const newParagraph = document.createElement("p");
            newParagraph.textContent = "This paragraph was created with JavaScript";
            newParagraph.className = "dynamic";
            
            document.getElementById("element-container").appendChild(newParagraph);
            
            outputElement.innerHTML = `
                <p>New paragraph created and appended to container</p>
            `;
            break;
            
        case 'events-basic':
            document.getElementById("click-button").addEventListener("click", function() {
                document.getElementById("click-output").textContent = "Button was clicked!";
            });
            
            outputElement.innerHTML = `
                <p>Event listener added. Click the button to see the result.</p>
            `;
            break;
            
        case 'event-object':
            document.getElementById("event-demo").addEventListener("click", function(event) {
                const output = document.getElementById("event-output");
                output.textContent = `Clicked at coordinates: (${event.clientX}, ${event.clientY})`;
                output.textContent += `\nTarget element: ${event.target.tagName}`;
            });
            
            outputElement.innerHTML = `
                <p>Event listener added. Click the area to see event details.</p>
            `;
            break;
            
        case 'event-delegation':
            document.getElementById("parent-container").addEventListener("click", function(event) {
                if (event.target.classList.contains("child-element")) {
                    document.getElementById("delegation-output").textContent = 
                        `Clicked on ${event.target.textContent}`;
                }
            });
            
            outputElement.innerHTML = `
                <p>Event delegation set up. Click on any item in the list.</p>
            `;
            break;
            
        case 'best-dom':
            // Reset counter for demonstration
            document.getElementById("counter-value").textContent = "0";
            
            // Bad practice (multiple DOM accesses)
            function updateCounterBad() {
                document.getElementById("counter-value").textContent = 
                    parseInt(document.getElementById("counter-value").textContent) + 1;
            }
            
            // Good practice (store reference)
            function updateCounterGood() {
                const counterElement = document.getElementById("counter-value");
                counterElement.textContent = parseInt(counterElement.textContent) + 1;
            }
            
            document.getElementById("counter-bad").addEventListener("click", updateCounterBad);
            document.getElementById("counter-good").addEventListener("click", updateCounterGood);
            
            outputElement.innerHTML = `
                <p>Event listeners added to both buttons.</p>
                <p>Try clicking each button multiple times and note any performance difference.</p>
            `;
            break;
            
        case 'best-delegation':
            // Event delegation for dynamic content
            document.getElementById("dynamic-list").addEventListener("click", function(event) {
                if (event.target.tagName === "LI") {
                    event.target.classList.toggle("selected");
                }
            });
            
            // Add new items
            document.getElementById("add-item").addEventListener("click", function() {
                const list = document.getElementById("dynamic-list");
                const newItem = document.createElement("li");
                newItem.textContent = `Item ${list.children.length + 1}`;
                list.appendChild(newItem);
            });
            
            outputElement.innerHTML = `
                <p>Event delegation set up.</p>
                <p>Click "Add Item" to add new items, then click on any item to toggle selection.</p>
                <p>New items will also be interactive without adding individual event listeners.</p>
            `;
            break;
            
        case 'best-inline':
            document.getElementById("clean-button").addEventListener("click", function() {
                alert("Hello from clean, separated JavaScript!");
            });
            
            outputElement.innerHTML = `
                <p>Event listener added to button using best practice.</p>
                <p>Click the button to see the alert.</p>
            `;
            break;
            
        case 'best-classlist':
            // Reset for demonstration
            document.getElementById("class-demo").className = "demo-box";
            
            // Bad practice (manipulating className)
            function toggleClassBad() {
                const element = document.getElementById("class-demo");
                if (element.className.includes("highlight")) {
                    element.className = element.className.replace("highlight", "");
                } else {
                    element.className += " highlight";
                }
            }
            
            // Good practice (using classList)
            function toggleClassGood() {
                document.getElementById("class-demo").classList.toggle("highlight");
            }
            
            document.getElementById("toggle-bad").addEventListener("click", toggleClassBad);
            document.getElementById("toggle-good").addEventListener("click", toggleClassGood);
            
            outputElement.innerHTML = `
                <p>Both methods will toggle the highlight class.</p>
                <p>The classList approach is cleaner and less error-prone.</p>
            `;
            break;
            
        default:
            outputElement.innerHTML = `<p>No example code for ${exampleId}</p>`;
    }
}

// Initialize the page by showing the first lesson
document.addEventListener('DOMContentLoaded', function() {
    // Show first lesson by default
    if (lessonSections.length > 0) {
        lessonSections[0].classList.add('active');
    }
    
    // Set up best practices demos that need initialization
    
    // Reset counter
    document.getElementById("counter-value").textContent = "0";
    
    // Reset class demo
    document.getElementById("class-demo").className = "demo-box";
});
