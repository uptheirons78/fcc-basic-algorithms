function destroyer(arr) {
    // Remove all the values
    const a = Array.from(arguments);
    const b = a[0];
    const c = a.slice(1);
    return b.filter(item => !c.includes(item));
  }
  
  const des1 = destroyer([2,3,2,3], 2, 3);
  const des2 = destroyer([1,2,3,2,3,1], 2, 3);
  console.log(des1);
  console.log(des2);