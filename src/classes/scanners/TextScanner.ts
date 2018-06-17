
class TextScanner extends SimpleScanner {
	static fromString( markdown : string ) : Token {
		let i, l, char, token;

		for (i = 0, l = markdown.length; i < l; ++i) {
			char = markdown.charAt(i);
			token = SimpleScanner.fromString(char);

			if (!token.isNull) {
				break;
			}
		}

		return new Token("TEXT", markdown.slice(0, i));
	}
}
