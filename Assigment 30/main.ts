/* Make a array of five or more usernames, including the name "Admin". Imagine you are writing code that will
print a greeting to each user after they log in to a website.Loop through the array,and print a greeting to 
each user:
~ If the username is "admin" print a special greeting, such as Hello admin,would you like to see a status 
report?
~ Otherwise,print a generic greeting,such as Hello Eric,thank you for logging in again. */

let userNames :string[] = ["user1","user2","Admin","user3","user4"];
userNames.forEach(userName  => {
    if (userName == "Admin"){
console.log("Hello Admin, would you like to see a status report?");
}  else {
    console.log(`Hello ${userName}, Thank you for logging in again.`);}});
    