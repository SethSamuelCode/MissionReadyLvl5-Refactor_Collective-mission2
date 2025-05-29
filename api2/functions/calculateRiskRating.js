//___ ARRAY ___
//-- This array holds the keywords that will be used to calculate the risk rating
//... based on how many times they appear in the claim history.
const keywords = ["collide", "crash", "scratch", "bump", "smash"];

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
    if (claimHistory === null || claimHistory === undefined || typeof claimHistory !== "string") {
        throw new Error("Invalid input format");
    }

    if (claimHistory.trim() === "") {
        console.log("Claim history is empty, returned risk rating 1")
        return 1;
    }

    const claimHistoryLower = claimHistory.toLowerCase();

    // let totalMatches = keywords.reduce((count, keyword) => 
    // count + (claimHistoryLower.match(new RegExp(`${keyword}`, "gi")) || []).length, 0)

    let totalMatches = keywords.reduce((count, keyword) => {
        const matches = claimHistoryLower.match(new RegExp(`\\b${keyword}\\w*\\b`, "gi")) || [];
        if (matches.length > 0) {
            console.log(`Keyword "${keyword}" matches:`, matches);
        }
        return count + matches.length;
    }, 0);

    let riskRating;
    if (totalMatches === 0) riskRating = 1;
    else if (totalMatches === 1 || totalMatches === 2) riskRating = 2;
    else if (totalMatches === 3) riskRating = 3;
    else if (totalMatches === 4) riskRating = 4;
    else riskRating = 5;

    console.log("Total matches found:", totalMatches);

    return riskRating;

}

module.exports = { calculateRiskRating };