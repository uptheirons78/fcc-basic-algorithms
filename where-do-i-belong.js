function getIndexToIns(arr, num) {
    arr.push(num);
    const sortedArray = arr.sort(function (a, b) {
        return a - b;
    });
    return sortedArray.findIndex(item => item === num);
}

const belong = getIndexToIns([40, 60], 50);
console.log(belong);