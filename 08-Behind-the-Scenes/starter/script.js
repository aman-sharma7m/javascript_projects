'use strict';

function calAge(birthYear) {
  const age = 2022 - birthYear;
  console.log(firstName);

  function printAge() {
    console.log(`you are the age of ${age}`);
  }
  printAge();

  if (birthYear >= 1981 && birthYear <= 1996) {
    var millenial = true;
    const str = `oh, and you're a millenial, ${firstName}`;
    console.log(str);

    function addValue(a, b) {
      return a + b;
    }
  }
  //console.log(str); //BUG- use var decl in order to access outside if
  //console.log(addValue(5, 6));//BUG- use strict mode off to work it out
  console.log(millenial);

  return age;
}
const firstName = 'Aman';
// console.log(calAge(1996));
calAge(1996);
