/*You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for
only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only
 two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
 from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
 have an empty list at the end of your program.*/
var guests = ["John", "Olivia", "Tina"];
// for (let guest of guests){console.log(`Hello ${guest} please join me on dinner tomorrow at my place \n`)};
var unableToAttend = "Olivia";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// RELACING THE GUEST
// let replacedGuest :string = "Amelia";
//     guests [guests.indexOf (unableToAttend)] = replacedGuest;
// NEW INVITATION
// guests.forEach(guest => {console.log(`${guest} please join me on dinner tomorrow at my place.\n`)});
console.log('GOOD NEWS! I found a bigger dinner table so i am gonna invite 3 more guests');
guests.unshift("Morgan");
guests.splice(2, 0, "Sophia");
guests.push("Noah");
guests.forEach(function (guest) { console.log("".concat(guest, " please join me on dinner tomorrow at my place.")); });
console.log('Its really embarrasing to tell that I can invite only two people for dinner');
while (guests.length > 2) {
    var removed_guests = guests.pop(); //pop will remove the index of array and store it in itself
    console.log("Sorry ".concat(removed_guests, ", you are not invited to dinner."));
}
guests.forEach(function (guest) { console.log("".concat(guest, " you are still invited.")); });
guests.splice(0.2);
console.log(guests);
