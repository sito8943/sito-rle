export default class RLE {
	constructor() {
		
	}

	parse(message) {
		let counter = 1;
		let iterator = 0;
		let previousCharacter = "";
		let parsedMessage = "";
		console.log(message);
		while (iterator < message.length) {
			let currentCharacter = message.charAt(iterator);
			if (currentCharacter != previousCharacter) {
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
		if (previousCharacter != ""){
			parsedMessage += `${counter > 1 ? counter : ""}${previousCharacter}`;
		}
		return parsedMessage;
	}
}
