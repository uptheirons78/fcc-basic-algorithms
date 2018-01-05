//Palindrome or Not Palindrome?
function palindrome(str) {
    //FCC suggest first to filter all all non-alphanumeric characters
    //from the provided string
    //Sooooooooo........REGULAR EXPRESSION time! 
    //We create a variable with the regex path for non-alphanumeric characters
    const regEx = /[^a-zA-Z0-9]/g; //^ means "NON" ...g flag means global
    //with the replace() string method we erase them from the string
    //then with toLowercase() string method we lowercase all of the characters left
    //Pay Attention: we do not need to declare a new variable...
    //we just change the provided string!
    //Second argument in replace() is the string that replaces the substring specified 
    //by the specified regexp or substr parameter.
    str = str.replace(regEx,'').toLowerCase();
    //Remeber the reverse a string algorithm ? Ok, use it now!
    //Let's create a new variable and set it equal to the reversed str
    var reversedString = str.split('').reverse().join('');
    //and finally: return the strict equality === between str and reversedString
    //if they are equal it returns true, else it returns false
    return reversedString === str;
}

console.log(palindrome('eye'));//true
console.log(palindrome('e ye_'));//true
console.log(palindrome('hanna'));//false
console.log(palindrome('anna'));//true
console.log(palindrome('harry potter'));//false