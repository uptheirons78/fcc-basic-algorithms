//We need to return the provided string with the first letter of any word capitalized
//so we need to work on any word of the string. There is only a way to do it: transform the
//string in an array. 
function titleCase(str) {
    //As we also need to be sure that any other letter in the string is lowercased 
    //it is useful to transform all the string in lowercased letters before splitting it
    const arr = str.toLowerCase().split(' ');
    //Now it is time to work on any word of the string
    //As we saw in another problem we can loop on an array with map function and at the same time
    //apply a callback function to any of its item    
    const mappedArr = arr.map(item => {
        //JS gives us the replace method we saw before
        //we need to replace the first letter of any word in the array, with the same letter
        //uppercased.
        //to select any letter in a string we can use charAt() method, so charAr(0) is
        //what we are looking for.
        //replace method takes two parameters (what to be replaced, what is going to replace it)
        return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
    });
    return mappedArr.join(' ');//last, we need to join() the array to get back our sentence
}
  
const mySentence = titleCase("I'm a little tea pot");
console.log(mySentence);