// ... spread operator
const array = [4, 5, 66, 12, 22];
// console.log(array)
// console.log(Math.max(...array))

// // refference same howay duitai change same hobe abar push korle duitatei same hobe
// const array2 = [...array];
// array.push(66)
// array2.push(333)
// console.log(array2)
// console.log(array)



const newArray = [23, ...array, 1];
console.log(Math.min(...newArray));