const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function askQuestion(query) {
    return new Promise(resolve => readline.question(query, resolve));
  }
  
  async function main() {
    const num1 = parseFloat(await askQuestion('Enter the first number: '));
    const num2 = parseFloat(await askQuestion('Enter the second number: '));
    const operation = await askQuestion('Enter operation (+, -, *, /): ');
  
    let result;
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 != 0) {
          result = num1 / num2;
        } else {
          console.log('Error! Division by zero.');
          process.exit(0);
        }
        break;
      default:
        console.log('Invalid operation!');
        process.exit(0);
    }
  
    console.log(`The result is: ${result}`);
    readline.close();
  }
  
  main();