var arr = [9, 3, 2, 5, 1, 0];


function bubleSort(array) {
	for (var i = 1; i < array.length; ++i) {
  	for(var j = array.length; j >= i; --j) {
    		if (array[j] < array[j - 1]) {
        	var savedValue = array[j];
          array[j] = array[j - 1];
          array[j - 1] = savedValue;
          
          //console.log(array);
        }
    }
  }
  
  return array;
}
bubleSort(arr);