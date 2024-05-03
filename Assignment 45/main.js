/*Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model
 name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other
 name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was
stored correctly. */
function cars(manufacturer, model) {
    var items = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        items[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer_name: manufacturer,
        model_name: model,
        item: items
    };
    console.log("\nMANUFACTURER~~~~~~~~~~>> ".concat(manufacturer));
    console.log("MODEL~~~~~~~~~~>> ".concat(model));
    items.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return console.log("".concat(key, "~~~~~~~~~~>>").concat(value));
    });
    return car;
}
cars("Toyota", "Fortuner", ["Color", "Blue"]);
cars("Audi", "AudiR8", ["color", "Red"], ["Engine", "35hp"]);
cars("BMW", "8 series", ["color", "Pure White"], ["Seating capacity", "4"], ["Speed", "250kmph"]);
console.log(5 + "3");
