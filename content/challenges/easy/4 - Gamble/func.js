// profitable gamble is a game that yields a positive net profit
// net profit is calculated in the following manner: net profit = probaliity * prize - cost of playing
// return true if you think you can win
module.exports = (probabilityOfWinning, prize, costOfPlaying) => {
    let netProfit = probabilityOfWinning * prize - costOfPlaying;
    let willBeProfitable;

    if (netProfit > 0) {
        console.log('This will be profitable. Let\'s play!');
        willBeProfitable = true;
        return willBeProfitable;
    } else {
        console.log('I\'ll lose money. I don\'t want to play.');
        willBeProfitable = false;
        return willBeProfitable;
    }
};