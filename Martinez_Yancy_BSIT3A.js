// Variables
let game = "PUBG";
let season = "Season 31";
let totalPlayers = 4;

//Objects Literals
const gameInfo = {
  game: "PUBG",
  mode: "Battle Royale"
};

const matchesPlayed = {
    matches: 100,
    wins: 80
};

//Arrays
const ranks = ["Crown", "Ace","Ace Master","Ace Dominator"];
const players = [];
const kdRatios = [10.8, 9.5, 8.2, 7.1];

//Class1-4
class Player {
  constructor(name, rank, kdRatios) {
    this.name = name;    
    this.rank = rank;
    
  }

    displayInfo() {
        return `Player Name: ${this.name}, is an ${this.rank} ranked player`;
    }
};

class Player1 extends Player {
  #level = "Pro";

  getLevel() {
    return this.#level;
  }
};

class Player2 extends Player {
  #level = "Pro";

  getLevel() {
    return this.#level;
  }
};

class Player3 extends Player2 {
  getinfo() {
    return `Player Name: ${this.name} and is a ${this.getLevel()} player`;
  }

  play() {
    return `${this.name} is playing ${game} in ${season} with a total of ${totalPlayers} players`;
  }
};

//Objects
const Harry = new Player("Harry", "Ace Master", kdRatios[10.8]);
const John = new Player1("John", "Ace Dominator", kdRatios[9.5]);
const Yancy = new Player2("Yancy", "Ace", kdRatios[8.2]);
const Jullever = new Player3("Jullever", "Crown", kdRatios[7.1]);

players.push(Harry, John, Yancy, Jullever);

//COnditionals
if (matchesPlayed.wins > 60) {
  console.log(`The players have won ${matchesPlayed.wins} out of ${matchesPlayed.matches} matches.`);
}

else if (Harry.kdRatios > 10) {
  console.log(`Harry has a high K/D ratio of ${Harry.kdRatios}.`);
}

else if (John.kdRatios > 9) {
  console.log(`John has a high K/D ratio of ${John.kdRatios}.`);
}

else if (Yancy.kdRatios > 8) {
  console.log(`Yancy has a high K/D ratio of ${Yancy.kdRatios}.`);
}

else if (Jullever.kdRatios > 7) {
  console.log(`Jullever has a high K/D ratio of ${Jullever.kdRatios}.`);
}

//Loops
for (let i = 0; i < players.length; i++) {
  console.log(players[i].displayInfo());
}

for (let rank of ranks) {
  console.log(`The rank ${rank} is available in ${game}.`);
}

kdRatios.forEach((kdRatio, index) => {
  console.log(`Player ${players[index].name} has a K/D ratio of ${kdRatio}.`);
});