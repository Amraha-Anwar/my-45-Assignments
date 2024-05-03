/*Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ 
names. Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array with
the Great added to each magician’s name.*/

 let magicians = ["Harry Houdini","David Copperfield","Max Maven"];
    function copyArray(array:string[])
 {
        return[...array]               //it will copy the array
 }

    function show_magicians(magicians :string[])
  {  
     magicians.forEach(magician => 
          
    {console.log(magician);})
 }
show_magicians(magicians);

    function make_great(magicians :string[])
{
      for (let i =0 ; i < magicians.length ; i++)         
    magicians[i]=`${magicians[i]} the Great`
}

const magiciansCopyArray =copyArray(magicians)      //calling the copyArray() and assign it a variable
make_great(magiciansCopyArray);

    console.log('\n\nThis is the ORIGINAL ARRAY');
show_magicians(magicians);
                                     //calling show_magicians()for both original and modified arrays
    console.log('\n\nThis is the MODIFIED COPY of the array');
show_magicians(magiciansCopyArray);