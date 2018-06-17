
class SentencesAndNewlineParser extends BaseParser {
	static match( tokens : TokenList ) : BaseNode {
		let { nodes, consumed } = BaseParser.matchStar(tokens, SentenceParser);

		if (!nodes.length || !tokens.peek_at(consumed, ["NEWLINE"])) {
			return BaseNode.newNull();
		}

		++consumed; // consume newline

		for (let i = 0; ; ++i) {
			if (!tokens.peek_at(consumed + i, ["NEWLINE"])) {
				consumed += i;
				break;
			}
		}

		return new BaseNode("PARAGRAPH", "", consumed, nodes);
	}
}
