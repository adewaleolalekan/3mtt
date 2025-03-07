// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize lesson navigation
    const navLinks = document.querySelectorAll('#lessons-nav a');
    const lessonContents = document.querySelectorAll('.lesson-content');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding content
            const targetId = this.getAttribute('href').substring(1);
            lessonContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetId) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Toggle theme functionality
    const toggleThemeBtn = document.getElementById('toggleTheme');
    toggleThemeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.toggle('dark-mode');
    });
    
    // Lesson 1: Variables, Data Types, and Operators
    const exampleButtons = document.querySelectorAll('.run-btn');
    exampleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const exampleType = this.dataset.example;
            const resultDisplay = this.nextElementSibling;
            
            switch(exampleType) {
                case 'variables':
                    runVariablesExample(resultDisplay);
                    break;
                case 'dataTypes':
                    runDataTypesExample(resultDisplay);
                    break;
                case 'operators':
                    runOperatorsExample(resultDisplay);
                    break;
                case 'functions':
                    runFunctionsExample(resultDisplay);
                    break;
                case 'loops':
                    runLoopsExample(resultDisplay);
                    break;
                case 'conditionals':
                    runConditionalsExample(resultDisplay);
                    break;
                case 'arrays':
                    runArraysExample(resultDisplay);
                    break;
                case 'objects':
                    runObjectsExample(resultDisplay);
                    break;
                case 'arrowFunctions':
                    runArrowFunctionsExample(resultDisplay);
                    break;
                case 'destructuring':
                    runDestructuringExample(resultDisplay);
                    break;
                case 'templateLiterals':
                    runTemplateLiteralsExample(resultDisplay);
                    break;
                case 'domSelectors':
                    runDomSelectorsExample(resultDisplay);
                    break;
            }
        });
    });
    
    // Lesson 5: DOM Manipulation Examples
    initDomManipulationExamples();
    
    // Lesson 6: Event Handling Examples
    initEventHandlingExamples();
});

// Example Functions for Lesson 1
function runVariablesExample(resultDisplay) {
    let name = "Alex";
    const age = 30;
    var isStudent = true;
    
    resultDisplay.innerHTML = `
        <strong>Variables:</strong><br>
        name (let): ${name}<br>
        age (const): ${age}<br>
        isStudent (var): ${isStudent}<br><br>
        <em>Variables store values and can be declared with let, const, or var.</em>
    `;
}

function runDataTypesExample(resultDisplay) {
    // String
    let text = "Hello World";
    // Number
    let number = 42;
    // Boolean
    let isTrue = false;
    // Null
    let empty = null;
    // Undefined
    let notDefined;
    // Object
    let person = {
        name: "Emma",
        age: 28
    };
    
    resultDisplay.innerHTML = `
        <strong>Data Types:</strong><br>
        text (String): ${text} - ${typeof text}<br>
        number (Number): ${number} - ${typeof number}<br>
        isTrue (Boolean): ${isTrue} - ${typeof isTrue}<br>
        empty (Null): ${empty} - ${"actually " + typeof empty}<br>
        notDefined (Undefined): ${notDefined} - ${typeof notDefined}<br>
        person (Object): ${JSON.stringify(person)} - ${typeof person}<br>
    `;
}

function runOperatorsExample(resultDisplay) {
    // Arithmetic operators
    let sum = 5 + 10;
    let difference = 20 - 5;
    let product = 4 * 3;
    let quotient = 10 / 2;
    
    // Comparison operators
    let isEqual = 5 === 5;
    let isNotEqual = 10 !== 5;
    let isGreater = 10 > 5;
    
    // Logical operators
    let andResult = true && false;
    let orResult = true || false;
    let notResult = !true;
    
    resultDisplay.innerHTML = `
        <strong>Arithmetic Operators:</strong><br>
        5 + 10 = ${sum}<br>
        20 - 5 = ${difference}<br>
        4 * 3 = ${product}<br>
        10 / 2 = ${quotient}<br><br>
        
        <strong>Comparison Operators:</strong><br>
        5 === 5: ${isEqual}<br>
        10 !== 5: ${isNotEqual}<br>
        10 > 5: ${isGreater}<br><br>
        
        <strong>Logical Operators:</strong><br>
        true && false: ${andResult}<br>
        true || false: ${orResult}<br>
        !true: ${notResult}<br>
    `;
}

// Example Functions for Lesson 2
function runFunctionsExample(resultDisplay) {
    // Function declaration
    function greet(name) {
        return "Hello, " + name + "!";
    }
    
    // Function expression
    const multiply = function(a, b) {
        return a * b;
    };
    
    // Try these functions
    const greeting = greet("World");
    const product = multiply(5, 3);
    
    resultDisplay.innerHTML = `
        <strong>Functions:</strong><br>
        greet("World") returns: ${greeting}<br>
        multiply(5, 3) returns: ${product}<br><br>
        <em>Functions are reusable blocks of code that can accept parameters and return values.</em>
    `;
}

