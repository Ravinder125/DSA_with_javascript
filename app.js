// leet code

// Add Binary

// const toDecimal = (binaryStr) => {
//     let number = 0;
//     for (let i = 0; i < binaryStr.length; i++) {
//         const digit = parseInt(binaryStr[binaryStr.length - 1 - i]);
//         number += digit * (2 ** i);
//     }
//     return number;
// };

// const toBinary = (y) => {
//     if (y === 0) return "0";
//     const binaries = [];
//     let number = y;
//     while (number > 0) {
//         binaries.unshift(number % 2);
//         number = Math.floor(number / 2);
//     }
//     return binaries.join('');
// };

// const addBinary = (a, b) => {
//     const n1 = toDecimal(a);
//     const n2 = toDecimal(b);
//     return toBinary(n1 + n2);
// };

// // Example
// console.log(addBinary("101", "11")); // Output: "1000"

// var createCounter = function (init) {
//     let n = init
//     return {
//         increment: function () {
//             return init++
//         },

//         reset: function () {
//             return init = n
//         },
//         decrement: function () {
//             return init--
//         }
//     }
// }

// const counter = createCounter(5)
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

// var compose = function (functions) {
//     return function (x) {
//         if (functions.length < 0) return;
//         console.log(functions.length)

//         for (let i = functions.length - 1; i >= 0; i--) {
//             x = functions[i](x)
//             console.log(x)
//         }
//         return x
//     }
// };


// const fn = compose([x => x + 1, x => 2 * x])
// console.log(fn(4)) // 9


// Array.prototype.last = function () {
//     return this[this.length - 1]
// };


// const arr = [1, 2, 3];
// console.log(arr.last()); // 3


var removeElement = function (nums, val) {
    if (nums.length === 0) return;
    const sortedArr = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        num !== val && sortedArr.push(num)
    }
    // console.log(sortedArr)
    return sortedArr
};

console.log(removeElement([2, 3, 3, 2], 3)
)


