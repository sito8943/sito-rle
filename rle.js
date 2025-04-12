export default class RLE {
	constructor() {
		
	}

	parse(message) {
		let iterator = "";
		let parsedString = "";
		while (iterator < message.length) {
			const currentCharacter = message.charAt(iterator);
			if (!Number.isNaN(Number(currentCharacter))) {
				// is the counter
				iterator ++;
				const nextCharacter = message.chartAt(iterator);
				if (!Number.isNaN(Number(nextCharacter))) {
					// is the real character
					parsedString += 
				}
			}
		}
	}

	compress(message) {
		let counter = 1;
		let iterator = 0;
		let previousCharacter = "";
		let compressedMessage = "";
		while (iterator < message.length) {
			const currentCharacter = message.charAt(iterator);
			if (currentCharacter != previousCharacter) {
				compressedMessage += `${previousCharacter}${counter > 1 ? counter : ""}`;
				counter = 1;
				previousCharacter = currentCharacter;
			} else 
				counter ++;
			iterator ++;
		}
		if (previousCharacter != "")
			compressedMessage += `${previousCharacter}${counter > 1 ? counter : ""}`;
		return compressedMessage;
	}
}
