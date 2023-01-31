function inchToFeet(inch){
    const feet = (inch / 12).toFixed(1);
    return feet;
}

const dadaInch = 72;
const dadaFeet = inchToFeet(dadaInch);
console.log("dadaFeet:", dadaFeet);

const nanaInch = 68;
const nanaFeet = inchToFeet(nanaInch);
console.log("nanaFeet:", nanaFeet);