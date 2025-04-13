export default class RLE {
	constructor() {
		
	}

	/**
	 * add `counter` instances of `character` to `string`
	 * @param {string} string - string to add
	 * @param {string} character - character to add
	 * @param {number} counter - number of instances
	 */
	addCharacter(string, character, counter) {
		return string += character.repeat(counter);
	}

	/**
	 * decompress using reverse rle
	 * @param {Uint8Array} message - string to parse
	 * @returns {string} decompressed string
	 */
	decompress(message) {
		let counter = 0;
		let character = "";
		let output = "";

		for (let i = 0; i < message.length; i++) {
			if (!counter) {
				counter = message[i];
				continue;
		  }

			if (!character) {
				character = String.fromCharCode(message[i]);
				continue;
			}
			
			output += this.addCharacter(output, character, Number(counter));
			counter = 0;
			character = "";
		}

		if (!!counter && !!character)
				output += this.addCharacter(output, character, Number(counter));

		return output;
	}

	/**
	 * compress using rle
	 * @param {string} message - string to compress
	 * @result {Uint8Array} result
	 */
	compress(message) {
		let counter = 1;
		let iterator = 0;
		let previousCharacter = 0;
		const output = [];

		while (iterator < message.length) {
			const currentCharacter = message.charCodeAt(iterator);
			if (currentCharacter != previousCharacter) {
				if (!!previousCharacter)
					output.push(counter, previousCharacter);
				counter = 1;
				previousCharacter = currentCharacter;
			} else {
				if (counter === 255) {
					output.push(counter, previousCharacter);
					counter = 0;
				}
				counter ++;
			}

			iterator ++;
		}

		if (!!previousCharacter)
			output.push(counter, previousCharacter);

		return new Uint8Array(output);
	}
}
