// return the stage of life a person is in
// depending on their age
//
// Less than 2 is 'Baby'
// Greater than 2 and less than 13 is 'Kid'
// Greater than 13 and less than 19 is 'Teen'
// Greater than 19 and less than 30 is 'Young Adult'
// Greater than 30 is 'Dead'
module.exports = (age) => {

    let stageOfLife = '';

    if (age < 2) {
        stageOfLife = 'Baby';
    } else if (age >=2 && age < 13) {
        stageOfLife = 'Kid';
    } else if (age >=13 && age < 20) {
        stageOfLife = 'Teen';
    } else if (age >= 20 && age < 30) {
        stageOfLife = 'Young Adult';
    } else if (age >= 30) {
        stageOfLife = 'Dead';
    } else {
        stageOfLife = 'Unknown';
    }
    return stageOfLife;
}


