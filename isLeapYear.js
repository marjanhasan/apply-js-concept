function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const firstExample = 2017;
let result = isLeapYear(firstExample); // we should use let instead of const here because we're gonna use this variable to get output multiple time
console.log(firstExample,'is leap year:',result);

const secondExample = 2020;
result = isLeapYear(secondExample); // same varible used again 
console.log(secondExample,'is leap year:',result);