// test.js

// test.js
import { runEnchantProcess } from "./enchant-order-original.js";

// sample enchants
const enchants = [
	["sharpness", 5],
	["unbreaking", 3],
	["mending", 1],
	["sweeping", 3],
];

// fake id + weight data
const enchantData = {
	ids: {
		sharpness: 0,
		unbreaking: 1,
		mending: 2,
		sweeping: 3,
	},
	weights: [1, 1, 2, 2], // arbitrary examples
};

const result = runEnchantProcess({
	item: "item",
	enchants,
	mode: "levels",
	data: enchantData,
});

console.log("RESULT:");
console.dir(result, { depth: null });
