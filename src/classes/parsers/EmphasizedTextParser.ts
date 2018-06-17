
class EmphasizedTextParser extends BaseParser {
	static match( tokens : TokenList ) : BaseNode {
		if (!tokens.peek_or(
			[
				["UNDERSCORE", "TEXT", "UNDERSCORE"],
				["STAR", "TEXT", "STAR"],
			]
		)) {
			return BaseNode.newNull();
		}

		return new BaseNode("EMPHASIZED_TEXT", tokens.second.value, 3);
	}
}
