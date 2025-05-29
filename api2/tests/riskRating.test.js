const { calculateRiskRating } = require("../functions/calculateRiskRating");

describe("calculateRiskRating", () => {

    test("Check all keywords are detected in claim history", () => {
        const claimHistory = "collide crash scratch bump smash";
        const result = calculateRiskRating(claimHistory);
        expect(result).toBe(5);
    });

    test("Check invalid claim history throws an error", () => {
        [123, {}, [], undefined].forEach(invalidInput => {
        expect(() => calculateRiskRating(invalidInput)).toThrow("Invalid input format");
    });
    });

    test("Check claim history for case insensitivity", () => {
        const claimHistory = "Collide, collide, Crash, crash, scratch, Scratch, Bump, bump, Smash, smash";
        const result = calculateRiskRating(claimHistory);
        expect(result).toBe(5);
    });

    test("Claim history includes an empty string and returns a risk rating of 1", () => {
        const claimHistory = "";
        const result = calculateRiskRating(claimHistory);
        expect(result).toBe(1);
    });

    test("Claim history has no keywords and returns a risk rating of 1", () => {
        const claimHistory = "no keywords are in this string";
        const result = calculateRiskRating(claimHistory);
        expect(result).toBe(1)

    })
    test("Claim history includes different keyword variants and returns a risk rating of 5", () => {
        const claimHistory = "collided, collides, crashed, crashes, scratch, scratches, scratched, bumped, bumps, smashed, smashes";
        const result = calculateRiskRating(claimHistory);
        expect(result).toBe(5);
    });

    test("Claim history includes 2 keywords and returns a risk rating of 2", () => {
        const claimHistory = "crash bump";
        const result = calculateRiskRating(claimHistory);
        expect(result).toBe(2);
    });

    test("Claim history includes 3 keywords and returns a risk rating of 3", () => {
        const claimHistory = "crash bump smash";
        const result = calculateRiskRating(claimHistory);
        expect(result).toBe(3);
    });

    test("Claim history includes 4 keywords and returns a risk rating of 4", () => {
        const claimHistory = "crash bump smash scratch";
        const result = calculateRiskRating(claimHistory);
        expect(result).toBe(4);
    });

    test("Claim history includes 5 keywords and returns a risk rating of 5", () => {
        const claimHistory = "crash bump smash scratch collide";
        const result = calculateRiskRating(claimHistory);
        expect(result).toBe(5);
    });

    test("Claim history includes more than 5 keywords and returns a risk rating of 5", () => {
        const claimHistory = "crash crash bumped smash scratches collide";
        const result = calculateRiskRating(claimHistory);
        expect(result).toBe(5);
    });

    test("Checks the result is returned as a number", () => {
        const result = calculateRiskRating("crash");
        expect(typeof result).toBe("number");
    });

     test("Checks if claim history input is null and throws error ", () => {
        expect(() => calculateRiskRating(null)).toThrow("Invalid input format");
    });

});