
class BoldTextParser extends BaseParser {
	static match( tokens : TokenList ) : BaseNode {
		if (!tokens.peek_or(
			[
				["UNDERSCORE", "UNDERSCORE", "TEXT", "UNDERSCORE", "UNDERSCORE"],
				["STAR", "STAR", "TEXT", "STAR", "STAR"],
			]
		)) {
			return BaseNode.newNull();
		}

		return new BaseNode("BOLD_TEXT", tokens.third.value, 5);
	}
}
