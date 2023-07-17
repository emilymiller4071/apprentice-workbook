// You are the cashier at a movie theater
// Only sell tickets under the following condition
// if the customer has enough money for a ticket 8$
// if the movie is not full (true or false)
// if the rating (PG, R) is R and the customer is 17 or older OR a parent is with them

// Return True or False in every situation
module.exports = (customerMoney, isMovieFull, rating, age, isParentWith) => {
    let willSellTicket;

    if (customerMoney >= 8 && !isMovieFull) {
        if ((rating === 'PG' || rating === 'R') && (age >= 17 || isParentWith)) {
            console.log('I can sell a ticket.')
            willSellTicket = true;
            return willSellTicket;
        } else {
            console.log('I cannot sell a ticket.')
            willSellTicket = false;
            return willSellTicket;
        }
    } else {
        console.log('I cannot sell a ticket.')
        willSellTicket = false;
        return willSellTicket;
    }
}