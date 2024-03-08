// STORE A PERSON'S NAME IN A VARIABLE ,THEN PRINT THAT NAME IN LOWERCASE,UPPERCASE AND TITLECASE.

let personName : string = "Amraha anwar";

//Step 1 : "lowercase"

let lowerCaseName = personName.toLowerCase();
console.log(lowerCaseName);

//Step 2 : "UPPERCASE"

let upperCaseName = personName.toUpperCase();
console.log(upperCaseName);

//Step 3 : "TitleCase"

console.log(personName.replace(/\b\w/g,c=> c .toUpperCase()));

