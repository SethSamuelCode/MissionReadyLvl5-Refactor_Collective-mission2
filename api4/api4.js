// Calculates discount rate based on age and experience, with input validation
function api4(input) {
  // Log the input for debugging
  console.log(input);

  let inputError = false;

  // Input validation with detailed error logging
  if (!input) {
    inputError = true;
    console.log("ERROR: input is blank");
  }
  // Check if age is a number
  if (typeof input.age !== "number") {
    inputError = true;
    console.log("ERROR: age is not a number");
  }
  // Check if experience is a number
  if (typeof input.experience !== "number") {
    inputError = true;
    console.log("ERROR: experience  is not a number");
  }
  // Check if age is an integer
  if (!Number.isInteger(input.age)) {
    inputError = true;
    console.log("ERROR: age is not an integer");
  }
  // Duplicate check for age integer (can be removed)
  if (!Number.isInteger(input.age)) {
    inputError = true;
    console.log("ERROR: age is not an integer");
  }
  // Check if experience is an integer
  if (!Number.isInteger(input.experience)) {
    inputError = true;
    console.log("ERROR: number is not an integer");
  }
  // Check if age is negative
  if (input.age < 0) {
    inputError = true;
    console.log("ERROR: age is less less then 0");
  }
  // Check if experience is negative
  if (input.experience < 0) {
    inputError = true;
    console.log("ERROR: experience is less then 0");
  }

  // If any input error was found, return error object
  if (inputError) {
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
