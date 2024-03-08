// STORE A PERSON'S NAME IN A VARIABLE ,THEN PRINT THAT NAME IN LOWERCASE,UPPERCASE AND TITLECASE.
var personName = "Amraha anwar";
//Step 1 : "lowercase"
var lowerCaseName = personName.toLowerCase();
console.log(lowerCaseName);
//Step 2 : "UPPERCASE"
var upperCaseName = personName.toUpperCase();
console.log(upperCaseName);
//Step 3 : "TitleCase"
console.log(personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
