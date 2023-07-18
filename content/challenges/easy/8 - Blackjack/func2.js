// Create a function that takes an array of card numbers and checks if the 
// sum of their value exceeds 21. 
// If the sum exceeds 21, return true and if the sum is under or equal to 21, 
// return false. Values of the cards are as follows:

// 2-10 are their value.
// J-K (face cards) count as 10.
// Aces count either as 1 or 11 - play conservatively, so that if giving an ace a 
// value of 11 causes you to lose and 1 allows you to win, then go with 1.

module.exports = (cards) => {

    const cardValues = {
        'J' : 10,
        'Q' : 10,
        'K' : 10,
        'A' : 11
    }

    let cardTotal = 0;
    let numOfAces = 0;

    for (const card of cards) {

        if (card in cardValues) {
            cardTotal += cardValues[card];

            if (card === 'A') {
                numOfAces++;
            }
        } else {
            cardTotal += parseInt(card);
        }
    }

    while (cardTotal > 21 && numOfAces > 0) {
        cardTotal -= 10;
        numOfAces--;
    }
    return cardTotal > 21;
}