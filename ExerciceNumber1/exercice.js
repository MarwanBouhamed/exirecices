let tableau = ["C1","C1", "C3", "C2", "C1", "C8", "C2", "C1"];

let code = "C2"

let counter = 0;

for (let i = 0; i <= tableau.length ; i++){
    if (tableau[i] === code){
        counter++;
    }
} 

console.log("the code " + code + " appears "+ counter);