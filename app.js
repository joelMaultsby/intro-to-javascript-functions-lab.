/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
const isAdult = (age) => {
    if (age>=18){
        return "adult";
    } else {
        return "minor";
    }
}


console.log('Exercise 2 Result:', isAdult(21));

  /*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/




const isCharAVowel = (x) => {
  if (x=='a') {
    return true;
  }
  else if (x=='i'){
      return true;
  }
   else if (x=='e'){
      return true;
  }
   else if (x=='o'){
      return true;
  }
   else if (x=='u'){
      return true;
  }
  else {
    return false;
  }
}

console.log('Exercise 3 Result:', isCharAVowel("o"));

const generateEmail = (x,y) => {
  return x + '@' + y;
}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));

const greetUser = (x,y) => {
  return "Good " + y + ', ' + x +"!";
}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));

const maxOfThree = (x,y, z) => {
   if (x >= y && x >=z) {
    return x;
  } else if(y >= x && y >=z) {
    return y;
  } else{
      return z;
  }
}
console.log('Exercise 6 Result:', maxOfThree(5, 4, 8));

const calculateTip = (x,y) => {
  return x * (y/100);
}
console.log('Exercise 7 Result:', calculateTip(50, 20));

const convertTemperature = (x,y) => {
  if (y =="C") {
    return x * 9 / 5 + 32;
  } else {
    return (x - 32) * 5 / 9;

  }
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));

const basicCalculator = (x,y,z) => {
  if (z =="subtract") {
    return x-y;
  } else if (z== "add") {
    return x + y;
  } else if (z== "multiply") {
    return x * y;
  } else if (z== "divide") {
    return x /y;
  }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide"));



