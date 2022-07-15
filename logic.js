'use strict';

/* There was a test in your class and you passed it. Congratulations! But you're an ambitious person. You want to know /if you're better than the average student in your class.

 You receive an array with your peers' test scores. Now calculate the average and compare your score!

 Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
*/

// Solution
function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum = sum + classPoints[i];
  }
   let averageScore = sum / classPoints.length
   if (yourPoints > averageScore) {
     return true;
   } else {
     return false;
   }
}

betterThanAverage([2,3,4,5], 10);

console.log(betterThanAverage([2,3,4,5], 10));


/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

// Solutions 
function abbrevName(name){
  const fullName = name.split(' ');
  const initials = fullName.shift().charAt(0) +  '.' + fullName.pop().charAt(0);
  return initials.toUpperCase();
  }
  
  console.log(abbrevName("Stephen Ikuomola"));





  //  Solutions 
function countPositivesSumNegatives(input) {

 if (input.length < 1 || input === null ) {
   return []
 } 

 let arrayNew = [0, 0]

 for (let i = 0; i < input.length; i++) {
   if (input[i] > 0) {
    arrayNew[0] = arrayNew[0] + 1;
   } else if (input[i] < 0) {
    arrayNew[1] = arrayNew[1] + input[i];
   }
 }
 return arrayNew;
}


const dataset = countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
console.log(dataset);


/* 

Given an array of forecasted maximun temperatures, the thermometer display a string with given temperature. Example [17, 21, 23] will print "... 17°C in 1 days ... 21°C in 2 days ... 23°C in 3 days ..."

1. Create a function that will take in an array and logs a string like the above to the console. Try it for both datasets.
2. Use problem-solving framework: Understand the problem and break into sub-problems.

[17, 21, 23];
[12, 5, -5, 0, 4];

*/ 


// Solution 

let temperatureData = [17, 21, 23];

temperatureData.forEach((printforecast,i) =>{
  const result = (`... ${printforecast}°C in ${(i + 1)} days`);
  console.log(result); 
}) 


// const data1 = [12, 5, -5, 0, 4];
// const data2 = [17, 21, 23];


// const printforecast = function(arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}°C in ${i + 1}  days ...`;
//   }
//   console.log('...' + str);
// };

// printforecast(data2);



