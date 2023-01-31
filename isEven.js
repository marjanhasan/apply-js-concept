function isEven(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }else{
        return false;
    }
}

const evenNumber = 12;
const checkEvenNumber = isEven(evenNumber);
console.log(evenNumber, "is even:", checkEvenNumber);

const oddNumber = 11;
const checkOddNumber = isEven(oddNumber);
console.log(oddNumber, "is even:", checkOddNumber);