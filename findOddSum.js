function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

const myNumbers = [12, 33, 54, 64, 89];
let result = getSumOfAnArray(myNumbers);
console.log(result);

function getAnOddArray(numbers){
    let oddArray = [];
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 !== 0){
            oddArray.push(numbers[i]);
        }
    }
    return oddArray;
}

let oddResult = getAnOddArray(myNumbers);
let oddArraySum = getSumOfAnArray(oddResult);
console.log(oddResult);
console.log(oddArraySum);