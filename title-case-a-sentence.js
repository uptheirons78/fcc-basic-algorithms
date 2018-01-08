function titleCase(str) {
    const arr = str.toLowerCase().split(' ');    
    const mappedArr = arr.map(item => {
        return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
    });
    return mappedArr.join(' ');
}
  
const mySentence = titleCase("I'm a little tea pot");
console.log(mySentence);