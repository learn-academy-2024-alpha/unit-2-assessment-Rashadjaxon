// UNIT 2 ASSESSMENT: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain WHY your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

// const cohort = "Alpha 2024"
// console.log(cohort.split(" "))

// a) Your answer: "A", "l", "p", "h", "a", "2", "0", "2", "4"
// b) Verify and explain:split turns the strings characters into subset of strings. The actual output: [ 'Alpha', '2024' ]

// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// // a) Your answer: undefined
// // b) Verify and explain: output: undefined. This function has no return

// // --------------------3) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//   console.log(onlyOdds)

// // a) Your answer: predicted output: [11,13,15]
// // b) Verify and explain: use .filter to remove all number that can be divided by 2 using modulo and bang operator. actual output: [11, 13, 15]

// // --------------------4) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// // console.log(myCodingSkills.languages[0])

// // a) Your answer:
// // b) Verify and explain:

// // --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Alpha"
    this.year = 2024
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// // a) Your answer: output: 'George', 'Alpha', 2024 
// // b) Verify and explain: new replaces name in constructor and returns the values in name, cohort, year. actual output: Learn { student: 'George', cohort: 'Alpha', year: 2024 }
