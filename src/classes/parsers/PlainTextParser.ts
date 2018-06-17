
class PlainTextParser extends BaseParser {
	static match( tokens : TokenList ) : BaseNode {
		if (!tokens.peek("TEXT")) {
			return BaseNode.newNull();
		}

		return new BaseNode("PLAIN_TEXT", tokens.first.value, 1);
	}
}
