'use strict';

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age} years-old, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge();

  return age;
}

const firstName = 'Ali';
calcAge(1997);