function runLoopsExample(resultDisplay) {
    // For loop
    let forResult = [];
    for (let i = 0; i < 5; i++) {
        forResult.push(i);
    }
    
    // While loop
    let whileResult = [];
    let j = 0;
    while (j < 5) {
        whileResult.push(j);
        j++;
    }
    
    // For...of loop
    let array = ["apple", "banana", "cherry"];
    let forOfResult = [];
    for (let item of array) {
        forOfResult.push(item);
    }
    
    resultDisplay.innerHTML = `
        <strong>Loops:</strong><br>
        For loop (0 to 4): [${forResult.join(', ')}]<br>
        While loop (0 to 4): [${whileResult.join(', ')}]<br>
        For...of loop with ["apple", "banana", "cherry"]: [${forOfResult.join(', ')}]<br><br>
        <em>Loops allow you to repeat code until a condition is met.</em>
    `;
}

function runConditionalsExample(resultDisplay) {
    let score = 85;
    let grade;
    
    // If-else statement
    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else {
        grade = "F";
    }
    
    // Switch statement
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
            dayName = "Unknown";
    }
    
    resultDisplay.innerHTML = `
        <strong>Conditional Statements:</strong><br>
        If-else statement with score 85: Grade ${grade}<br>
        Switch statement with day 3: ${dayName}<br><br>
        <em>Conditional statements control the flow of your code based on different conditions.</em>
    `;
}

// Example Functions for Lesson 3
function runArraysExample(resultDisplay) {
    // Creating arrays
    let fruits = ["apple", "banana", "orange"];
    
    // Accessing elements
    let firstFruit = fruits[0];
    
    // Array methods
    let originalFruits = [...fruits]; // Create a copy for demonstration
    
    fruits.push("grape");  // Add to the end
    let afterPush = [...fruits];
    
    fruits.pop();  // Remove from the end
    let afterPop = [...fruits];
    
    fruits.unshift("strawberry");  // Add to the beginning
    let afterUnshift = [...fruits];
    
    fruits.shift();  // Remove from the beginning
    let afterShift = [...fruits];
    
    // Find the length
    let fruitCount = fruits.length;
    
    resultDisplay.innerHTML = `
        <strong>Arrays:</strong><br>
        Original array: [${originalFruits.join(', ')}]<br>
        First fruit (index 0): ${firstFruit}<br><br>
        
        <strong>Array Methods:</strong><br>
        After push("grape"): [${afterPush.join(', ')}]<br>
        After pop(): [${afterPop.join(', ')}]<br>
        After unshift("strawberry"): [${afterUnshift.join(', ')}]<br>
        After shift(): [${afterShift.join(', ')}]<br>
        Array length: ${fruitCount}<br>
    `;
}

function runObjectsExample(resultDisplay) {
    // Creating an object
    let person = {
        name: "Sarah",
        age: 32,
        profession: "Developer",
        skills: ["JavaScript", "HTML", "CSS"]
    };
    
    // Accessing properties
    let personName = person.name;
    let personAge = person["age"];
    
    // Adding and modifying properties
    let originalPerson = {...person}; // Create a copy for demonstration
    
    person.location = "New York";
    person.age = 33;
    
    // Nested objects
    let company = {
        name: "Tech Corp",
        employees: {
            developers: 50,
            designers: 30
        }
    };
    
    resultDisplay.innerHTML = `
        <strong>Objects:</strong><br>
        Original person object: ${JSON.stringify(originalPerson)}<br>
        Accessing property with dot notation: person.name = ${personName}<br>
        Accessing property with bracket notation: person["age"] = ${personAge}<br><br>
        
        <strong>Modifying Objects:</strong><br>
        After adding location and modifying age: ${JSON.stringify(person)}<br><br>
        
        <strong>Nested Objects:</strong><br>
        Company employees: ${company.employees.developers} developers, ${company.employees.designers} designers<br>
    `;
}

// Example Functions for Lesson 4
function runArrowFunctionsExample(resultDisplay) {
    // Traditional function
    function add(a, b) {
        return a + b;
    }
    
    // Arrow function
    const addArrow = (a, b) => a + b;
    
    // Arrow function with more statements
    const calculateArea = (width, height) => {
        const area = width * height;
        return area;
    };
    
    resultDisplay.innerHTML = `
        <strong>Arrow Functions:</strong><br>
        Traditional function add(3, 5): ${add(3, 5)}<br>
        Arrow function addArrow(3, 5): ${addArrow(3, 5)}<br>
        Arrow function with body calculateArea(4, 6): ${calculateArea(4, 6)}<br><br>
        <em>Arrow functions provide a shorter syntax for writing functions and have different 'this' behavior.</em>
    `;
}

function runDestructuringExample(resultDisplay) {
    // Array destructuring
    const colors = ["red", "green", "blue"];
    const [firstColor, secondColor] = colors;
    
    // Object destructuring
    const user = {
        name: "John",
        email: "john@example.com",
        country: "Canada"
    };
    
    const { name, email } = user;
    
    resultDisplay.innerHTML = `
        <strong>Destructuring:</strong><br>
        Original array: [${colors.join(', ')}]<br>
        Destructured variables: firstColor = ${firstColor}, secondColor = ${secondColor}<br><br>
        
        Original object: ${JSON.stringify(user)}<br>
        Destructured properties: name = ${name}, email = ${email}<br><br>
        <em>Destructuring allows you to extract values from arrays or properties from objects into distinct variables.</em>
    `;
}

