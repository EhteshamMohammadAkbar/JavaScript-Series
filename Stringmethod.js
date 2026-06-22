// Most Used JavaScript String Methods
// Frontend + Backend

// length
// toUpperCase()
// toLowerCase()

// trim()
// trimStart()
// trimEnd()

// includes()
// startsWith()
// endsWith()

// indexOf()
// lastIndexOf()

// slice()
// substring()

// replace()
// replaceAll()

// split()
// join()  // Array method, split ke sath bohat use hota hai

// charAt()
// at()

// concat()

// repeat()

// padStart()
// padEnd()

// match()
// search()


// const changing = "ehtesham";
// const here = changing.toUpperCase();
// console.log(here);



// function upperCase(name) {
//     console.log(name.toUpperCase());
//     return name
// }


// function lowerCase(name) {
//     console.log(name.toLowerCase());
//     return name
// }

// upperCase(lowerCase("ehtesham"))


// const changeToArray = ('change_To_Aray');
// console.log(changeToArray.split('_'));


// function changing(str) {
//     return str.split("_")
// }

// console.log(changing("Change_To_Array"));


const myScore = [
    { name: "Ehtesham", city: "Karachi", score: [50, 60, 70] },
    { name: "Ahmed", city: "Islamabad", score: [20, 30, 40] },
    { name: "Hussain", city: "Lahore", score: [75, 85, 95] },
]

function average(myScore) {
    for (let indexBox = 0; indexBox < myScore.length; indexBox++) {
        let addAryy = []
        addAryy.push(...myScore[indexBox].score)
        console.log(addAryy);
    }
}

average(myScore)



