
myGrades = [100, 100, 90, 20, 78, 94, 86,];
 
myAverage = 0;

for (let i = 0; i < myGrades.length; i++) {

myAverage += myGrades[i];

};

myAverage = myAverage / myGrades.length;

myAverage = Number(myAverage);

console.log("My grade average is " + myAverage);
