function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr.filter(Boolean);
  }
  
  const falsy1 = bouncer([7, "ate", "", false, 9]);
  const falsy2 = bouncer([7, null, false, undefined]);
  console.log(falsy1);
  console.log(falsy2);