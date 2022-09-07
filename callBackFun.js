function getFun(num1, sum, add) {
  if (num1 % 2 == 0) {
    sum();
  } else {
    add();
  }
}

let sum = function () {
  const num3 = 30;
  const num4 = 40;
  console.log(num3 + num4, "Sum");
};

let add = function () {
  const num3 = 30;
  const num4 = 40;
  console.log(num3 - num4, "Addtraction");
};


let num1 =Math.round(Math.random()*10);


getFun(num1, sum, add);
