// Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
    let places :string[]= ["Hunza","Taksim square","Eiffel tower","Burj khalifa","Ankara"];

// • Print your array in its original order.
        console.log('ORIGINAL '+places);

// • Print your array in alphabetical order without modifying the actual list.
        console.log('COPY '+[...places].sort());

// • Show that your array is still in its original order by printing it.
        console.log('ORIGINAL '+places);

// • Print your array in reverse alphabetical order without changing the order of the original list.
        console.log('COPY '+[...places].sort().reverse());

// • Show that your array is still in its original order by printing it again.
        console.log('ORIGINAL '+places);

// • Reverse the order of your list. Print the array to show that its order has changed.
        console.log('COPY '+places);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
        console.log('ORIGINAL '+places.reverse());

 // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
        console.log('ORIGINAL '+places.sort());

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
        console.log('ORIGINAL '+places.sort().reverse());







