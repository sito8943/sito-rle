export default Class RLE {
	constructor() {
		
	}

	parse(message) {
		let counter = 1;
		let iterator = 0;
		let previousCharacter = "";
		let parsedMessage = "";
		while (iterator < message.length) {
			let currentCharacter = message.get(iterator);
			if (currentCharacter != prevousCharacter) {
				if (counter > 1) {
				  parsedMessage += `${counter}${previousCharacter}`;
					counter = 1;
				} else {
					parsedMessage += previousCharacter;
				}
				previousCharacter = currentCharacter;
			} else {
				counter ++;
			}
			iterator ++;
		}
		return parsedMessage;
	}
}
