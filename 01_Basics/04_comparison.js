// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//** Compare values having the same datatype

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //avoid this way of executions
console.log(null == 0); //avoid this way of executions
console.log(null >= 0); //avoid this way of executions

// ***NOTE : The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false

console.log(undefined == 0); //avoid this way of executions
console.log(undefined > 0); //avoid this way of executions
console.log(undefined < 0); //avoid this way of executions


// === comparison (Strictly checks whether the datatypes are same or different of the values being compared.)

console.log("2" == 2);
console.log("2" === 2);

