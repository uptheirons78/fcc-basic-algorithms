function largestNumbersInArrays(arr) {
    const sortedArrays = arr.map((item) => {
        return item.sort((a,b) => {
            return b-a;
        });
    });
    const largestNumbers = sortedArrays.map(item => item[0]);
    return largestNumbers;
}

function largestOfFour(arr) {
   return arr.map(item => item.sort((a,b) => {return b-a})[0]); 
  }
  
  const a = largestNumbersInArrays([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  const b = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  console.log(a);
  console.log(b);