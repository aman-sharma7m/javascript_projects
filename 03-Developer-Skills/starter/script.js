// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';
if (x == 23) console.log(23);
console.log('Aman');
console.log(x);
console.log('hi hola ');

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    value: Number(23),
  };

  console.table(measurement);

  return measurement.value + 273;
};

console.log(measureKelvin());

// coding challenge

const arr1 = new Array(17, 22, 23);
const arr2 = new Array(12, 5, -5, 0, 4);

// console.log(arr1);
// console.log(arr2);

const printForcast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}C in ${i + 1} days .... `;
  }
  console.log('....' + str);
  return 0;
};

printForcast(arr1);
printForcast(arr2);
