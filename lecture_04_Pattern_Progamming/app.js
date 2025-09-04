const prompt = require('prompt-sync')()

const n = prompt("Enter a number ")

// const printNTimes = (n) => {
//     for (let i = 1; i <= n; i++) {
//         let ascii = 65; // A
//         for (let j = 1; j <= i; j++) {
//             1.process.stdout.write("* ")
//             2.process.stdout.write(j + " ")
//             3.process.stdout.write(String.fromCharCode(ascii) + " ")
//              ascii++
//         }
//         console.log()
//     }
// }

// 1.Stars
// *
// **
// ***
// ****
// *****
// ******

// 2.Numbers
// 1
// 12
// 123
// 1234
// 12345
// 123456

// 3.Alphabets
// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F

// 4.Inverted Right Angle Triangle
// ******
// *****
// ****
// ***
// **
// *

// 5.Mirror stars pyramid
//      *
//    ***
//   ****
//  *****
// ******

// const printNTimes = (n) => {
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= n - i + 1; j++) {
//              4.process.stdout.write("* ")

//         }
//         console.log()
//     }
// }

// const printNTimes = (n) => {
//     for (let i = 1; i <= n; i++) {
//         Inverted
//         for (let j = n; j >= i; j--) {
//             process.stdout.write("  ")
//         }
//         Right
//         for (let j = 1; j <= i; j++) {
//             process.stdout.write("* ")
//         }

//         console.log()
//     }
// }


const printNTimes = (n) => {
    const halfN = Math.floor(n)
    for (let i = 1; i <= halfN; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write("_")
        }

        for (let j = 1; j <= 1; j++) {
            process.stdout.write("*")
        }
        for (let j = halfN; j >= i; j--) {
            process.stdout.write("_")
        }
        console.log()
    }

}
printNTimes(n)