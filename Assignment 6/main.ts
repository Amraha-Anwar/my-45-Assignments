/* Store a person's name and include some whitespace characters at the beginning and end of the name.Make sure
 you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace
  around the name is displayed. Then print the name after striping the white spaces.*/


// with whitespace:  
  let whiteSpace :string = "\n\tWhatever you are be a good one\t\n";
  console.log(whiteSpace);

//without whitespace:
let withoutWhiteSpace = whiteSpace.trim();
console.log(withoutWhiteSpace);
