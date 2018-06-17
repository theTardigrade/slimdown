
class BodyParser extends BaseParser {
	static match( tokens : TokenList ) : BaseNode {
		let { nodes, consumed } = BaseParser.matchStar(tokens, ParagraphParser);

		if (!consumed) {
			return BaseNode.newNull();
		}
		
		return new BaseNode("BODY", "", consumed, nodes);
	}
}
