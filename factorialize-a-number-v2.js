//This second solution is surely longer and based on array reduce() method
//so this is also just a little bit harder to understand.

function factorialize(num) {
    //first thing first, as in the solution based on recursion
    //if the number is equal or less than 0 our program return 1
    if(num <= 0) {
        return 1;
    }
    //second step we create an empty array
    //I choose to use ES6 variables declaration, 
    //because it is time to learn ES6 and use it!
    const arr = [];
    //with a for loop we push values in the our empty array
    //starting from 1 till num value
    for(let i = 1; i <= num; i++) {
        arr.push(i); 
        //if num = 5 (example)
        //our array after the loop is equal to: [1,2,3,4,5]
    }
    //here the hardest part!
    //we loop over our array elements with REDUCE method
    //it runs over each element the callback function we provide it
    //starting from an initialValue (we can provide it, or it is the first element in the array)
    //this is literally how it works here: (num = 5 example)
    //[1,2,3,4,5].reduce((acc, num) => {return acc*num});
    //it starts with acc = 1 and multiplies it for num = 1 so new acc = 1*1 = 1
    //then acc = 1 it is multiplied for num = 2 (second value in the array)
    //so acc = 1 * 2 = 2
    //again acc now equal 2 is multiplied for the third value in the array 3
    //so acc = 2 * 3 = 6 and so on....till the final result = 120
    //Surely you can find a better explanation on MDN or here:
    //http://devdocs.io/javascript/global_objects/array/reduce
    //Array reduce is one of the most powerful weapon in our JS KIT ! 
    return arr.reduce((acc, num) => {
        return acc*num
    });
}

//Well written solution with no comments
function factorializeIt(num) {
    if(num <= 0) {
        return 1;
    }
    const arr = [];
    for(let i = 0; i <= num; i++) {
        arr.push(i);
    }
    return arr.reduce((acc, num) => {
        return acc * num;
    });
}

//And, last, but not least, one solution with no arraw functions
function factorializeItWithNoArrow(num) {
    if(num <= 0) {
        return 1;
    }
    const arr = [];
    for(let i = 0; i <= num; i++) {
        arr.push(i);
    }
    return arr.reduce(function(acc, num) {
        return acc * num;
    });
}

const recursionFive = factorialize(5);
const recursionThree = factorialize(3);
const recursionZero = factorialize(0);
console.log(recursionFive);
console.log(recursionThree);
console.log(recursionZero);