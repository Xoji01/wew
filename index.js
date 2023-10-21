// let arr = [44, 5, 2, 6, 3];

// let  sort = a => {
//   let len = a.length - 1;
  
//   // Проход каждому элементу
//   for(let i = 0; i < len; i++)
//       // Проводим элемент по массиву
//       for(var e = 0; e < len - i; e++)
//         // Если элемент больше следующего
//         if(a[e] > a[e + 1])
//           // То флипаем его (меняем местами)
//           [a[e], a[e + 1]] = [a[e + 1], a[e]];
  
//   return a;
// };

// console.info(sort(arr));
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
  
//   function* fibonacciGenerator() {

//     var index = 0;
//     while (true){
//           // yields the next fibonacci
//           yield fibonacci(index++);
//       }
//   }
// let ww = prompt('a')
//   num(ww)
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