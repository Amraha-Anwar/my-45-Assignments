/*Modify the make_shirt() function so that shirts are large by default with a message that reads
 I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any
 size with a different message. */
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I LOVE TYPESCRIPT"; }
    console.log("Making a ".concat(size, " size shirt with the message \"").concat(message, "\" printed on it."));
} //large size shirt and message by default
make_shirt(); // default large and message
make_shirt("Medium"); // only message by default
make_shirt("Small", "JUST CODE IT"); // custom message and small size shirt
