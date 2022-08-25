const add = (num1, num2) => num1 * num2;
console.log(add(5, 6));


// no parameter look like below,, single parameter hole () dileo hobe na dile hobe
const getPie = () => 3.1416;
console.log(getPie())

// multiline arrow function, ekadhik calculation thakle second bracket moddhe rakhte hoy
const doMath = (x, y, z) => {
    const sum1 = x + y;
    const multiply = sum1 * z;
    return multiply;
}
console.log(doMath(3, 3, 3))

// arrow function er own this thake na kintu regular function er own this thake