
var arr = [];
var MAX = 100;

var sort = require('./../../src/sorting/heapsort.js').heapSort;
//console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]


//for(var i = 0; i < MAX; ++i){
  //    arr[i] = Math.floor((Math.random() * 100) + 1);
    //  print(arr[i]);
//}

var array = [40,7,41,13,19,92,51,31];


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
dispArr(array);
sort(array);	//added print statements to it for testing
console.log("");
//console.log(arr);
dispArr(array);

