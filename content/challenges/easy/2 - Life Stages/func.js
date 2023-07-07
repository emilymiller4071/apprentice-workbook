// return the stage of life a person is in
// depending on their age
//
// Less than 2 is 'Baby'
// Greater than 2 and less than 13 is 'Kid'
// Greater than 13 and less than 19 is 'Teen'
// Greater than 19 and less than 30 is 'Young Adult'
// Greater than 30 is 'Dead'
module.exports = (age) => {

    switch(true) {
        case (age < 2): return 'Baby';            
            break;
        case (age >= 2 && age < 13): return 'Kid';
            break;
        case (age >= 13 && age <= 19): return 'Teen';
            break;
        case (age > 19 && age <=30): return 'Young Adult';
            break;
        case (age > 30): return 'Dead';
            break;
        default: return 'Unknown';
    }
}


