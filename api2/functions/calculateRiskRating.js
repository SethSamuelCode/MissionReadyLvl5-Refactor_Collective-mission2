//___ ARRAY ___
//-- This array holds the keywords that will be used to calculate the risk rating
//... based on how many times they appear in the claim history.
const keywords = ["collide", "crash", "scratch", "bump", "smash", ""];

//___ CALCULATE RISK FUNCTION ___

//___ VALIDATION ___
//-- Checks if the claim history is provided and is a string 
//...otherwise it returns an error message.

//___ CASE INSENSITIVITY ___
//-- Converts the claim history to lowercase.

//___ RETURN ___
//-- Maps the matched keywords to a scale and returns a risk rating based on the number of keywords found.
//-- No keyword found returns a risk rating of 1.
//-- For all keywords in the claim history, count how many times they appear
//...and return the total count as the risk rating in the scale.

function calculateRiskRating(claimHistory) {
    if (!claimHistory || typeof claimHistory !== "string") {
        throw new Error("Invalid input format");
    }

    const claimHistoryLower = claimHistory.toLowerCase();

    let matchedKeywords = keywords.filter(keyword =>
        claimHistoryLower.includes(keyword)
    ).length;

    if (matchedKeywords === 0) return 1;
    if (matchedKeywords === 1 || matchedKeywords === 2) return 2;
    if (matchedKeywords === 3) return 3;
    if (matchedKeywords === 4) return 4;
    if (matchedKeywords >= 5) return 5;
}

module.exports = { calculateRiskRating };