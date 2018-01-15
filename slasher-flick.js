function slasher(arr, howMany) {
    // it doesn't always pay to be first
    return arr.slice(howMany);
  }
  
const a = slasher([1, 2, 3], 2);
const b = slasher([1, 2, 3], 3);
console.log(a);
console.log(b);