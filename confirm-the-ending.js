function confirmEnding(str, target) {
    const strEnd = str.slice(str.length - target.length);
    return strEnd === target;
  }
  
  const end = confirmEnding("Bastian", "an");
  const end2 = confirmEnding("DarthVader", "ez");
  const end3 = confirmEnding("Obi-Wan Kenobi", "enobi");
  console.log(end);
  console.log(end2);
  console.log(end3);