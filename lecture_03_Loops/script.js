// Questions
// 1.print n hello worlds
// 2.One to n number and vice versa
// 3.Sum of n natural numbers and factorial of number
// 4.Factors of number
// 5.Prime number
// 6.Sum of digit
// 7.Revers of number
// 8.Strong number
// 9.Repeat hello
// 10.Cheap Calculator
// 11.Guess the number

// 1.print n hello worlds
// input = prompt("Enter the number the times you want to print hello world")

// while (input == null || isNaN(Number(input))) {
//     input = prompt("Enter valid number")
// }

// const n = Number(input)
// if (input > 0) {
//     for (let i = 0; i < n; i++) {
//         console.log("hello")
//     }
// }

// 2.One to n number and vice versa
// input = prompt("Enter the number the times you want to print hello world")

// while (input == null || isNaN(Number(input))) {
//     input = prompt("Enter valid number")
// }

// const n = Number(input)
// if (input > 0) {
//     let sum = 0
//     for (let i = 0; i <= n; i++) {
//         sum += i
//     }
//     document.getElementById("root").textContent = sum.toString()
// }

// 3.Sum of n natural numbers and factorial of number
// let input = prompt("Enter the natural number the times you want to print hello world")

// while (input == null || isNaN(Number(input))) {
//     input = prompt("Enter valid number")
// }

// const n = Number(input)
// if (input > 0) {
//     let sum = 1
//     for (let i = 0; i <= n; i++) {
//         sum += i
//     }
//     document.getElementById("root").textContent = sum.toString()
// }

// 4.Factors of number
// let input = prompt("Enter the natural number the times you want to print hello world")

// while (input == null || isNaN(Number(input))) {
//     input = prompt("Enter valid number")
// }

// const n = Number(input)
// if (input > 0) {
//     for (let i = 1; i <= Math.floor(n / 2); i++) {
//         n % i === 0 ? console.log(i) : null
//     }
// document.getElementById("root").textContent = i.toString()
// }

// 5.Prime number

// let input = prompt("Enter the natural number the times you want to print hello world")

// while (input == null || isNaN(Number(input))) {
//     input = prompt("Enter valid number")
// }

// const n = Number(input)
// if (input > 0) {
//     for (let i = 1; i <= Math.floor(n / 2); i++) {
//         n % i === 0 ? console.log(i) : null
//     }
//     document.getElementById("root").textContent = i.toString()
// }


// var isPalindrome = function (x) {
//     if (x.length < 2) return false
//     if (x <= 0) return false
//     const reverseStr = x.toString().split('').reverse().join().replaceAll(',', '')

//     return Number(reverseStr) === x
// };
// console.log(isPalindrome(10))

// var lengthOfLastWord = function (s) {
//     const sArray = s.split(' ')
//     const freshArr = []
//     for (let i = 0; i < sArray.length; i++) {
//         const element = sArray[i];
//         if (element?.trim() === "") continue
//         freshArr.push(element)
//     }

//     const len = freshArr.length
//     return freshArr[len - 1].length
// };

// console.log(lengthOfLastWord("   fly me   to   the moon  "))

// var createCounter = function (n) {
//     const arr = []
//     return function () {
//         arr.push(n)
//         n++
//         return arr
//     };
// };

// const counter = createCounter(10)
// console.log(counter()) // 10
// console.log(counter()) // 11
// console.log(counter()) // 12

// var mySqrt = function (x) {
//     return x ^ 0.5

// };

// console.log(mySqrt(8))


async function sleep(millis) {
    return new Promise((resolve, _) => {
        return setTimeout(() => {
            resolve()
        }, millis)
    })
}

let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
    