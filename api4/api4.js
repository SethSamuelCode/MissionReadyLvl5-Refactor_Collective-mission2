// Calculates discount rate based on age and experience, with input validation
function api4(input) {
    // Validate input: must be an object with integer, non-negative age and experience
    console.log(input);
  if (
    !input ||
    typeof input.age !== "number" ||
    typeof input.experience !== "number" ||
    !Number.isInteger(input.age) ||
    !Number.isInteger(input.experience) ||
    input.age < 0 ||
    input.experience < 0
  ) {
    return { error: "there is an error" };
  }

  const { experience, age } = input;
  let discount_rate = 0;

  // Add 5 if experience is at least 5 years
  if (experience >= 5) {
    discount_rate += 5;
  }
  // Add another 5 if experience is at least 10 years
  if (experience >= 10) {
    discount_rate += 5;
  }
  // Add 5 if age is at least 25
  if (age >= 25) {
    discount_rate += 5;
  }
  // Add another 5 if age is at least 40
  if (age >= 40) {
    discount_rate += 5;
  }

  // Return the calculated discount rate
  return { discount_rate };
}

module.exports = { api4 };
