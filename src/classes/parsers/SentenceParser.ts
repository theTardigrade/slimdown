


class SentenceParser extends BaseParser {
	static readonly PARSERS : Array<any> = [
		EmphasizedBoldTextParser,
		EmphasizedTextParser,
		BoldTextParser,
		PlainTextParser
	];

	static match( tokens : TokenList ) : BaseNode {
		return BaseParser.matchFirst(tokens, SentenceParser.PARSERS);
	}
}
