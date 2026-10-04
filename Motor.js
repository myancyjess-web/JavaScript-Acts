// Simple Yamaha Sniper V1-V3 info
const sniperModels = [
  {
    version: "V1",
    engine: "155cc, air-cooled, 4-stroke",
    power: "15 HP",
    transmission: "Automatic CVT",
    description: "The first Sniper version known for its sporty look and practical use."
  },
  {
    version: "V2",
    engine: "155cc, air-cooled, 4-stroke",
    power: "15 HP",
    transmission: "Automatic CVT",
    description: "Improved styling and a more modern design for everyday riders."
  },
  {
    version: "V3",
    engine: "155cc, liquid-cooled, 4-stroke",
    power: "18.4 HP",
    transmission: "Automatic CVT",
    description: "The latest version with better performance, efficiency, and newer features."
  }
];

sniperModels.forEach((bike) => {
  console.log("Version: " + bike.version);
  console.log("Engine: " + bike.engine);
  console.log("Power: " + bike.power);
  console.log("Transmission: " + bike.transmission);
  console.log("Description: " + bike.description);
});
