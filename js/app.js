var todaysDate = new Date();
console.log(todaysDate);
console.log(todaysDate.getDay());
var todaysDate = new Date(2018,11,24,10,33,30,0);//new Date(year,month,day,hrs,min,seec,millisec)
console.log(todaysDate);
var todaysDate = new Date(0);//new Date(millisec)
console.log(todaysDate);
var todaysDate = new Date("July 26,2019 17:37:00");
console.log(todaysDate);
var month=['jan','feb','mar','april','may','jun','jul','aug','sep','oct','nov','dec'];
var m = todaysDate.getMonth();
console.log("Month="+month[m]);
var ch = todaysDate.getDay();
console.log(ch);
switch(ch)
{
    case 0: console.log("sunday");
            break;
    case 1: console.log("Monday");
            break;
    case 2: console.log("Tuesday");
            break;
    case 3: console.log("Wenesday");
            break;
    case 4: console.log("Thursday");
            break;
    case 5: console.log("friday");
            break;
    case 6: console.log("Saturday");
}
var fruits= new Array('orange','apple');
fruits[2]='pineapple';
fruits[5]='mango';
for(var i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
console.log("*************");
// console.log(Math.PI);
// console.log(Math.pow(2,3));
// console.log(Math.random());
// console.log(Math.round(7.5));
// console.log(Math.floor(7.6));
// console.log(Math.ceil(9.9));

var m = Math.random();
if(m<1)
{
    for(var num=0;num>=100;num++)
    {
        console.log(num);
    }
}
