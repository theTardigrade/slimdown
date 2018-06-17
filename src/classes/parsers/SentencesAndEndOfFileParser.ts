
class SentencesAndEndOfFileParser extends BaseParser {
	static match( tokens : TokenList ) : BaseNode {
		let { nodes, consumed } = BaseParser.matchStar(tokens, SentenceParser);

		if (!nodes.length) {
			return BaseNode.newNull();
		}
		
		if (tokens.peek_at(consumed, ["EOF"])) {
			++consumed;
		} else if (tokens.peek_at(consumed, ["NEWLINE", "EOF"])) {
			consumed += 2;
		} else {
			return BaseNode.newNull();
		}

		return new BaseNode("PARAGRAPH", "", consumed, nodes);
	}
}
