function num(arr) {
    for (let i = arr.length-1; i >= 0; i--) {
      for (let j = i; j >= 0; j--) {
        if (arr[i] < arr[j]) {
          let aer = arr[i];
          arr[i] = arr[j];
          arr[j] = aer;
        };
      };
    };
    return arr;
  };
  console.log(num([3,2,1]));
  
function sort(n, p) {
    if (n === 0) {
        return p;
    } else if (n === 1) {
        return 0;
    }

    return sort(n - 1, n + sort(n - 2, 0));
}
let result = sort(5, 1);
console.log(result);