var arr = new Array("muki","","maya",10,40,'n');

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

arr.forEach(function(val,index){
    console.log(val);
    console.log(index);
    console.log(arr[index]);
})



// for(var value of arr){
//     console.log(value);
// }

// for(var index in arr){
//     console.log(arr[index]);
// }