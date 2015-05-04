
var arr = [];
var MAX = 15;

var sort = require('./../../src/sorting/heapsort.js').heapSort;
//console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]


for(var i = 0; i < MAX; ++i){
    arr[i] = Math.floor((Math.random() * 50) + 1);
   // print(arr[i]);
}

//var array = [40,7,41,13,19,92,51,31];


function dispArr(arr) {
	for (var i = 0; i < arr.length; ++i) {
		process.stdout.write(arr[i] + " ");
		if (i % 10 == 9) {
			process.stdout.write("\n");
		}
	}
	if (i % 10 != 0) {
		process.stdout.write("\n");
	}
}








//console.log(arr);
dispArr(arr);
//ADDED anonymous function so now it will be sorted backwards
sort(arr, (function(a,b){
	return b - a;
}));

//added print statements to it for testing
console.log("");
//console.log(arr);
dispArr(arr);

