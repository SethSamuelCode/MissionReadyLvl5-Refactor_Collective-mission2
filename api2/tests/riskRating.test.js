const { calculateRiskRating } = require("../functions/riskRating");

test.todo("Check claim history is returned in the correct format");
test.todo("Check claim history for case insensitivity");
test.todo("Claim history includes an empty string and returns a risk rating of 1");
test.todo("Claim history contains Null and returns risk rating of 1");
test.todo("Claim history includes 2 keywords and returns a risk rating of 2");
test.todo("Claim history includes 3 keywords and returns a risk rating of 3");
test.todo("Claim history includes 4 keywords and returns a risk rating of 4");
test.todo("Claim history includes 5 keywords and returns a risk rating of 5");
test.todo("Claim history includes more than 5 keywords and returns a risk rating of 5");
test.todo("Check all keywords are detected in claim history");