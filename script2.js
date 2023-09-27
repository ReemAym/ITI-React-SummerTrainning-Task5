var a=prompt("enter five numbers separeted by space ");

var arr=a.split(' ');


console.log(arr.sort(function (a, b) { return a - b }));

console.log(arr.sort(function (a, b) { return b - a  }));