

//* var myGrades = [100, 100, 190, -20, 78, 94, 86, 'wee']; *//
 
//* var myAverage = 0; *//

console.log(validNumber());

function validNumber() {
 
myGrades = [100, 100, 90, 20, 78, 94, 86,];
 
myAverage = 0;

    for (let i = 0; i < myGrades.length; i++) {

        if (!Number.isFinite(myGrades[i])) {

        return "Input ", (myGrades[i]), "is invalid";


    } else if (myGrades[i] < 0 || myGrades[i] > 100) {

        return "Input ", (myGrades[i]), "is invalid";


    } else {

        myAverage += myGrades[i];

    };

    };

    myAverage = myAverage / myGrades.length;

    myAverage = Number(myAverage);

    return "My grade average is " + myAverage;

};


//* The loop doesnt stop after all 7 numbers have been added causing myAverage to become assigned 'NaN' *//


//* for (let i = 0; i < myGrades.length; i++) { *//

//* myAverage += myGrades[i]; *//

//* }; *//


//* Fixed by not letting the loop count if there isn't a number provided *//


//* myAverage = myAverage / myGrades.length; *//

//* myAverage = Number(myAverage); *//

//* console.log("My grade average is " + myAverage); *//


//* Right upon opening the console is 'grade average is NaN' *//


