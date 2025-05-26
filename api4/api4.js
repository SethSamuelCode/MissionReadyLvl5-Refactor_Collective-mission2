function api4(input) {
  const { experience, age } = JSON.parse(input);
  let discount_rate = 0;

  if (experience >= 5) {
    discount_rate += 5;
  }
  if (experience >= 10) discount_rate += 5;

  if (age >= 25) {
    discount_rate += 5;
  }
  if (age >= 40) {
    discount_rate += 5;
  }

  return JSON.stringify(`{ discount_rate: ${discount_rate} }`)
}
const testData = JSON.stringify({ experience: 5, age: 25 });

api4(testData);

module.exports = { api4 };
