function calculatePremium(carValue, riskRating) {
    if(carValue == null) {
        throw new Error('Car value is missing');
    }

    if(riskRating == null) {
        throw new Error('Risk rating is missing');
    }

    if(typeof carValue !== 'number' || typeof riskRating !== 'number') {
        throw new Error('Both car value and risk rating must be numbers');
    }

    if(carValue < 0 || riskRating < 0) {
        throw new Error('Car value must be a positive number');
    }

    if(riskRating < 1 || riskRating > 5) {
        throw new Error('Risk rating must be between 1 and 5');
    }

    const yearly = (carValue * riskRating) / 100;
    const monthly = yearly / 12;

    return {
        yearly_premium: parseFloat(yearly.toFixed(2)),
        monthly_premium: parseFloat(monthly.toFixed(2)),
    };
}

module.exports = { calculatePremium };