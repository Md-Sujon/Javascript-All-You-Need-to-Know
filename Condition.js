var a = 1000;
var b = 200;
var c = 60;
var d = 1500;
// Find the Largest Among Three Numbers

// use Math Function
/*
const largest = Math.max(a, b, c, d);
const Largest = Math.min(a, b, c, d);
console.log(largest);
console.log(Largest);*/

// use condition
/*
if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}*/

// Find the Largest Among Four Numbers
/*
if (a > b && a > c && a > d) {
  console.log(a);
} else if (b > a && b > c && b > d) {
  console.log(b);
} else if (c > a && c > b && d > c) {
  console.log(c);
} else {
  console.log(d);
}
*/
// Find the Smalest Among Three Numbers use condition
/*
if (b > a && c > a) {
  console.log(a);
} else if (a > b && c > b) {
  console.log(b);
} else {
  console.log(c);
}*/


// Even Odd number
var E = 15;
if(E % 2 == 0){
    console.log('Even Number');
}else{
    console.log('Odd Number');
}