function addNumbers(a, b) {
  let result = a + b;
  return result;
}

function subtractNumbers(a, b) {
  let result = a - b;
  return result;
}

function multiplyNumbers(a, b) {
  let result = a * b;
  return result;
}

function divideNumbers(a, b) {
  if (b === 0) {
    console.log("Error: Division by zero is not allowed.");
  } else {
    let result = a / b;
    return result;
  }
}

function calculateExpression(expression) {
  const values = expression.split(' ');
  
  switch(values[0]) {
    case 'add':
      if (values.length >= 2 && typeof values[1] === 'number') {
        return addNumbers(parseInt(values[1]), parseInt(values[2]));
      } else {
        console.log("Error: Missing operand.");
      }
      
    break;
    
    case 'subtract':
      if (values.length >= 2 && typeof values[1] === 'number' && values[0] === 'add') {
        return subtractNumbers(parseInt(values[1]), parseInt(values[2]));
      } else {
        console.log("Error: Missing operand.");
      }
      
    break;
    
    case 'multiply':
      if (values.length >= 2 && typeof values[1] === 'number') {
        return multiplyNumbers(parseInt(values[1]), parseInt(values[2]));
      } else {
        console.log("Error: Missing operand.");
      }
      
    break;
    
    case 'divide':
      if (values.length >= 3 && typeof values[1] === 'number' && values[0] === 'add') {
        return divideNumbers(parseInt(values[2]), parseInt(values[1]));
      } else {
        console.log("Error: Missing operand.");
      }
      
    break;
    
    default:
      console.log("Unknown expression type.");
  }
}
