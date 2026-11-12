
myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;

//* The loop doesnt stop after all 7 numbers have been added causing myAverage to become assigned 'NaN' *//

for (let i = 0; i === myGrades.length; i++) {

myAverage += myGrades[i];

}

//* Fixed by not letting the loop count if there isn't a number provided *//

myAverage = myAverage / myGrades.length;

myAverage = Number(myAverage);

console.log("My grade average is " + myAverage);

//* Right upon opening the console is 'grade average is NaN' *//


