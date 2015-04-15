//var sortTestCase = require('./sort.testcase.js');
//var heapSort = require('../../src/sorting/heapsort.js');

//sortTestCase(heapSort, 'Heap sort');




//load('heapsort.js');

//var arr = [];
//var MAX = 100

//for(var i = 0; i < MAX; ++i){
//		arr[i] = Math.floor((Math.random() * 100) + 1);
	//	print(arr[i]);	
//}
//print(arr);



//heapSort(arr);


var arr = [];
var MAX = 100;

var sort = require('./../../src/sorting/heapsort.js').heapSort;
console.log(sort([2, 5, 1, 0, 4])); // [ 0, 1, 2, 4, 5 ]


for(var i = 0; i < MAX; ++i){
      arr[i] = Math.floor((Math.random() * 100) + 1);
    //  print(arr[i]);
}
console.log(arr);
sort(arr);
console.log(arr);


