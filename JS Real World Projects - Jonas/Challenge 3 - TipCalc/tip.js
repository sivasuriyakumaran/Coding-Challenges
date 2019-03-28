function tipCal(bill)
{
  var percentage;
  if (bill < 50) {
    percentage = 20/100;
  }
  else if (bill >= 50 && bill < 200) {
    percentage = 15/100;
  }
  else {
    percentage = 10/100;
  }
  return (bill * percentage);
}
var bill = [124,48,268];
var tips =[tipCal(bill[0]),tipCal(bill[1]),tipCal(bill[2])];
console.log('Tips values' + ' ' + tips);
var fullAmount =[bill[0] + tips[0],bill[1] + tips[1],bill[2] + tips[2]];
console.log('Full Amount' + ' ' + fullAmount);
