// Interactive demos
document.getElementById('variable-demo').addEventListener('click', function() {
    const output = document.getElementById('variable-output');
    const unchangeable = 'This value cannot be reassigned';
    let changeable = 'Original value';
    
    output.innerHTML = `<p>const unchangeable = '${unchangeable}'</p>`;
    output.innerHTML += `<p>let changeable = '${changeable}'</p>`;
    
    changeable = 'Changed value';
    output.innerHTML += `<p>After changing: changeable = '${changeable}'</p>`;
    
    // This would cause an error
    // unchangeable = 'Try to change';
});

document.getElementById('function-demo').addEventListener('click', function() {
    const output = document.getElementById('function-output');
    
    function greet(name) {
        return `Hello, ${name}!`;
    }
    
    const result = greet('JavaScript Learner');
    output.textContent = result;
});

document.getElementById('array-demo').addEventListener('click', function() {
    const output = document.getElementById('array-output');
    
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const doubled = numbers.map(num => num * 2);
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    
    output.innerHTML = `<p>Original array: [${numbers.join(', ')}]</p>`;
    output.innerHTML += `<p>Doubled (map): [${doubled.join(', ')}]</p>`;
    output.innerHTML += `<p>Even numbers (filter): [${evenNumbers.join(', ')}]</p>`;
});

document.getElementById('dom-demo').addEventListener('click', function() {
    const target = document.getElementById('demo-target');
    target.textContent = 'Text changed by JavaScript!';
    target.style.color = 'blue';
    target.style.fontWeight = 'bold';
});

document.getElementById('dom-add').addEventListener('click', function() {
    const newElement = document.createElement('div');
    newElement.textContent = 'New element added by JavaScript!';
    newElement.style.backgroundColor = '#e8f4fc';
    newElement.style.padding = '10px';
    newElement.style.marginTop = '10px';
    document.getElementById('dom-playground').appendChild(newElement);
});

const eventPlayground = document.getElementById('event-playground');
const eventOutput = document.getElementById('event-output');

eventPlayground.addEventListener('mouseover', function() {
    eventPlayground.style.backgroundColor = '#3498db';
    eventPlayground.textContent = 'Mouse is over me!';
    eventOutput.textContent = 'Mouse over event detected';
});

eventPlayground.addEventListener('mouseout', function() {
    eventPlayground.style.backgroundColor = '#f0f0f0';
    eventPlayground.textContent = 'Mouse over this area';
    eventOutput.textContent = 'Mouse out event detected';
});

eventPlayground.addEventListener('click', function(event) {
    eventOutput.textContent = `Clicked at position: X=${event.offsetX}, Y=${event.offsetY}`;
});

// Make the navigation sticky on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navigator');
    if (window.scrollY > 100) {
        nav.style.top = '0';
        nav.style.borderRadius = '0 0 5px 5px';
    } else {
        nav.style.top = '10px';
        nav.style.borderRadius = '5px';
    }
});
