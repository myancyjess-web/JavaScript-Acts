const cars = [
  {
    model: "AE86",
    brand: "Toyota",
    type: "Coupe",
    engine: "4A-C 1.6L inline-4",
    horsepower: 112,
    transmission: "5-speed manual",
    description: "A classic Toyota icon known for drifting and rear-wheel-drive fun."
  },
  {
    model: "GT86",
    brand: "Toyota",
    type: "Sports Coupe",
    engine: "2.4L boxer 4-cylinder",
    horsepower: 205,
    transmission: "6-speed manual",
    description: "A modern sports coupe with great handling and a sporty feel."
  },
  {
    model: "GR86",
    brand: "Toyota",
    type: "Performance Coupe",
    engine: "2.4L turbo boxer 4-cylinder",
    horsepower: 228,
    transmission: "6-speed automatic or manual",
    description: "The latest model built for speed, style, and excitement."
  }
];

cars.forEach((car) => {
  console.log("Model: " + car.model);
  console.log("Brand: " + car.brand);
  console.log("Type: " + car.type);
  console.log("Engine: " + car.engine);
  console.log("Horsepower: " + car.horsepower + " HP");
  console.log("Transmission: " + car.transmission);
  console.log("Description: " + car.description);
});
