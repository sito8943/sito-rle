import rle from "./rle.js";

import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

const parser = new rle();

export default parser;

/**
 * Parse a string message
 * @param {string} message - string to parse
 * @returns {string} parsed message
 */
export function decompress(message) {
	return parser.decompress(message);
}

/**
 * Compress a string message
 * @param {string} message - string to compress
 * @returns {string} compressed message
 */
export function compress(message) {
	return parse.compress(message);
}
