function factorial(number){
    let multiply = 1;
    for (let i = number; i >= 1; i--) {     
        multiply *= i;
    }
    return multiply;
}

const numberOfFactorial = factorial(6);
console.log(numberOfFactorial);