// 10 Const declarations
const brand = "Toyota";
const topSpeedLimit = 155;
const horsepowerBoost = 20;
const currentYear = 2026;

const cars = [
  { name: "GT86", horsepower: 200, engine: { type: "boxer" } },
  { name: "GR86", horsepower: 228, engine: null },
  { name: "GR Supra", horsepower: 382, engine: { type: "inline-6" } },
  { name: "GR Corolla", horsepower: 300, engine: { type: "turbo" } },
];

// 5 Arrow function
const addBoost = (hp) => hp + horsepowerBoost;

const isPowerful = (hp) => hp > 250;

const shout = (name) => `${name.toUpperCase()}`;

const describeCar = (car) => {
  const { name, horsepower } = car; // destructured object 
  return `${shout(name)} makes ${horsepower} hp`;
};

const nextModelYear = (year) => year + 1;

const specSheet = { drivetrain: "RWD", seats: 4 };

// 10 LET declarations
let totalCars = cars.length;
let totalHorsepower = 0;
let averageHorsepower = 0;
let weakestHp = Infinity;
let strongestHp = -Infinity;
let powerfulCount = 0;
let regularCount = 0;
let counter = 0;
let lineupList = [];
let boostedCars = [];

console.log(`List and Details about ${brand} Sports Cars!`);
console.log(`Cars in lineup: ${totalCars}`);

// Destructured arrays
const hpPair = [200, 228];
const [gt86Hp, gr86Hp] = hpPair; 
console.log(`GT86: ${gt86Hp} hp, GR86: ${gr86Hp} hp`);

const rankedHp = [382, 300, 228, 200];
const [topHp, secondHp, ...restHp] = rankedHp; 
console.log(`Top hp: ${topHp}, second: ${secondHp}, rest: ${restHp}`);

const names = cars.map((c) => c.name);
const [flagship, ...otherCars] = names; 
console.log(`Flagship: ${flagship}, others: ${otherCars}`);

// Destructured objects
const { name: supraName, horsepower: supraHp } = cars[2]; 
console.log(`${supraName} has ${supraHp} hp`);

const { drivetrain, seats } = specSheet; 
console.log(`Drivetrain: ${drivetrain}, seats: ${seats}`);

// Loop
for (counter = 0; counter < cars.length; counter++) {
  const car = cars[counter];
  totalHorsepower += car.horsepower;

  if (car.horsepower < weakestHp) weakestHp = car.horsepower;
  if (car.horsepower > strongestHp) strongestHp = car.horsepower;

  if (isPowerful(car.horsepower)) {
    powerfulCount++;
  } else {
    regularCount++;
  }

  // Optional chaining usage
  const engineType = car.engine?.type ?? "unknown";
  console.log(`${shout(car.name)} engine type: ${engineType}`);

  lineupList.push(describeCar(car));
}

averageHorsepower = totalHorsepower / totalCars;

console.log(`\n Must know ${brand} Cars Information!`);
console.log(`Average horsepower: ${averageHorsepower.toFixed(1)}`);
console.log(`Weakest: ${weakestHp} hp, Strongest: ${strongestHp} hp`);
console.log(`Powerful cars: ${powerfulCount}, Regular cars: ${regularCount}`);

// Arrays using .map()
const boostedHp = cars.map((c) => addBoost(c.horsepower)); // #1
console.log(`Boosted horsepower list: ${boostedHp.join(", ")}`);

boostedCars = cars.map((c) => ({
  ...c,
  horsepower: addBoost(c.horsepower),
})); // #2
console.log(`GT86 boosted: ${boostedCars[0].horsepower} hp`);

// Arrays using .filter()
const strongCars = cars.filter((c) => isPowerful(c.horsepower)); // #1
console.log(`Strong cars: ${strongCars.map((c) => c.name).join(", ")}`);

const naturalEngines = cars.filter((c) => c.engine?.type !== "turbo"); // #2
console.log(`Non-turbo cars: ${naturalEngines.map((c) => c.name).join(", ")}`);

// Arrays using spread operator
const upcoming = ["GR Yaris", "Celica"];
const fullLineup = [...names, ...upcoming]; // #1
console.log(`Full lineup: ${fullLineup}`);

const topTwoHp = [...rankedHp].sort((a, b) => b - a).slice(0, 2); // #2
console.log(`Top two hp values: ${topTwoHp}`);

// Object literals using spread operator
const trackPack = { tires: "sport", exhaust: "sport" };
const supraTrack = { ...cars[2], ...trackPack }; // #1
console.log(`Supra with track pack: ${JSON.stringify(supraTrack)}`);

const nextYearSpec = { ...specSheet, year: nextModelYear(currentYear) }; // #2
console.log(`Next year spec: ${JSON.stringify(nextYearSpec)}`);

// Object literals using optional chaining
const dealer = {
  contact: { phone: "555-0199" },
  getPhone() {
    return this.contact?.phone ?? "N/A"; // #1
  },
};
console.log(`Dealer phone: ${dealer.getPhone()}`);

const buyer = { info: null };
const buyerCity = buyer.info?.city ?? "Unknown";
console.log(`Buyer city: ${buyerCity}`); // optional chaining usage

console.log(`\n Cars and It's Horsepower List`);
lineupList.forEach((line) => console.log(line));
console.log(`\n${brand} has ${totalCars} sports cars ready to drive.`);