function runTemplateLiteralsExample(resultDisplay) {
    const user = { name: "John" };
    const company = { name: "Tech Corp" };
    
    // Old way
    const oldGreeting = "Hello, " + user.name + "! Welcome to " + company.name + ".";
    
    // Template literals
    const newGreeting = `Hello, ${user.name}! Welcome to ${company.name}.`;
    
    // Multi-line strings
    const multiLine = `This is a string
that spans across
multiple lines.`;
    
    resultDisplay.innerHTML = `
        <strong>Template Literals:</strong><br>
        Old string concatenation:<br>${oldGreeting}<br><br>
        Using template literals:<br>${newGreeting}<br><br>
        Multi-line string:<br><pre>${multiLine}</pre><br>
        <em>Template literals make string interpolation and multi-line strings easier and more readable.</em>
    `;
}

// Example Functions for Lesson 5
function runDomSelectorsExample(resultDisplay) {
    const pageTitle = document.querySelector("h1").textContent;
    const lessonsCount = document.querySelectorAll("#lessons-nav li").length;
    const currentLessonId = document.querySelector(".lesson-content.active").id;
    
    resultDisplay.innerHTML = `
        <strong>DOM Selectors Results:</strong><br>
        Page title: ${pageTitle}<br>
        Number of lessons: ${lessonsCount}<br>
        Current active lesson: ${currentLessonId}<br><br>
        <em>DOM selectors allow you to find and reference HTML elements in the document.</em>
    `;
}

function initDomManipulationExamples() {
    // Change text content
    document.getElementById("changeText").addEventListener("click", function() {
        document.getElementById("modifyTarget").textContent = "Text changed!";
    });
    
    // Change styles
    document.getElementById("changeColor").addEventListener("click", function() {
        document.getElementById("modifyTarget").style.color = "blue";
    });
    
    // Add class
    document.getElementById("addClass").addEventListener("click", function() {
        document.getElementById("modifyTarget").classList.add("highlight");
    });
    
    // Remove class
    document.getElementById("removeClass").addEventListener("click", function() {
        document.getElementById("modifyTarget").classList.remove("highlight");
    });
    
    // Create and append element
    document.getElementById("addElement").addEventListener("click", function() {
        const newPara = document.createElement("p");
        newPara.textContent = "This is a new paragraph.";
        newPara.classList.add("new-element");
        document.getElementById("elementContainer").appendChild(newPara);
    });
    
    // Remove last element
    document.getElementById("removeElement").addEventListener("click", function() {
        const container = document.getElementById("elementContainer");
        const elements = container.querySelectorAll("p");
        if (elements.length > 1) {
            container.removeChild(elements[elements.length - 1]);
        }
    });
}

// Example Functions for Lesson 6
function initEventHandlingExamples() {
    const eventBox = document.getElementById("eventDemo");
    const output = document.getElementById("eventOutput");
    
    // Click event
    eventBox.addEventListener("click", function(event) {
        output.textContent = "Clicked at position: " + event.clientX + ", " + event.clientY;
    });
    
    // Mouse over event
    eventBox.addEventListener("mouseover", function() {
        eventBox.classList.add("hover");
        output.textContent = "Mouse over event triggered";
    });
    
    // Mouse out event
    eventBox.addEventListener("mouseout", function() {
        eventBox.classList.remove("hover");
        output.textContent = "Mouse out event triggered";
    });
    
    // Form submission
    const form = document.getElementById("eventForm");
    const formOutput = document.getElementById("formOutput");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents page reload
        const inputValue = document.getElementById("eventInput").value;
        formOutput.textContent = "Form submitted with value: " + inputValue;
    });
    
    // Key events
    const input = document.getElementById("eventInput");
    input.addEventListener("keyup", function(event) {
        formOutput.textContent = "Key pressed: " + event.key;
    });
    
    // Event delegation
    const container = document.querySelector(".button-container");
    const delegationOutput = document.getElementById("delegationOutput");
    
    container.addEventListener("click", function(event) {
        // Check if the clicked element is a button
        if (event.target.classList.contains("delegate-btn")) {
            const color = event.target.dataset.color;
            delegationOutput.textContent = "Selected color: " + color;
            delegationOutput.style.color = color;
        }
    });
    
    // Add a new button dynamically
    document.getElementById("addButton").addEventListener("click", function() {
        const colors = ["purple", "orange", "pink", "brown"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        const newButton = document.createElement("button");
        newButton.classList.add("delegate-btn");
        newButton.dataset.color = randomColor;
        newButton.textContent = randomColor.charAt(0).toUpperCase() + randomColor.slice(1);
        
        container.appendChild(newButton);
    });
}
