
const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, firstname) => {
  fs.readFile("./lastname.txt", "utf-8", (err, lastname) => {
    fs.readFile("./age.txt", "utf-8", (err, age) => {
      fs.readFile("./hobbies.txt", "utf-8", (err, hobby) => {
        let hobbyArr = hobby.replace(',','').replace(' ','').split('"') //del "," & space then convert to array
        hobbyArr.shift() //del: "["
        hobbyArr.pop() // del: "]"
        let hobbies = hobbyArr.filter(n => n) //del: "" empty element

        console.log(`${firstname} ${lastname} is ${age} years old and his hoobies are ${hobbies[0]} and ${hobbies[1]}.`)
      })
    })
  })
})