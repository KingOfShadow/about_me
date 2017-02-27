var arr = [5, 2, 8, 1, 9, 3, 9, 8, 9, 3, 15, 24, 3, 5, 8, 7, 25, 6, 9, 14, 16];


function insertSort(items) {

  var len = items.length,
    value,
    i,
    j;

  for (i = 0; i < len; i++) {

    value = items[i];


    for (j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j];
    }

    items[j + 1] = value;
    //   console.log(items);
  }
  return items;
}
console.log(insertSort(arr));

