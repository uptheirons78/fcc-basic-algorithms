//FFC gives us this funny problem to solve
//We have an array that contains four arrays of numbers and
//we must write a function able to return us an array of the largest numbers of those arrays
//this is the array FCC gives us: [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
//so our function must return an array equal to this: [5, 27, 39, 1001];
//Now that we know what to do, how can we do it?
//To find out the largest numbers in those arrays, we surely need to work on any of them
//We have different options: for loop, for of, forEach() and, according to me the best one, map()
//The map() method creates a new array with the results of calling a provided function on every element in the calling array
//we only need to decide what this function must do. EASY! Think a moment about it: what we need to find ?
//THE LARGEST NUMBER IN ANY OF THOSE ARRAY !!!! YES !
//Think again: how can we find it out? EASY again!
//Sorting the array starting from the highest number inside it and going down to the lowest one.
//Does JS give us a free way to do it ? YES! sort()

//We met before sort(). It is a powerful tool JS gives us to work with arrays, but it is really hard to understand it.
//It is WEIRD. I suggest you to read this good article: http://devdocs.io/javascript/global_objects/array/sort
//Working with numbers if you want to sort your array starting from the lowest you need to use it this way:
//[4, 5, 1, 3].sort((a, b) => {return a - b}) that will give you back [1,3,4,5];
//If you want to sort it starting from the highest number, use it this way, instead:
//[4, 5, 1, 3].sort((a, b) => {return b - a}) that will give you back [5,4,3,1];

//Going back to our problem: once sorted all the arrays starting from the highest numbers, what we need to do?
//We need to collect only the highest number of any of them! That now is the first number of any of those arrays;
//Simply: Looping again over those array we must collect only the first numbers of them and create a new array
//map() again is our best friend. It loops over an array, return a new one with the results of a provided function! SO GREAT!
//The provided function must return back only the first number of any array ? How ? Targeting it like this: item[0]! EASY
//Let's write our function
function largestNumbersInArrays(arr) {
    //we create a var that will contain our sorted arrays
    const sortedArrays = arr.map((item) => {//we map over arr and sort the numbers inside the arrays it contains
        return item.sort((a,b) => {
            return b-a;//this is the way to sort starting from the highest number
        });
    });//now the result is like this: [[ 5, 4, 3, 1 ],[27, 26, 18, 13],[39, 37, 35, 32],[1001, 1000, 857, 1]]
    //then, let's write down a variable containing only the highest numbers in those sorted arrays
    //We map sortedArrays and grab only the first numbers in those arrays
    const largestNumbers = sortedArrays.map(item => item[0]); //[ 5, 27, 39, 1001 ]
    return largestNumbers; //and finally return the result!
}

//This is a one line version using no variable and ES6 features
function largestOfFour(arr) {
   return arr.map(item => item.sort((a,b) => {return b-a})[0]);
  }

  const a = largestNumbersInArrays([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  const b = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  console.log(a);
  console.log(b);


