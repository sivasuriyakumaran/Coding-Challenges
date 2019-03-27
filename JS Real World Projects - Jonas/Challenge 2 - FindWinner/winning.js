//john score
var a = 55,b = 155,c = 155;
//mike score
var d = 155,e = 55,f = 155;
//mary scores
var g = 100,h = 100,i = 500;
//Average of scores
var johnAvg = (a+b+c)/3;
var mikeAvg = (d+e+f)/3;
var maryAvg = (g+h+i)/3;
console.log('Average of John is '+ johnAvg);
console.log('Average of Mike is '+ mikeAvg);
console.log('Average of Mary is '+ maryAvg)
if (johnAvg > mikeAvg && johnAvg > maryAvg) {
  console.log('John is leading with ' + johnAvg);
}
else if(mikeAvg > johnAvg && mikeAvg > maryAvg) {
  console.log('Mike  is leading with ' + mikeAvg);
}
else if(maryAvg > johnAvg && maryAvg > mikeAvg){
  console.log('Mary  is leading with ' + maryAvg)
}
else {
  console.log('Match ends with draw ')
}
