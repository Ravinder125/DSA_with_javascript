// 1.Left and Right rotation by 1
// 2.Left and right rotation by k element
// 3.Remove duplicates from the sorted array
// 4.Merge sorted array
// 5.Best time to buy and sell stocks
// 6.Sort the color
// 7.Maximum Subarray/ kadane's algorithm
// 8.Majority Element/ Moore's voting algo
// 9.Trapping Rain water


const arr = [1, 2, 3, 4, 5]


// 1.Q
// rightToLeftBy1(arr)
// const leftToRightBy1 = (arr) => {
//     const firstElem = arr[0];
//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i] = arr[i + 1]
//     }
//     arr[arr.length - 1] = firstElem;
//     console.log(arr);
// }
// output:[ 2, 3, 4, 5, 1 ]

// const rightToLeftBy1 = (arr) => {
//     const lastElem = arr[arr.length - 1];
//     for (let i = arr.length - 1; i > 0; i--) {
//         arr[i] = arr[i - 1]
//     }
//     arr[0] = lastElem;
//     console.log(arr);
// }
// output:[ 5, 1, 2, 3, 4 ]

// 2.Q

const leftToRightByK = (arr, k) => {
    if (typeof arr !== "object") throw new Error("Please provide an array")
    if (arr?.length < 2) throw new Error("Please provide an array with at least 2 characters")
    // first Approach
    // const leftElem = [];
    // for (let i = 0; i < k; i++) {
    //     leftElem.push(arr[i])
    // }
    // for (let j = 0; j < arr.length - k; j++) {
    //     arr[j] = arr[j + k]
    // }

    // for (let x = arr.length - 1; x > k; x--) {
    //     arr[x] = leftElem[x - k - 1]
    // }

    // second Approach
    //     for (let i = 0; i < k; i++) {
    //         const copy = arr[0]
    //         for (let j = 0; j < arr.length - 1; j++) {
    //             arr[j] = arr[j + 1]
    //         }
    //         arr[arr.length - 1] = copy
    //     }
    //     console.log(arr)

    // Word best approach
    // k = k % arr.length;
    // const temp = new Array(arr.length);
    // for (let i = 0; i < arr.length; i++) {
    //     temp[i] = arr[(i + k) % arr.length]
    // }
    // console.log(temp)

    // Galaxy bet approach

    k = k % arr.length;
    let j = 0
    let temp = new Array(arr.length)
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[j], arr[i], i)
        temp[j] = arr[i]
        j++
    }
    console.log(temp)
    // reverse(0, k - 1, arr)
    // reverse(k, arr.length - 1, arr)
    // reverse(0, arr.length - 1, arr)
}

const reverse = (i, j, arr) => {
    let temp;
    while (j > i) {
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
    return
}

const rightToLeftByK = (arr, k) => {
    if (typeof arr !== "object") throw new Error("Please provide an array")
    if (arr?.length < 2) throw new Error("Please provide an array with at least 2 characters")
    // first Approach
    // const leftElem = [];
    // for (let i = 0; i < k; i++) {
    //     leftElem.push(arr[i])
    // }
    // for (let 

    // second Approach
    //     for (let i = 0; i < k; i++) {
    //         const copy = arr[arr.length - 1]
    //         for (let j = arr.length - 1; j > 0; j--) {
    //             arr[j] = arr[j - 1]
    //         }
    //         arr[0] = copy
    //     }
    //     console.log(arr)

    // Word best approach
    k = k % arr.length;
    const temp = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        temp[(i + k) % arr.length] = arr[i]
    }


}
// leftToRightByK([1, 2, 3, 4, 5], 2)



const moveAllZeroToLeft = (arr) => {
    let j = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[j] === 0) {
            j++
        } else if (arr[i] === 0) {
            arr[j] = arr[i]
            arr[i] = 1
            j++
        }
    }
    console.log(arr)
}

const array = [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1]
moveAllZeroToLeft(array)