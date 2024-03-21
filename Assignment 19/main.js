/*Working with one of the programs from Exercises 14 through 18, print a message indicating the number of
 people you are inviting to dinner.*/
var guests = ["John", "Olivia", "Tina"];
// for (let guest of guests){console.log(`Hello ${guest} please join me on dinner tomorrow at my place \n`)};
// let unableToAttend = "Olivia";
//         console.log(`${unableToAttend} can't make it to dinner.`);
// RELACING THE GUEST
// let replacedGuest :string = "Amelia";
//     guests [guests.indexOf (unableToAttend)] = replacedGuest;
// // NEW INVITATION
// // guests.forEach(guest => {console.log(`${guest} please join me on dinner tomorrow at my place.\n`)});
//         console.log( 'GOOD NEWS! I found a bigger dinner table so i am gonna invite 3 more guests');
guests.unshift("Morgan"); //for beginning of the array
guests.splice(2, 0, "Sophia"); //for middle of the array 
guests.push("Noah"); //for end of the array
// guests.forEach(guest => {console.log(`${guest} please join me on dinner tomorrow at my place.`)});
//     console.log('Its really embarrasing to tell that I can invite only two people for dinner');
while (guests.length > 2) {
    var removed_guests = guests.pop(); //pop will remove the index of array and store it in itself
    // console.log(`Sorry ${removed_guests}, you are not invited to dinner.`);
}
// guests.forEach(guest => {console.log(`${guest} you are still invited.`)});
guests.splice(0.2); //to remove all the guests
console.log(guests);
//checking the number of people i am inviting
console.log("The number of people i am inviting to dinner: ".concat(guests.length));
