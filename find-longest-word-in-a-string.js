//To solve the given problem, we need to find the longest word
//inside a provided string. 
//Here there is an example of a string
//The longest word in this case is surely the word "longest"
//so our function must return 7 as result
const string = 'find the longest word in a string';

function findLongestWord(str) {
    //FCC suggest us that there is a way to find the length of a string:
    //string.length method, but if we use it on the given str it will return
    //the length of the entire string! In our case 33. We do not need it now!
    //What can we do ? 
    //We need the length of any single word in the string.
    //We need to loop over any word of the string and find its length, but
    //there is no way to loop over a string, but we can loop over any item of an array, so....
    //let's split our string and transform it in a beautiful array (I really love arrays!)
    //Attention: we need to split it at the white spaces with ' ' inside brackets.
    const splittedString = str.split(' '); //[ 'find', 'the', 'longest', 'word', 'in', 'a', 'string' ]
    //Now, we have an array of words and we need to transform it in an array of word length,
    //it means an array of numbers.
    //It means we need to loop over each element of the array and find out its length
    //I know what you're thinking: "Easy! Let's use the for loops over the array". You're right
    //BUT
    //I want to show you an incredible arrays method. The one I really love.
    //MAP
    //it loops over any items inside the array and give you back a new array the elements of which
    //are modified by the callback function you provide to map.
    //EXAMPLE: we have the array [1,2,3] and we want to transform it in [2,4,6] doubling each item of the original array
    //this is the solution: 
    //[1,2,3].map(function(item) {
        //return item * 2;
    //});
    //map loops over the array and double each item thank to the callback function we gave it
    //In our case we need the length of any words in the array...so we use: item.length 
    const arrayWithWordsLength = splittedString.map(function(item) {
        return item.length; //[ 4, 3, 7, 4, 2, 1, 6 ]
    });
    //We finally have the length of each word in the array.
    //How can we find the longest one?
    //Another great array method: SORT.
    //We need to sort the array from the highest value to the lowest, so at index 0 we will have the longest word!
    const sortedArray = arrayWithWordsLength.sort(function(a, b) {
        return b - a; //[ 7, 6, 4, 4, 3, 2, 1 ]
    });
    //to find out how sort works, read this article on DevDocs:
    //http://devdocs.io/javascript/global_objects/array/sort
    //I can't explain it better
    //Now it's easy! Let's grab the value at index 0 and we'll get the longest word in a string!
    return sortedArray[0];
}

//Version without comment:
function findLongestWordVersion2(str) {
    const splittedString = str.split(' ');
    const arrayWithWordsLength = splittedString.map(function(item) {
        return item.length;
    }); 
    const sortedArray = arrayWithWordsLength.sort(function(a,b) {
        return b - a;
    });
    return sortedArray[0];
}

//One line version
function findLongestWordVersion3(str) {
    return str.split(' ').map(item => item.length).sort((a,b) => {return b-a})[0];
}


console.log(findLongestWord(string)); //[7]
console.log(findLongestWordVersion2(string)); //[7]
console.log(findLongestWordVersion3(string)); //[7]