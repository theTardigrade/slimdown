
class EmphasizedBoldTextParser extends BaseParser {
	static match( tokens : TokenList ) : BaseNode {
		if (!tokens.peek_or(
			[
				["STAR", "STAR", "UNDERSCORE", "TEXT", "UNDERSCORE", "STAR", "STAR"],
				["UNDERSCORE", "STAR", "STAR", "TEXT", "STAR", "STAR", "UNDERSCORE"],
				["STAR", "UNDERSCORE", "UNDERSCORE", "TEXT", "UNDERSCORE", "UNDERSCORE", "STAR"],
				["UNDERSCORE", "UNDERSCORE", "STAR", "TEXT", "STAR", "UNDERSCORE", "UNDERSCORE"]
			]
		)) {
			return BaseNode.newNull();
		}

		return new BaseNode("EMPHASIZED_BOLD_TEXT", tokens.fourth.value, 7);
	}
}
