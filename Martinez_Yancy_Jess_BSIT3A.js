//  Variables
let name = "Yancy";
let age = 20;
let playerRank = "Ace";

console.log('Name: ' + name);
console.log('Age: ' + age);
console.log('Rank: ' + playerRank);

// Arrays
let ranks = ["Crown", "Ace", "Ace Master", "Ace Dominator", "Conqueror"];
let rankDifficulty = ["Quite Hard", "Hard", "Very Hard", "Extreme", "Impossible"];
let teammates = ["Jhon", "Joel", "Ivan"];

// Conditionals
if (age >= 18) {
    console.log(name + " is an adult");
}

if (playerRank === "Crown") {
   console.log(name + " is a Crown rank player");

}

else if (playerRank === "Ace") {
    console.log(name + " is an Ace rank player");
}

else if (playerRank === "Ace Master") {
    console.log(name + " is an Ace Master rank player");
}

else if (playerRank === "Ace Dominator") {
      console.log(name + " is an Ace Dominator rank player");
   }

else if (playerRank === "Conqueror") {
    console.log(name + " is a Conqueror rank player");
}

// loops
for (let i = 0; i < ranks.length; i++) {
    console.log("Rank " + (i + 1) + ": " + ranks[i]);
}

for (let i = 0; i < rankDifficulty.length; i++) {
    console.log(ranks[i] + " Difficulty: " + rankDifficulty[i]);
}

for (let teammate of teammates) {
    console.log("Teammate: " + teammate);
}


