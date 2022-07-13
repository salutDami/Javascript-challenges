'use strict';

// There was a test in your class and you passed it. Congratulations! But you're an ambitious person. You want to know /// if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

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

