//___ ARRAY ___
//-- This array holds the keywords that will be used to calculate the risk rating
//... based on how many times they appear in the claim history.
const keywords = ["collide", "crash", "scratch", "bump", "smash"];

//___ CALCULATE RISK FUNCTION ___

//___ VALIDATION ___
//-- Uses regex with word boundaries to detect all keyword variants and prevent false matches
//-- Ignores case sensitivity for reliable matching.

//___ COUNTING MATCHES ___
//-- Iterates through the keyword list and searches for matches in the claim history.
//-- Collects the matches and their occurrences then logs them to the console so you can see
//... whether every keyword and their variance has been detected properly.

//___ RETURN ___
//-- Updates totalMatches with the number of keywords 
//-- Outputs log details
//-- Converts the final count to a risk rating based on a scale.



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