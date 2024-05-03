/*Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies
 the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to 
 see that the list has actually been modified.*/

 //Copy of Ex 41..
 let magicians = ["Harry Houdini","David Copperfield","Max Maven"];

    function show_magicians(magicians :string[])
  {  
     magicians.forEach(magician => 
          
    {console.log(magician);})
 }
show_magicians(magicians);

 function make_great(magicians :string[])
{
  for (let i =0 ; i < magicians.length ; i++)         //giving the condition to add the phrase
  magicians[i]=`${magicians[i]} the Great`
}

make_great(magicians);
show_magicians(magicians);             //calling show_magicians() for checking if the list moedified or not

  
