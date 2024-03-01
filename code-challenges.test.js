// UNIT 2 ASSESSMENT: Coding Practical Questions with Jest

//const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

//const numbersArray1 = [6, 7, 8, 9, 10]
//const numbersArray2 = [24, 27, 30, 33, 36] 

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]

// // Expected output: [18, 21, 24, 27, 30]

// const numbersArray2 = [24, 27, 30, 33, 36]

// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Explain your code:

// --------------------1) Create a function that takes an object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

    

// describe("divByThree", () => {
//    it("takes an object as an argument and decides if the number inside it is evenly divisible by three", () => {
//        const object1 = { number: 15 }        
//        const object2 = { number: 0 }
//        const object3 = { number: -7 }

//         expect(divByThree(object1)).toEqual("15 is divisible by 3")
//         expect(divByThree(object2)).toEqual("0 is divisible by 3")
//         expect(divByThree(object3)).toEqual("-7 is not divisible by 3")
//     })
// })


// // // b) Create the function that makes the test pass.

// const divByThree = (divByObj) => {
// //let div3 =  divByObj.number % 3 === 0) {
//     if (divByObj.number % 3 === 0) {
//         return `${divByObj.number} is divisible by 3`
//     } else {
//         return `${divByObj.number} is not divisible by 3`}
        
// } 
// // Explain your code:
//  create variable accessing object with dot notation (probably not neccessary, so commented out❌)
//  using modulo to divide by three to see if remainder equals zero       
//  return either string based on the remainder with includes string interpulation 




//----------------------------------------------------------------------------------------

// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// // a) Create a test with expect statements for each of the variables provided.

descirbe("capitalizer", () => {
    it("takes in an array of words and returns an array with all the words capitalized",() => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"];
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];
        expect(capitalizer(randomNouns1)).toEqual("Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew");
        expect(capitalizer(randomNouns2)).toEqual("Temperature", "Database", "Chopsticks", "Mango");
    })
})


// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// // b) Create the function that makes the test pass.

//const capitalizer = (capArray) => {
    //capNouns

//}
const capitalizer = (capArray) => {
    // Use map to iterate through each word in the array
    return capArray.map(word => {
        // Capitalize the first letter of each word and make the rest lowercase
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
}

// // Explain your code:
