class SimpleScanner {
	static readonly TOKEN_TYPES : {[index: string] : string} = Object.freeze({
		"_": "UNDERSCORE",
		"*": "STAR",
		"\n": "NEWLINE"
	});

	static fromString( markdown : string ) : Token {
		let char = markdown.charAt(0);

		if (char in SimpleScanner.TOKEN_TYPES) {
			return new Token(SimpleScanner.TOKEN_TYPES[char], char);
		}

		return Token.newNull();
	}
}
