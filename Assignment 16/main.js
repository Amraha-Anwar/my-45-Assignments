/*You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to
dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
 that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
var guests = ["John", "Olivia", "Tina"];
// for (let guest of guests){console.log(`Hello ${guest} please join me on dinner tomorrow at my place \n`)};
var unableToAttend = "Olivia";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// RELACING THE GUEST
var replacedGuest = "Amelia";
guests[guests.indexOf(unableToAttend)] = replacedGuest;
// NEW INVITATION
guests.forEach(function (guest) { console.log("".concat(guest, " please join me on dinner tomorrow at my place.\n")); });
console.log('GOOD NEWS! I found a bigger dinner table so i am gonna invite 3 more guests');
guests.unshift("Morgan");
guests.splice(2, 0, "Sophia");
guests.push("Noah");
guests.forEach(function (guest) { console.log("".concat(guest, " please join me on dinner tomorrow at my place.")); });
