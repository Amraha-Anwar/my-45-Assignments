/* Try more comparisons,write more tests.Have atleast one true and one false result for each of the following:
- test for equality and inequality with strings
- test using the lower case function
- numerical test involving equality and inequality, greater and less than, greater than and equal to , less than and equal to
- test using "and" and "or" operators
- test whether an item is in array
- test whether an item is not in array */
//EQUALITY AND INEQUALITY IN STRING
console.log("\n\tTesting equality and inequality\t\n");
var equalityTest = "Switzerland";
console.log(equalityTest == "Switzerland"); //true
console.log(equalityTest == "switzerLand"); //false
//LOWER CASE FUNCTION
console.log("\n\ttesting lower case function\t\n");
var lowerCaseFunction = "RABBIT";
console.log(lowerCaseFunction.toLowerCase()); //true
//NUMERICAL CHECK
console.log("\n\ttesting numericals\t\n");
console.log(20 > 15); //true
console.log(9 < 7); //false
console.log(16 >= 15); //true
console.log(5 <= 8); //true
//OPERATORS
console.log("\n\ttesting operators\t\n");
console.log(true && false); //false
console.log(true, false); //true
//ITEM IN ARRAY
console.log("\n\ttesting item is in array\t\n");
var favBooks = ["Namal", "Mus'haf", "Paras"];
console.log(favBooks.includes("Mus'haf")); //true
console.log(favBooks.includes("Jannat kay pattey")); //false
//ITEM IS NOT IN ARRAY
console.log(!favBooks.includes("Jannat kay pattey")); //true
console.log(favBooks.includes("Jannat kay pattey")); //false
