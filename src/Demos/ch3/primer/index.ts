import { Name, WeatherLocation } from "./modules";
//import { Name } from "./modules/name";
//import { WeatherLocation } from "./modules/weather";

let name = new Name("Adam", "Freeman");
let loc = new WeatherLocation("raining", "London");

console.log(name.nameMessage);
console.log(loc.weatherMessage);