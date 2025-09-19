// let tableau = ["C1","C1", "C3", "C2", "C1", "C8", "C2", "C1"];

// // Object to count each code
// let counts = {};

// // Loop through the array
// for (let i = 0; i < tableau.length; i++) {
//     let code = tableau[i];


//     // Count how many times each code appears
//     if (counts[code]) {
//         counts[code]++;
//     } else {
//         counts[code] = 1;
//     }
// }

// for (let code in counts) {
//     console.log(code + " appears " + counts[code] + " times");
// }


let myFriends = [1,2,3,3 , "AbdeLadim" , "Hitam" , "Ayman" , "Mouhamid" , "Marwan" ,];

let onlyNames = [];

for (let index = 0; index < myFriends.length; index++) {
    if (typeof myFriends[index] === "string"){
        onlyNames.push(myFriends[index])
    }
    
}
console.log(onlyNames)