//some strings to reverse from great ancient poems
const coleridge = "Day After Day, Day After Day, We Stuck, No Breathe, No Motion. As Idle as a Painted Ship, Upon a Painted Ocean";
const dante = "Nel mezzo del camin di nostra vita, mi ritrovai per una selva oscura, che la diritta via era smarrita" //it's italian....I'm italian :)
//some from the greatest movie ever ....
const darthVader = "Luke, I'm your father!";
const yoda = "Do or Do Not, There is No Try";

function reverseString(str) {
    //we need to split in an array our string to reverse it later.
    //only on arrays we can use reverse method...so let's SPLIT the string!
    return str.split('')
              .reverse() //now we reverse it! So Easy and powerful!
              .join(''); //finally let's join the reversed array, to have our reversed string;
}

console.log(reverseString(coleridge));
console.log(reverseString(dante));
console.log(reverseString(darthVader));
console.log(reverseString(yoda);



  