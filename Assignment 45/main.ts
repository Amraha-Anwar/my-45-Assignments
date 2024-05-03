/*Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model
 name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other
 name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was 
stored correctly. */

function cars(manufacturer :string, model :string, ...items:[string,any][]) {
    let car :
    {
        manufacturer_name:string, model_name:string, item:[string,any][]
    } = 
    {
        manufacturer_name:manufacturer,
        model_name:model,
        item:items
    }
    
    console.log(`\nMANUFACTURER~~~~~~~~~~>> ${manufacturer}`);
    console.log(`MODEL~~~~~~~~~~>> ${model}`);
    items.forEach(([key,value]) =>console.log(`${key}~~~~~~~~~~>>${value}`));
    return car;
}

cars("Toyota","Fortuner",["Color","Blue"]);
cars("Audi","AudiR8", ["color","Red"],["Engine","35hp"]);
cars("BMW","8 series", ["color","Pure White"],["Seating capacity","4"],["Speed","250kmph"]);