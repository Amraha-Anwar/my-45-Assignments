/* Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name 
and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries
representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional
parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the 
number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an
album.*/

function make_album (artistName : string , albumTitle : string): {artistName :string ; albumTitle: string } 
{
    const dictionaries = {
        artistName: artistName.charAt(0).toUpperCase() + artistName.slice(1),
        albumTitle: albumTitle.charAt(0).toUpperCase() + albumTitle.slice(1)
    };
        return dictionaries;
}
  let album = make_album ("michael jakson" , "thriller")
  console.log (album);
  album = make_album ("pink floid", "the dark side of the moon") 
  console.log (album);
  album = make_album ("nirvana", "nevermind") 
  console.log (album);
  
