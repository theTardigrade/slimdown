
class ParagraphParser extends BaseParser {
	static readonly PARSERS : Array<any> = [
		SentencesAndNewlineParser,
		SentencesAndEndOfFileParser
	];

	static match( tokens : TokenList ) : BaseNode {
		return BaseParser.matchFirst(tokens, ParagraphParser.PARSERS);
	}
}
