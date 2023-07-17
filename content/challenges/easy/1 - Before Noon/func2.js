// Check if the time is before noon
// time is in military time 0-24

module.exports = (hour) => {
    let isBeforeNoon = hour < 12;

    console.log(isBeforeNoon ? 'It is before noon.' : 'It is after noon.');

    return isBeforeNoon;
}