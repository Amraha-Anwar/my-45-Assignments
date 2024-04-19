/*Make a array of your favorite fruits, and then write a series of independent if statements that check for 
certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit
 is in your array, the if block should print a statement, such as You really like bananas! */

 let favorite_fruits :string[] = ["Oranges","Bananas","Grapes"];
 favorite_fruits.forEach (favorite_fruit => {
    if (favorite_fruit == "Bananas"){
console.log(`I really like ${favorite_fruit}`);
}   else if (favorite_fruit == "Oranges"){
console.log(`I really like ${favorite_fruit}`);
}   else if(favorite_fruit == "Grapes"){
console.log(`I really like ${favorite_fruit}`);}});
