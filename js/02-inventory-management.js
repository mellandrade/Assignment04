/*eslint-env broswer*/
/*jslint browser: true */
/*global window */

function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - view all products");
    window.console.log("update - update stock");
    window.console.log("exit - exit the program");
    window.console.log("");
}

function display(inventory) {
    "use strict";
    var products, i = 1;
    inventory.forEach(function (products) {
        window.console.log(String(i) + inventory);
    });
    window.console.log("");
}

function update(inventory) {
    "use strict";
    window.prompt("Enter a sku number:");
    window.prompt("Enter new stock quantity:");
    products.splice(inventory);
    window.console.log("Inventory has been updated.");
    window.console.log("");
}

function main() {
    "use strict";
    var inventory, command;
    
    displayMenu();
    
    inventory = [["2233", "Hats", "12", "14.99"], ["3223", "Socks", "36", "9.99"], ["4824", "Shirts", "10", "15.99"], ["6343", "Jeans", "22", "39.99"], ["9382", "Jackets", "5", "49.99"]];
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                display(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();

