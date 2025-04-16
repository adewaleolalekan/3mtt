document.addEventListener('DOMContentLoaded', function() {
    // Variables to store calculator state
    let displayValue = '0';
    let pendingOperation = null;
    let firstOperand = null;
    let waitingForSecondOperand = false;
    
    // Get display element
    const display = document.getElementById('display');
    
    // Function to update display
    function updateDisplay() {
        display.textContent = displayValue;
    }
    
    // Function to input digit
    function inputDigit(digit) {
        if (waitingForSecondOperand) {
            displayValue = digit;
            waitingForSecondOperand = false;
        } else {
            // Replace initial 0 with digit or append digit
            displayValue = displayValue === '0' ? digit : displayValue + digit;
        }
        updateDisplay();
    }
    
    // Function to input decimal
    function inputDecimal() {
        // If waiting for second operand, set display to "0."
        if (waitingForSecondOperand) {
            displayValue = '0.';
            waitingForSecondOperand = false;
            updateDisplay();
            return;
        }
        
        // Add decimal point if it doesn't already exist
        if (!displayValue.includes('.')) {
            displayValue += '.';
            updateDisplay();
        }
    }
    
    // Function to handle operations
    function handleOperation(operation) {
        // Convert current display value to number
        const inputValue = parseFloat(displayValue);
        
        // If we have a pending operation and are waiting for second operand,
        // just update the operation
        if (pendingOperation && waitingForSecondOperand) {
            pendingOperation = operation;
            return;
        }
        
        // If this is the first operand, store it
        if (firstOperand === null) {
            firstOperand = inputValue;
        } else if (pendingOperation) {
            // If we already have a first operand and a pending operation,
            // perform the calculation
            const result = performCalculation();
            displayValue = String(result);
            firstOperand = result;
        }
        
        waitingForSecondOperand = true;
        pendingOperation = operation;
        updateDisplay();
    }
    
    // Function to perform calculation
    function performCalculation() {
        const secondOperand = parseFloat(displayValue);
        let result = 0;
        
        switch (pendingOperation) {
            case 'add':
                result = firstOperand + secondOperand;
                break;
            case 'subtract':
                result = firstOperand - secondOperand;
                break;
            case 'multiply':
                result = firstOperand * secondOperand;
                break;
            case 'divide':
                if (secondOperand === 0) {
                    alert("Cannot divide by zero!");
                    resetCalculator();
                    return 0;
                }
                result = firstOperand / secondOperand;
                break;
            default:
                return secondOperand;
        }
        
        // Round to avoid floating point precision issues
        return Math.round(result * 1000000) / 1000000;
    }
    
    // Function to reset calculator
    function resetCalculator() {
        displayValue = '0';
        pendingOperation = null;
        firstOperand = null;
        waitingForSecondOperand = false;
        updateDisplay();
    }
    
    // Function to handle backspace
    function handleBackspace() {
        if (displayValue.length > 1) {
            displayValue = displayValue.slice(0, -1);
        } else {
            displayValue = '0';
        }
        updateDisplay();
    }
    
    // Add event listeners for number buttons
    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => {
            inputDigit(button.textContent);
        });
    });
    
    // Add event listener for decimal button
    document.getElementById('decimal').addEventListener('click', () => {
        inputDecimal();
    });
    
    // Add event listeners for operation buttons
    document.getElementById('add').addEventListener('click', () => {
        handleOperation('add');
    });
    
    document.getElementById('subtract').addEventListener('click', () => {
        handleOperation('subtract');
    });
    
    document.getElementById('multiply').addEventListener('click', () => {
        handleOperation('multiply');
    });
    
    document.getElementById('divide').addEventListener('click', () => {
        handleOperation('divide');
    });
    
    // Add event listener for equals button
    document.getElementById('equals').addEventListener('click', () => {
        if (pendingOperation && !waitingForSecondOperand) {
            const result = performCalculation();
            displayValue = String(result);
            firstOperand = result;
            pendingOperation = null;
            waitingForSecondOperand = true;
            updateDisplay();
        }
    });
    
    // Add event listener for clear button
    document.getElementById('clear').addEventListener('click', resetCalculator);
    
    // Add event listener for backspace button
    document.getElementById('backspace').addEventListener('click', handleBackspace);
    
    // Initialize display
    updateDisplay();
    
    // Add keyboard support
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        
        // Handle number keys
        if (/^\d$/.test(key)) {
            event.preventDefault();
            inputDigit(key);
        }
        
        // Handle decimal key
        if (key === '.') {
            event.preventDefault();
            inputDecimal();
        }
        
        // Handle operation keys
        switch (key) {
            case '+':
                event.preventDefault();
                handleOperation('add');
                break;
            case '-':
                event.preventDefault();
                handleOperation('subtract');
                break;
            case '*':
                event.preventDefault();
                handleOperation('multiply');
                break;
            case '/':
                event.preventDefault();
                handleOperation('divide');
                break;
            case 'Enter':
            case '=':
                event.preventDefault();
                document.getElementById('equals').click();
                break;
            case 'Escape':
                event.preventDefault();
                resetCalculator();
                break;
            case 'Backspace':
                event.preventDefault();
                handleBackspace();
                break;
        }
    });
});
