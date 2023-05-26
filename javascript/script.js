"use strict";
// Coding Exercises for JavaScript Variables, Data Types & Operators

// Exercise 1:
// Write a program that calculates the sum of two numbers and displays the result.

// let a = 23,
//   b = 14;
// console.log(a + b);

// Exercise 2:
// Write a program that calculates the area of a rectangle. Prompt the user to enter the length and width of the rectangle and display the result.

// let length = Number(prompt("Enter the length"));
// let width = Number(prompt("Enter the width"));

// console.log("Area of Rectangle: ", length * width);

// Exercise 3:
// Write a program that converts a temperature from Celsius to Fahrenheit. Prompt the user to enter the temperature in Celsius and display the equivalent temperature in Fahrenheit.

// °F = °C × (9/5) + 32.

// let Celsius = Number(prompt("Enter Celsius Value "));
// let Fahrenheit = Celsius * (9 / 5) + 32;
// console.log(Fahrenheit);

// Exercise 4:
// Write a program that checks if a given number is even or odd. Prompt the user to enter a number and display whether it is even or odd.

// let userInput = Number(prompt("Enter the Number"));
// if (userInput % 2 === 0) {
//   console.log("The Given Number is Even Number");
// } else {
//   console.log("The Given Number is Odd Number");
// }

// Exercise 5:
// Write a program that concatenates two strings and displays the result. Prompt the user to enter two strings and display the concatenated string.

// let str1 = prompt("Enter the 1st String");
// let str2 = prompt("Enter the 2nd String");

// console.log(str1.concat(str2));

// Exercise 6:
// Write a program that calculates the average of three numbers. Prompt the user to enter three numbers and display the average.

// let a = Number(prompt("Enter the 1st Number"));
// let b = Number(prompt("Enter the 2nd Number"));
// let c = Number(prompt("Enter the 3rd Number"));
// console.log(`The average of three Number is ${(a + b + c) / 3}`);

// Exercise 7:
// Write a program that checks if a given year is a leap year. Prompt the user to enter a year and display whether it is a leap year or not.

// let year = Number(prompt("Enter the year "));
// if (year % 4 == 0 && year % 100 != 0) {
//   console.log(year + " is a Leap Year");
// } else if (year % 400 == 0) {
//   console.log(year + " is a Leap Year");
// } else {
//   console.log(year + " is not a Leap Year");
// }

// Exercise 8:
// Write a program that swaps the values of two variables. Prompt the user to enter two values, swap them, and display the new values.

// let a = Number(prompt("Enter the 1st Value"));
// let b = Number(prompt("Enter the 2nd Value"));
// console.log(`before swap
// 1st value : ${a}
// 2nd value : ${b}`);
// let temp = a;
// a = b;
// b = temp;
// console.log(`after swap
// 1st value : ${a}
// 2nd value : ${b}`);

// Exercise 9:
// Write a program that calculates the area and circumference of a circle. Prompt the user to enter the radius of the circle and display the area and circumference.

// COC = ((2 * 22) / 7) * r;

// let radius = Number(prompt("Enter the value of radius"));
// console.log(
//   "circumference of circle : " + (((2 * 22) / 7) * radius).toFixed(2)
// );

// Exercise 10:
// Write a program that checks if a given string is a palindrome. Prompt the user to enter a string and display whether it is a palindrome or not.

// let str = prompt("Enter the String");
// let reverseStr = str.split("").reverse().join("");

// if (str === reverseStr) {
//   console.log("The String is palindrome");
// } else {
//   console.log("The String is not palindrome");
// }
