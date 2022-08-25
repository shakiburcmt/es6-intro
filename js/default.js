// function add(first, second) {
//     // es6 er age ja hoto
//     console.log(first, second);
//     // shortcut of if statement,, niche jodi true hoye number dekhabe kintu false hole ||2 set korbe
//     second = second || 2;
//     // if (second === undefined) {
//     //     second = 1;
//     // }
//     const total = first + second;
//     return total;
// }

// es6 asar por subidha
function add(first, second = 15) {
    const total = first + second;
    return total;
}
// tobe man dile function er parameter e dewa man ke skip kore function er baire je man dewa hoyeche seta nibe,, tobe serial dite hobe a er man ke skip kore b er man dewa jabe (,5) evabe 
const result = add(10, 5);
console.log(result);



function fullName(first, last = 'Rahman') {
    const name = first + ' ' + last;
    return name;
}
const lastName = fullName('Shakibur');
console.log(lastName)