function cakes(recipe, available) {
  let numbers = [];
  for (const ingredient in recipe) {
    if (available.hasOwnProperty(ingredient)) {
      numbers.push(available[ingredient] / recipe[ingredient]);
    } else {
      return 0;
    }
  }
  return Math.floor(
    numbers.sort((a, b) => {
      return a - b;
    })[0]
  );
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
