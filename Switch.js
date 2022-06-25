var date = new Date();
console.log(date);

var today = date.getDay();
switch (today) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is WednisDay");
    break;
  case 4:
    console.log("Today is ThusDay");
    break;
  case 5:
    console.log("Today is FriDay");
    break;
  case 6:
    console.log("Today is SatarDay");
    break;

  default:
    console.log("not a valid number");
    break;
}
