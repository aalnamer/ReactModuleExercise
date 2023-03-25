import fruits from "./fruits";
import { choice, remove } from "./helpers";

let fruit = choice(fruits);

console.log(`I'd like one ${fruit}`);
console.log(`Heres one ${fruit}`);
console.log("Can I have another?");

let remaining = remove(fruit, fruits);

console.log(`Sorry, we're all out. We have ${remaining.length} left.`);
