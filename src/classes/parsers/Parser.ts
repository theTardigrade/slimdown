
class Parser {
	static parse( tokens : TokenList ) : BaseNode {
		let body = BodyParser.match(tokens);

		if (body.consumed < tokens.count) {
			throw new Error("Not all tokens consumed.");
		}

		return body;
	}
}