//I found two ways to factorialize a number
//In this one we will use "recursion".
//First: what does factorialize mean? 
//As suggested in FCC:
//"a factorial is the product of all positive integers less than or equal to n";
//An example is worth 1000 words, so:
//Factorial of 5 = 5*4*3*2*1 = 120
//Factorial of 3 = 3*2*1 = 6
//Attention! We must remember to tell our program => if (num <= 0) return 1 ....
//instead the result will always be equal to 0 !!! and we don't want it!
//Second: what the hell is "RECURSION" ???
//One of the thousands of definitions I found on my way to solve this algorithm:
//"Recursion is the process of defining a problem (or the solution to a problem) 
//in terms of (a simpler version of) itself."
//Here a link with a good explanation: 
//https://www.cs.utah.edu/~germain/PPS/Topics/recursion.html

//Finally our function
function factorialize(num) {
    //FIRST: tell our program that if num <= 0 it must return 1
    if(num <= 0) { //we can also use if(num < 1)
        return 1;
    }
    //SECOND: use recursion...here the steps for factorial of 5:
    //one: 5 * 4 it returns 20
    //two: 20 * 3 it returns 60
    //three: 60 * 2 it returns 120
    //four: 120 * 1 it returns 120 and stops calling itself
    //...because of the if statement 
    return num * factorialize(num - 1);
  }
  
const recursionFive = factorialize(5);
const recursionThree = factorialize(3);
const recursionZero = factorialize(0);
console.log(recursionFive);
console.log(recursionThree);
console.log(recursionZero);