import RLE from "./rle.js";

import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

const parser = new RLE();

async function inputString() {
	const rl = createInterface({
		input: process.stdin,
		output: process.stdout,
	});
	const input = await rl.question("Enter string input (ctrl + z): ");
	const string = input;
	await rl.close();
	return string;
}

async function main() {
  while (true) {
		const input = await inputString();
		console.log(`Result: ${parser.compress(input)}`);
	}
}

main();
