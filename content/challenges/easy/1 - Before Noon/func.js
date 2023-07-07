// Check if the time is before noon
// time is in military time 0-24


module.exports = (hour) => {
    let beforeNoon;
    if (hour < 12) {
        beforeNoon = true;
        console.log('It is before noon.')
        return beforeNoon;
    } else if (hour > 12) {
        beforeNoon = false;
        console.log('It is afternoon.')
        return beforeNoon
    }else if (hour === 12) {
        beforeNoon = false;
        console.log('It is noon.')
        return beforeNoon
    }
}

// Testing times to verify output

console.log(module.exports(0));
console.log(module.exports(12));
console.log(module.exports(22));


/*

This gets the current time, and pads minutes if they are in the single digits.



module.exports = () => { 
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes().toString().padStart(2, '0');
    const currentTime = `The time is currently ${hour}:${minutes}.`;
    let beforeNoon;

    if (hour < 12) {
        beforeNoon = true;
        console.log(currentTime + ' It is before noon.');
        return beforeNoon;
    } else if (hour > 12) {
        beforeNoon = false;
        console.log(currentTime + ' It is after noon.');
        return beforeNoon;
    } else if (hour === 12) {
        beforeNoon = false;
        console.log(currentTime + 'It is noon.');
        return beforeNoon;
    } 
}

console.log(module.exports());

*/