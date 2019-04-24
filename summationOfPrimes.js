module.exports = function(limit) {
  // do work here
  let sum = 0;
  let num = 2;
  let range = [2];

  while (num <= limit){
    if (num % 2 === 0){
      //range.push(num);
      num++;
      continue;
    }
    if (num % 3 === 0 && num > 3){
      num++;
      continue;
    }
    if (num % 5 === 0 && num > 5){
      num++;
      continue;
    }
    if (num % 7 === 0 && num > 7){
      num++;
      continue;
    }
    if (num % 11 === 0 && num > 11){
      num++;
      continue;
    }
    if (num % 13 === 0 && num > 13)
    range.push(num);
    num++;
  }
  // console.log(range.length);
  // console.log(range);
  range.forEach((item) => {
    sum += item;
  })
  
  // console.log(range.length);
  // range.forEach((item, index) => {
  //   if (item % 2 === 0 && item > 2){
  //     range.splice(index, 1);
  //   }
  //   if (item % 5 === 0 && item > 5){
  //     range.splice(index, 1);
  //   }
  // });
  // range.forEach((item) => {
  //   sum += item;
  // })
  
  // console.log(range.length);
  // console.log(sum);
  
  // while (num < limit){
  //   let prime = true;
  //   addends.forEach((item) => {
  //     if (num % item === 0){
  //       prime = false;
  //     }
  //   });
  //   if (prime){
  //     addends.push(num);
  //     sum += num;
  //   }
  //   console.log(addends[addends.length - 1]);
  //   num++;
  // }
  return sum;
}
