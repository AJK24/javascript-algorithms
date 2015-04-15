//var sortTestCase = require('./sort.testcase.js');
var heapSort = require('../../src/sorting/heapsort.js');

//sortTestCase(heapSort, 'Heap sort');




//load('heapsort.js');

var arr = [];
var MAX = 100

for(var i = 0; i < MAX; ++i){
		arr[i] = Math.floor((Math.random() * 100) + 1);
	//	print(arr[i]);	
}
print(arr);



heapSort(arr);
