// Create a function that takes an array of card numbers and checks if the 
// sum of their value exceeds 21. 
// If the sum exceeds 21, return true and if the sum is under or equal to 21, 
// return false. Values of the cards are as follows:

// 2-10 are their value.
// J-K (face cards) count as 10.
// Aces count either as 1 or 11 - play conservatively, so that if giving an ace a 
// value of 11 causes you to lose and 1 allows you to win, then go with 1.

module.exports = (cards) => {
    let cardTotal = 0;
    let numOfAces = 0;

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];

        if (card === 'J' || card === 'Q' || card === 'K') {
            cardTotal += 10;
        } else if (card === 'A') {
            cardTotal += 11;
            numOfAces++;
        } else {
            cardTotal += parseInt(card);
        }
    }
        while (cardTotal > 21 && numOfAces > 0) {
            cardTotal -= 10;
            numOfAces--;
        }

        return cardTotal > 21;
    
};