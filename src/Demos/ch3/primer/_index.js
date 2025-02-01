"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    name;
    price;
    category;
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    //constructor(name: string, price: number, category?: string) {
    //    this.name = name;
    //    this.price = price;
    //    this.category = category;
    //}
    //name: string
    //price: number
    //category?: string
    printDetails() {
        if (this.category != undefined) {
            console.log(`Name: ${this.name}, Price: ${this.price}, `
                + `Category: ${this.category}`);
        }
        else {
            console.log(`Name: ${this.name}, Price: ${this.price}`);
        }
    }
}
class DiscountProduct extends Product {
    discount;
    constructor(name, price, discount) {
        super(name, price - discount);
        this.discount = discount;
    }
}
let hat = new DiscountProduct("Hat", 100, 10);
//let hat = new Product("Hat", 100);
let boots = new Product("Boots", 100, "Snow Gear");
hat.printDetails();
boots.printDetails();
console.log(`Hat is a Product? ${hat instanceof Product}`);
console.log(`Hat is a DiscountProduct? ${hat instanceof DiscountProduct}`);
console.log(`Boots is a Product? ${boots instanceof Product}`);
console.log("Boots is a DiscountProduct? "
    + (boots instanceof DiscountProduct));
//================================================================
//let hat = {
//    name: "Hat",
//    price: 100
//};
//let boots = {
//    name: "Boots",
//    price: 100,
//    category: "Snow Gear"
//}
function printDetails(product) {
    if (product.category != undefined) {
        console.log(`Name: ${product.name}, Price: ${product.price}, `
            + `Category: ${product.category}`);
    }
    else {
        console.log(`Name: ${product.name}, Price: ${product.price}`);
    }
}
printDetails(hat);
printDetails(boots);
//================================================================
let myArray = [100, "Adam", true];
let otherArray = [...myArray, 200, "Bob", false];
myArray[0] = "Tuesday";
let val = myArray[0];
console.log(`Value: ${val}`);
for (let i = 0; i < myArray.length; i++) {
    console.log("Index " + i + ": " + myArray[i]);
}
console.log("---");
otherArray.forEach((value, index) => console.log("Index " + index + ": " + value));
//let myArray: (number | string | boolean)[] = [];
//myArray[0] = 100;
//myArray[1] = "Adam";
//myArray[2] = true;
//let val = myArray[0];
//console.log(`Value: ${val}`);
//================================================================
function getUKCapital() {
    return "London";
}
function writeCity(f) {
    console.log(`City: ${f()}`);
}
writeCity(getUKCapital);
writeCity(() => "Paris");
let myCity = "Rome";
writeCity(() => myCity);
//================================================================
function composeString(val) {
    return `Composed string: ${val}`;
}
function writeValue(val, ...extraInfo) {
    console.log(`Value: ${val}, Extras: ${extraInfo}`);
}
writeValue("London", "Raining", "Cold");
writeValue("Paris", "Sunny");
writeValue("New York");
//function writeValue(val: string = "default value") {
//    console.log(`Value: ${val}`)
//}
////function writeValue(val?: string) {
////    console.log(`Value: ${val ?? "Fallback value"}`)
////}
//writeValue("London");
//writeValue();
////function writeValue(val: string | null) {
////    console.log(`Value: ${val ?? "Fallback value"}`)
////}
////writeValue("London");
////writeValue(null);
//================================================================
let count = 100;
if (count != null && count != undefined) {
    let result1 = count.toFixed(2);
    console.log(`Result 1: ${result1}`);
}
let result2 = count?.toFixed(2);
console.log(`Result 2: ${result2}`);
//================================================================
let val1;
let val2 = "London";
let val3 = 0;
let coalesced1 = val1 ?? "fallback value";
let coalesced2 = val2 ?? "fallback value";
let coalesced3 = val3 ?? 100;
console.log(`Result 1: ${coalesced1}`);
console.log(`Result 2: ${coalesced2}`);
console.log(`Result 3: ${coalesced3}`);
//================================================================
let firstVal = 5;
let secondVal = "5";
if (firstVal == secondVal) {
    console.log("They are the same");
}
else {
    console.log("They are NOT the same");
}
if (firstVal === secondVal) {
    console.log("They are the same");
}
else {
    console.log("They are NOT the same");
}
//================================================================
let firstName = "Adam";
if (firstName == "Adam") {
    console.log("firstName is Adam");
}
else if (firstName == "Jacqui") {
    console.log("firstName is Jacqui");
}
else {
    console.log("firstName is neither Adam or Jacqui");
}
switch (firstName) {
    case "Adam":
        console.log("firstName is Adam");
        break;
    case "Jacqui":
        console.log("firstName is Jacqui");
        break;
    default:
        console.log("firstName is neither Adam or Jacqui");
        break;
}
//================================================================
let person2 = "Bob";
let condition = true;
let person = "Bob";
const age = 40;
let place;
console.log("Place value: " + place + " Type: " + typeof (place));
place = "London";
console.log("Place value: " + place + " Type: " + typeof (place));
place = null;
console.log("Place value: " + place + " Type: " + typeof (place));
console.log(`Place value: ${place} Type: ${typeof (place)}`);
//================================================================
function sum(first, second) {
    return first + second;
    //if (typeof second == "string") {
    //    return first + Number.parseInt(second);
    //} else {
    //    return first + second;
    //}
}
//function sum(first: number, second: number) {
//    return first + second;
//}
let result = sum(10, "10");
console.log(`Result value: ${result}, Result type: ${typeof result}`);
result = sum(10, 10);
console.log(`Result value: ${result}, Result type: ${typeof result}`);
