const integers = [23, 15, 6, 3, 11, 20, 18, 7, 21, 1, 29, 10, 12, 8];


// function sortNum(array){
//    return array.sort(function(a, b){return (b - a)});
// }

// function filterNum(array){
//     return array.filter(num => num < 19 )
// }

// function multSubNum(array){
//     return array.map(function(a){return((a*1.5)-1)})
// }

// function condense(array){
//     return array.reduce(function(a,b){return(a+b)})
    
// }



var newNum = integers.sort(function(a,b){return (b - a)}).filter(num => num < 19).map(function(a){return((a*1.5)-1)}).reduce(function(a,b){return(a+b)});

// let newIntegers = integers.sort(function(a,b){return(b-a)}).filter(function(a){return(a > 19)}).map(function(a){return(a*1.5)-1}).reduce(function(a,b){return(a + b)});
var placement = document.getElementById("place")
placement.innerHTML += `<h1>${newNum}</h1>`