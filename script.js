// object
// const student = {
// fullName : "ali",
// class : 4,
// rank : 2,
// section : "B" ,
// }
// console.log(student.fullName);

// conditional statement
// let number = 5;
// if (number % 2 === 0) {
//     console.log(number + " "+"is even number");   
// }
//  if  (number % 2 === 1) {
//     console.log(number + " "+"is even number");
// }


// switch statemnet
// let exp = "orange";
// switch (exp) {
//     case "mango":
//         console.log("mango is not on the expresion");
//         break;
//     default:
//         console.log("orange is the right expresion");
//         break;
// }

// conditional statement with prompt
// let studentScore = +prompt("Enter your score");
// let grade;
   
// if (studentScore >= 90) {
//    grade = "A+"
// } else if (studentScore >= 75 && studentScore <= 90 ) {
//    grade = "A"  
// } else if (studentScore >= 65 && studentScore <= 75 ) {
//    grade = "B"   
// } else if (studentScore >= 50 && studentScore <= 65 ) {
//     grade = "C" 
// } else if (studentScore >= 40 && studentScore <= 50 ) {
//     grade = "D"
// } else if (studentScore >= 0 && studentScore <= 40 )  {
//      grade = "Fail"
// }
//  console.log("According to your score, your grade is"+" "+grade);
 
// ternary operators
// let age = 18;
// console.log(age >= 18 ? "adult" : "not adult");

// for loop
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum += i;
//     // sum = sum + i
// }
// console.log("sum is "+sum);


// Q1. prompt the user to enter their full name. 
// let userName = prompt("Enter your name");
// console.log(`@${userName}123`);


// for of loop
// let arr = [22,66,99,77,33]
// arr[1] = 55;
// for (const i of arr) {
// console.log(i);
// }


// Q2. find the average marks of entire class.

// let marks = [49,66,90,77,53,72];

// let sum = 0;

// for (let val of marks) {
     
//      sum += val;
// }

// let avg = sum / marks.length;

// console.log(`average marks of the class = ${avg}`);


// let item = [250,645,300,900,50]
// let count = 0;
// let offer;

// for (let i = 0; i < item.length; i++) {

//     console.log(`value at index ${count} = ${item[i]}`);

//     offer = item[i] /10;

//      item[i] -= offer

//     console.log(`value after offer = ${item[i]}`);

//     count++;
// }


// let fruits = ["orange","mango","papaya","bnana"];
// let vagitabel = ["lemon","potato","tomato","onion"]
// let moreFruits = ["peach","kivi","melon"]

// let allFruits = fruits.concat(moreFruits,vagitabel)

//  console.log(allFruits);
 

// let companies = ["bloomberg","microsoft","uber","google","IBM","Netflix"]
// console.log(companies);

// companies.shift()
// console.log(companies);

// companies.splice(2,"ola")
// console.log(companies);

// companies.push("amazon")
// console.log(companies);

// find vovel 
// let count = 0;
// function vovelCount(str) {
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ) {
//             count ++;
//         }
//     }
//     return count;
// }
// vovelCount("mariyam");
// console.log(`there are ${count} vovels`);


// return the statement again with arrow function and for loop
// let arrowCount = 0;

// const countVovel = (str) =>  {

// let vovels = "aeiou";

// for (let i = 0; i < vovels.length; i++) {

//     for (const char of str) {

//         if (char === vovels[i]) {

//             arrowCount ++;
//         }
//     }
// }
//     return arrowCount;
// }
// countVovel("saylani mass IT treaning");
// console.log(`there are ${arrowCount} vovels`);

// find how many a in karachi
// let counting = 0;

// function findA (str) {

// for (const char of str) {
//     if( char === "a")
//         {
//         counting ++;
//         }
//                         }
//                    }
// findA("karachi")
// console.log(`there are ${counting} a in karachi`);


// function sum(x,y) {
//     s = x+y;
//     return s;
// }
// let val = sum(4,7);
// console.log(val); // 11


// arrow function
// const arrowSum = (a,b) => {
//     console.log(a +b);
// }
// arrowSum(14,9); // 23;

// for each method
// let cities = ["karachi","islamad","lahore","faislabad"]
// cities.forEach((val, idx)  => {
//     console.log(val.toUpperCase(), idx, cities);
// });

// frint the square of each value usng for each loop.
// let numbers = [2,7,9,5,12];
// numbers.forEach((sqr) => {
// console.log(`the square of ${sqr } is ${sqr * sqr}`);
// });

// we can also do like 
// let nums = [2, 5, 8, 12];

// let calcSquare = (num) => {

//     console.log(num * num);
// };
// nums.forEach(calcSquare); 

// genrate the prompt 
// let num = prompt ("Enter some numbers and get square of numbers");
// for (let i = 0; i < num.length; i++) {

//     console.log(`square of ${num[i]} is = ${num[i] * num[i]}`);
// };

// map method
// let nums = [67, 52, 39];

// let newArr = nums.map((val) => {
// return val * val;
// });

// console.log(newArr);

// filter method find even numbers
// let arr = [ 2, 5, 6, 7, 67, 52];

// let evenArr = arr.filter((val) => {
// return val % 2 === 0;
// });
// console.log(` ther are ${evenArr} are even numbers in arry`);

// filter method find odd numbers
// let arry = [ 2, 5, 6, 7, 67, 52];

// let oddArr = arry.filter((val) => {
// return val % 2 !== 0;
// });
// console.log(` ther are ${oddArr} are even numbers in arry`);


// const output = arr.reduce((res,curr) => {
//     return res + curr
// });
// console.log(output);


// find greater number array
// let array = [1,9,3,4,8];

// const answer = array.reduce((pre,cur) => {
//     return pre > cur ? pre :cur ;
// });
// console.log(answer);

// filter out the marks of student that scored 90

// let marks = [87,93,99,63,35];

// let toppers = marks.filter((val) => {
//     return val > 85 ;
// });
// console.log(toppers);


// gerate a prompt for arry if user enter 5 start arry from 1 to 5;

let userInput = +prompt("Enter a number :");
let arr = [];
for (let i = 1; i <= userInput; i++) {
    arr[i - 1] = i;
}
console.log(arr);

// get the sum of arr

let sum = arr.reduce((pre, curr) => {
    return pre + curr ;
    });
    console.log(sum);

    // get the fectorial of arr

let fectorial = arr.reduce((pre, curr) => {
    return pre * curr ;
    });
    console.log(fectorial);





















































