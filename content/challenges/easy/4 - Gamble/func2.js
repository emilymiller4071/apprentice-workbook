// profitable gamble is a game that yields a positive net profit
// net profit is calculated in the following manner: net profit = probaliity * prize - cost of playing
// return true if you think you can win

module.exports = (probabilityOfWinning, prize, costOfPlaying) => {
    let profitableGamble = (probabilityOfWinning * prize - costOfPlaying) > 0;

    return profitableGamble;
}