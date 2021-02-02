// 22.5 arrow function, multiple parameter, function body

// function declare---------------------
// function doubleIt(num){
//     return num * 2;
// }
// --------------------------------------

// function express----------------------
// const doubleIt = function myFun(num){
//     return num * 2;
// }
// --------------------------------------

// function with es6---------------------
// const doubleIt = num => num * 2;
// const result = doubleIt(50);
// ---------------------------------------------------------------------------
const doubleIt = num => num * 2;

const add = (x, y) => x + y;
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = add(50, 70);
const result2 = give5();
const result3 = doMath(7, 5);
console.log(result3);