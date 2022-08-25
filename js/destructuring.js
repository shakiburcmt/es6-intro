const fish = {
    name: 'Rui',
    color: 'white',
    price: 4000
}
// object er ek ba ekadhik property ke variable e rakhte chai tahole dui pashey object call korte hobe ar property name & variable name same hote hobe
const { color, price } = fish;
console.log(color, price)


// object er moto array o destructuring kora jay,, tobe ekhane ektu subidha je duipashe jekono nam dewa jay,,,, niche seirally man nicche 
const [first, second] = [12, 33];
console.log(first, second)


const number = ['ayesha', 'mariam', 'sara'];
const [bou1, bou2, bou3] = number;
console.log(bou3)


// same work using function
function getWifeName() {
    return ['mariam', 'sara'];
}
const [wife1, wife2] = getWifeName();
console.log(wife2, wife1)